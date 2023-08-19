const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

fill.addEventListener('dragstart', dragStart) // dragstart is event and all must be in lowercase and second one is function
fill.addEventListener('dragend', dragEnd)

for(const empty of empties) { //for of loop  second empties is nodelist which is array
    empty.addEventListener('dragover', dragOver) // adding remaining event listener and func 
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
}

function dragStart() { // dragstart is on fill element
    this.className +=' hold'  //adding class hold we still want it to have class fill so += will append
    
    setTimeout(() => this.className = 'invisible', 0)
    // this is used bcse i want as soon as i drag image out of box it must get invisible from box
// also if i deag and doesnt drop anywhere it will be placed at default place bcse it has class fill in first div
}

function dragEnd() {
    this.className = 'fill'
}

function dragOver(e) {
    e.preventDefault()
}

function dragEnter(e) {
    e.preventDefault()
    this.className += ' hovered'
}

function dragLeave() {
    this.className = 'empty'
}

function dragDrop() {
    this.className = 'empty' // before dropping it must have empty class
    this.append(fill)
}