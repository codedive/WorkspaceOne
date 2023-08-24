const form = document.getElementById('form')
const input = document.getElementById('input')
const todosUL = document.getElementById('todos')

//if there are local storage we want tem to load here
//it is goinf to be stored as string we want to parse back it to array
const todos = JSON.parse(localStorage.getItem('todos'))

if(todos) { //if these exist in local storage then
    todos.forEach(todo => addTodo(todo))
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    addTodo()
})

function addTodo(todo) {
    let todoText = input.value

    if(todo) { //if todo is passed in
        todoText = todo.text
    }

    if(todoText) {
        const todoEl = document.createElement('li')
        if(todo && todo.completed) {
            todoEl.classList.add('completed')
        }

        todoEl.innerText = todoText //jo bhi hum likhenge upr eneter marte se nehe aa jayeghe 

        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('completed') // jab neche save hojae aur click kre toh usme complete class add ho jayeghe aur cross lag jayegha
            updateLS()
        }) 

        todoEl.addEventListener('contextmenu', (e) => {
            //contextmenu is right click 
            e.preventDefault()

            todoEl.remove()
            updateLS()
        }) 

        todosUL.appendChild(todoEl)

        input.value = '' // clearing the form

        updateLS() //update local storage
    }
}

function updateLS() { //this will tale all the todos list item and put the in local stoarge
 
    todosEl = document.querySelectorAll('li')

    const todos = []

    todosEl.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        })
    })

    localStorage.setItem('todos', JSON.stringify(todos))
    //'todos' is just name u can give any and if u have any array or object
    //or something like that u can save it but first wrap in json.string
    //for storing todo to local storage using browser api using above syntax
}