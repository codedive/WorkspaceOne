const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

let activeSlide = 0 

// for front image we need to change class active to whichwvwe one we wnat to show

rightBtn.addEventListener('click', () => {
  activeSlide++

  if (activeSlide > slides.length - 1) {
    activeSlide = 0
  }

  setBgToBody()
  setActiveSlide() // after this bg image and front image both changes
})

leftBtn.addEventListener('click', () => {
  activeSlide--

  if (activeSlide < 0) {
    activeSlide = slides.length - 1
  }

  setBgToBody()
  setActiveSlide()
})

setBgToBody()

function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

// we want to set the active slide to next image
function setActiveSlide() {
  slides.forEach((slide) => 
  slide.classList.remove('active'))/*first bg  image se active class remove krde*/
// after that i will take slides again thats node list activeslide
  slides[activeSlide].classList.add('active')
}