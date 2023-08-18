const buttons = document.querySelectorAll('.ripple')
/* we want riiple effect on multiple button as long as they have class ripple */
buttons.forEach(button => {
    button.addEventListener('click', function (e) {
     
     // the firs thing is where we click in viewport but its only gping to fire if we click button
        const x = e.pageX
        const y = e.pageY

        // now nwxt thing is we want pos of button where it start from x and where from y
// created variable buttontop and we will set targte which is always the element that the event fires off
// property offsettop gives us where it start at top 
const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        const xInside = x - buttonLeft
        //xinside  is the pos inside btn and then we take x value where we click in viewport
        const yInside = y - buttonTop

        /*crete circle element */
        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        // this keyword pertining to this element and then append
        this.appendChild(circle) //this doesnt work with arrow func so upr se hta deya


        // removing the data from dom whenver we click on btn
        setTimeout(() => circle.remove(), 500)
    })
})