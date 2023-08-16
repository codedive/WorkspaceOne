const boxes = document.querySelectorAll('.box')
/**this will put all boxes into an array or node list and then we wnt to fire off an event when we scroll */
window.addEventListener('scroll', checkBoxes)
/*window added with event scroll and when that happens we will have a func call checkboxes bcse we want to check the position of each box*/
checkBoxes()
/* with this func we need to find out thw trigger point */
/*means where we want when we scroll down and vixeversa */
function checkBoxes() {
    console.log(window.innerHeight);
    /*window height is 730 not counting console*/
    /*so to find triggr point so we know its scroll in we r going to want that to be a little less than inner height */
    /*we cant use fixed no bcse height could be diffenrt on at any point */
    /*so divide it by 5 and multiply by 4  it will give trigger point*/
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
/*so this method getboundclientreact return dom rectsngle object providing info about the size of element and position related to viewport*/
/*so we want to see where the top of that particular box is */   
if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}