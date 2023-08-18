const smallCups=document.querySelectorAll('.cup-small')
const liters=document.getElementById('liters')
const percentage=document.getElementById('percentage')
const remained=document.getElementById('remained')

updateBigCup()

smallCups.forEach((cup,idx)=>{  
    cup.addEventListener('click',()=> highlightCups(idx))
})


function highlightCups(idx){/*this is index of clicked cup */
if (idx===7 && smallCups[idx].classList.contains("full")) idx--;
else if(smallCups[idx].classList.contains('full')&& !smallCups[idx].nextElementSibling.classList.contains('full')){
   /*smallCups[idx] means smallcups list m konse index wala small cup h */
    /*means agar hum 4th cup ko click kr rhe h aur uska agar next cup fill nhi h then 4 cup ka fill hat jayegha */
    idx--;
}


    smallCups.forEach((cup,idx2)=>{ /*these are index of all small cups staring from 0  */
       if(idx2<=idx)
       {
        cup.classList.add('full')
       }
       else{
        cup.classList.remove('full')
       }
    })

    updateBigCup();
}
function updateBigCup() {
    /* first thing is to get the no of full glasses */
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length/*total cups */

    if(fullCups === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    } else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 330}px`/*330 is heght of big cup */
        percentage.innerText = `${fullCups / totalCups * 100}%`
        /*will show percent value but when it is 100% still some space will left and show remained text */
    }

    if(fullCups === totalCups) {
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    } else {
        remained.style.visibility = 'visible'
        /*also we want text of remained  as we want how much liter is left */
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`
        /*- by 2 bcse 2 is total capacity */
    }
}







