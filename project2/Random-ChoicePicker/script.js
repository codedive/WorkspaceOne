const tagsEl=document.getElementById('tags');/*there are the tags usually container which we will see below textarea when we type something in textarea  */
const textarea=document.getElementById('textarea')

textarea.focus() //automatic focus on textarea when we load page

textarea.addEventListener('keyup',(e)=>{
/* these event provide code indicating which key is pressed */
/* when this happens we call a func create tags and we pass in .target.value which is going to be whatever we type in */
createTags(e.target.value) /* for eg if we type ram in textarea  thi value is stored in textarea */


if(e.key === 'Enter') {
    setTimeout(() => {
        e.target.value = '' // clearing the value means jese he textarea m kuch likha aur enter mara waha se data clear
    }, 10)

    randomSelect() /*calling  a func randomselect which will select any tag randomly and highlight it */
}
})



function  createTags(input){

/* also when we put comma it should create an array of whatever we have typed in textarea*/

const tags=input.split(',').filter(tag=>tag.trim()!=='').map(tag=>tag.trim())
    
/* split method will convert string into array  when separated by , and for removing empty spaces in tags  use filter mmethod */
/*trim will trim the space if its not a empty string */
/* then use map which will just manipulate the array and return a trimmed array

/*now let get these tags and  put into our html  through property inner html */

/*now  take tagsEl and clear it */
/*otherwise they will increase in quantity */
/*so before we do anything we will clear that and then we will take our tags which is an array */
tagsEl.innerHTML=''  

/*then take the mutiple  tags which is an array and loop through it */

tags.forEach(tag => {
    /*so for each tag let create a tag element with doc.creatr */
    const tagEl = document.createElement('span')/*created span jispe hum kuch operation krenghe */
    tagEl.classList.add('tag')// now span k andr tag  class add krenghe these are the  mutiple tags jo ke hum upr text area se neche layee h
    tagEl.innerText = tag  // now tagsel ke andr tag ko add kra
    tagsEl.appendChild(tagEl)/*after this step whatever we write in textarea will come downside  */
})
}

// here we want  the ability to hit enter and then have it randomly select 
// to highlight and it will give cool little animation

function randomSelect() {
    const times = 30// this represnt no of times it will highlight letter before it stops

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

	// this func just selects all random tags highlight them and then unhighlight them
        
    highlightTag(randomTag)

        setTimeout(() => {// highlightih random tags for 100ms and then unhighting
            unHighlightTag(randomTag)
        }, 100)

    }, 100);

// this fnc will stop againa nd again highlight nd unhighlightb operation  and put at last a random tag and highlight it
    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {/*pick a random tag to stop  */
            const randomTag = pickRandomTag()

            highlightTag(randomTag)// highlighting random tag
        }, 100)
    
    }, times * 100) //times=30
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]//node list me hogha store tags
}

function highlightTag(tag) {
    tag.classList.add('highlight')//adding highlight class
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}

