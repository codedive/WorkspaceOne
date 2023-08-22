const loveMe = document.querySelector('.loveMe')
const times = document.querySelector('#times')

let clickTime = 0
let timesClicked = 0

loveMe.addEventListener('click', (e) => {
    // creating our own double click 
    //basically we r trying to find the time btw clicks and if its less than certain amount like say 800ms then it is consider as double click
    if(clickTime === 0) {
        clickTime = new Date().getTime() //its not going to work again  bcse its in this if statement click time is no long equl to 0
        if((new Date().getTime() - clickTime) < 800) {
            createHeart(e)
            clickTime = 0
        } else {
            clickTime = new Date().getTime()
        }
    }
})

const createHeart = (e) => {
    const heart = document.createElement('i') // create heart 
    heart.classList.add('fas')
    heart.classList.add('fa-heart')

    const x = e.clientX // x axis m pos jha click kra h
    const y = e.clientY

    const leftOffset = e.target.offsetLeft
    const topOffset = e.target.offsetTop

    const xInside = x - leftOffset // bcse we want to show within image not in entire viewport
    const yInside = y - topOffset

    heart.style.top = `${yInside}px` // dynamic pos of heart
    heart.style.left = `${xInside}px`

    loveMe.appendChild(heart)

    times.innerHTML = ++timesClicked

    setTimeout(() => heart.remove(), 1000)
}