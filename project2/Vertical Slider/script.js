const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
/* this give us info about length of slides meaning how many slides we have */

const slidesLength = slideRight.querySelectorAll('div').length
/* right slide m kitne div h unke no btayeha yeah  */

let activeSlideIndex = 0

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`/* top m last wala jayenghe jese he hum up wala button click krenghe bcse 4-1=3 so 3 index wala top m jayegha */
/* - bcse initaillay nature flower is in pos in left and is going to go up and initail top value is going to be - */
// after this flying eagle on left and pics of eagle on right


upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

 const changeSlide = (direction) => {
     const sliderHeight = sliderContainer.clientHeight
     if(direction === 'up') {
         activeSlideIndex++
        if(activeSlideIndex > slidesLength - 1) {
              activeSlideIndex = 0
      }
      // basically means if we go to end we r going to go back to beg

   } else if(direction === 'down') {
        activeSlideIndex--
       if(activeSlideIndex < 0) {
           activeSlideIndex = slidesLength - 1
      }
     }

slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
//- bcse we want our right side to go up 
slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
    }