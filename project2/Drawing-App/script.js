const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEL = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');

const ctx = canvas.getContext('2d'); /*create context */

let size = 10
let isPressed = false
colorEl.value = 'black'
let color = colorEl.value
let x
let y

canvas.addEventListener('mousedown', (e) => {
    isPressed = true

    x = e.offsetX //pos of x when mouse id pushdown
    y = e.offsetY
})

document.addEventListener('mouseup', (e) => {
    isPressed = false  // this is when i leave the mouse and dont draw anything

    x = undefined
    y = undefined
})

canvas.addEventListener('mousemove', (e) => {
    if(isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY
 

        drawCircle(x2, y2) 
        // drawlines is used bcse circles need to move constantly when we move the mouse
        drawLine(x, y, x2, y2)
        // x2 and y2 is where we draw the line but we need to add the move to pos so x1 and y1 of draw lines are those so name them here x,y

        x = x2 // set the value of x current position  is
        y = y2
    }
})

function drawCircle(x, y) { // x is distance from x axis and y is from y axis
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2) // 0 will be start and math.    will be end
    ctx.fillStyle = color
    ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2 // *2 bcse circle radius and line width are diff things
    ctx.stroke()
}

function updateSizeOnScreen() {
    sizeEL.innerText = size
}

increaseBtn.addEventListener('click', () => {
    size += 5

    if(size > 50) {
        size = 50
    }

    updateSizeOnScreen()
})

decreaseBtn.addEventListener('click', () => {
    size -= 5

    if(size < 5) {
        size = 5
    }

    updateSizeOnScreen()
})

colorEl.addEventListener('change', (e) => color = e.target.value)

clearEl.addEventListener('click', () => ctx.clearRect(0,0, canvas.width, canvas.height))
//0 0  bcse we want to go to entire canvas 