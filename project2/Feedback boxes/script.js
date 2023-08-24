const ratings = document.querySelectorAll('.rating')
const ratingsContainer = document.querySelector('.ratings-container')
const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')
let selectedRating = 'Satisfied'


// event bubling use bcse if we have multiple no of rating sboxes its not efficient to apply eventon such huge no
//means agar hum send review m click kre wo toh fire off ho he sath m uska parent bhi ho jo ke yaha pe panel h
ratingsContainer.addEventListener('click', (e) => {
    //use rating conatiner which wraps 3 boxes the button is not in ratings
    // so it will not fire that off if we use it 
    // so jab hum btn click krenghe yeah ratingcont will not fire off bcse 
    //its not parent of send btn its actally  sibling
    if(e.target.parentNode.classList.contains('rating')) {
       //means agar hum khi pe bhi click kre eg img kon ke panel ke andr h 
       //aur rting k andr h toh hume console m img show kr deghe means i want  to 
       // target particular location
        removeActive()
        e.target.parentNode.classList.add('active')
        //add the class active not on taget that img but  want parent node 
        //mean agar hum aab img m click krenghe toh u will see it has box around it
       selectedRating = e.target.nextElementSibling.innerHTML
       //e.target is image we want text unhaapy,happy which is sibling of img
    
 }

})

sendBtn.addEventListener('click', (e) => {
    //when we click on btn we want to take panel and want to change its inner html
    panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support</p>
    `
})

function removeActive() {
    for(let i = 0; i < ratings.length; i++) { //ratings is the 3 boxes
        ratings[i].classList.remove('active')
    }
}