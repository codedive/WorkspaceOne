const boxesContainer = document.getElementById('boxes')
const btn = document.getElementById('btn')

btn.addEventListener('click', () =>
 boxesContainer.classList.toggle('big'))

function createBoxes() {
  for (let i = 0; i < 4; i++) { /*four rows and four column  */
    for (let j = 0; j < 4; j++) {
      const box = document.createElement('div')/*construct 16 boxes */
      box.classList.add('box')
      box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`
      /* -j bcse its going to be  0, - 125  ,-250 ,-375etc and multiply by 125 */
      /*similar for y */
      boxesContainer.appendChild(box)
    }
  }
}

createBoxes()