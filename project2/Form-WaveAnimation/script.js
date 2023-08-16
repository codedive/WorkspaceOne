const labels=document.querySelectorAll('.form-control label')

labels.forEach(label =>{
    label.innerHTML= label.innerText
    .split('')
    .map((letter,idx)=> `<span style="transition-delay:${idx*50}ms">${letter}</span>`)
    .join('')

/*we want to get the inner text in our text which is just going to be each letter e ,m ,a,i,l */
/*then split into array its work is if we put an empty string here it splits the letters into array so it will be an array with first value be E seconnd be m and so on*/
/*after that we want to manipulate  so use .map which can be ue on array which now this turn it into array so we want to turn into array of letters with a span ariund it with transition */
/*also i want index starting from 0 and increase for every item in array and then turn into span */
/*also we want it to be string so we can use join and just pass in an empty string that will turn back into a string */
/*so we are looping through label we have inner text email */
})