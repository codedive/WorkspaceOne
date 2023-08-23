const addBtn = document.getElementById('add')

//hum notes ko local storage se dom m dekhana h jab ek bar reload ke 
//bad notes gyab ho jae but still exist in dom
//aab load kre m bhi data gyab nhi hogha even if i delete
const notes = JSON.parse(localStorage.getItem('notes'))

if(notes) {
    notes.forEach(note => addNewNote(note))
}

addBtn.addEventListener('click', () => addNewNote())

function addNewNote(text = '') {
    const note = document.createElement('div')
    note.classList.add('note')

    note.innerHTML = `
    <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>

    <div class="main ${text ? "" : "hidden"}"></div>

    <textarea class="${text ? "hidden" : ""}"></textarea>
 
    `
/* for this div if there is text whhich we did pass in,
addBtn.addEventListener('click', () => addNewNote('hello world')) line no 9
then we have no class else add hidden class */
/*agar hum upr func addnewnote m kuch text na dale toh textarea m ayegha sab  */
    /*so if there is text we want to add the class of hidden on text area */

    const editBtn = note.querySelector('.edit')
    const deleteBtn = note.querySelector('.delete')
    const main = note.querySelector('.main')
    const textArea = note.querySelector('textarea')


    /*neche ke line ka use jab hum kuch addnewnote
    me kuch value pass kre tab hum sedhe show krna chahyenghe in textarea
     then */
    textArea.value = text
    main.innerHTML = marked(text)
//text area has value so u dont do texxt area in html main is div
//so i am going to set innerhtml to text but i want it to be markdown
    deleteBtn.addEventListener('click', () => {
        note.remove()
 // aab delete ka btn pe note delete ho jayegha screen se
        updateLS()
    })

    editBtn.addEventListener('click', () => {
        main.classList.toggle('hidden')
        textArea.classList.toggle('hidden')
       /*so when we click on edit then take main class list and toggle the
       hidden class  and do same thing for textarea*/
       /*means jab phle bar edit m click krenghe toh neche wala textarea 
       active ho jyegha aur hum  kuch bhi likh skte h
       dusre bar jab edit m clcik krne pur ht jayegha jo likha hogha   */
/* if i click add note i already had hello word there so this is the text 
now  this is main version ica nt edit it and if i click edit its same thing
now i want to make it so that if i update this like i change that to hii
and then i click that show here as well so add eventlistener which is down shown*/

    })

    textArea.addEventListener('input', (e) => {
        const { value } = e.target

        main.innerHTML = marked(value)
// esse hum edit krke  hello word ko hii bhi kr sktw h
//since w r using marked lib we should be able to add markdowns
        updateLS()
    })

/*and then to put in dom we can take our document body which
 is just browser body and append child means we want to add
something in it and we want to add the note every time we 
click the button */

    document.body.appendChild(note)
}

function updateLS() { //updating local storage
    const notesText = document.querySelectorAll('textarea')

    const notes = [] // so this array i want to store in local storage

    notesText.forEach(note => notes.push(note.value))

    localStorage.setItem('notes', JSON.stringify(notes))
    //we can only store string in local storage and if u want to 
    //store object or array they must be stringifyied
}