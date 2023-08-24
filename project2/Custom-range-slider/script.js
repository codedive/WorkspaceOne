const range = document.getElementById('range')

range.addEventListener('input', (e) => {
    const value = +e.target.value //e.target repres the elem that this event list is on which is range
    //+ bcse to convert into number
    const label = e.target.nextElementSibling
 // width of range in css given 300px

 //this below part is to keep the label move with respect to range  parallely
    const range_width = getComputedStyle(e.target).getPropertyValue('width')
    //getcomputedstyle get value from our css like the rang width is 300px
    const label_width = getComputedStyle(label).getPropertyValue('width')


    //converting px vlue in number range basic get the number for range width
    //+se no m convert kro  -2 bcse we are  taking px off 
    const num_width = +range_width.substring(0, range_width.length - 2)
    //this will give 300 not 300px
    const num_label_width = +label_width.substring(0, label_width.length - 2)

    const max = +e.target.max //in number form 
    const min = +e.target.min

   // now use above info to apply left prop to calc to follow the thumb
   //the ball here left is initially set on label right here to 100px whic is middle
   //but we want to change depending on where the thumb is 
   
   const left = value * (num_width / max) - num_label_width / 2 + scale(value, min, max, 10, -10)
//value is current value
//now apply that left value to left css propert of label

    label.style.left = `${left}px`


    label.innerHTML = value
})

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }