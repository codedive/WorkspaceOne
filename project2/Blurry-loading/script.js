const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

let int = setInterval(blurring, 30)
/* now we want to run this func in a interval and i want to run every 30 millisecond */

function blurring() {
  load++

  if (load > 99) {
    clearInterval(int) // this int represnet this set interval
  }

  loadText.innerText = `${load}%`/*for loding percent value */
  loadText.style.opacity = scale(load, 0, 100, 1, 0) /* the opacity value isnt going to be load value bcse that goes from 0 to 100 and opacity goes from 0 to 1 */
  // above scale func is used for maaping a range of number to another range of number
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`

  // we have to map 0 to 100 to 30 to 0 bcse we r going to start blurred
  // so we want to start at 30 pixels and bring it down to 0 whwn the koad is done
// so u can now see bg image is going from blur of 30pixel down to 0 in same amount of time that load goes from 0 to 100
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}