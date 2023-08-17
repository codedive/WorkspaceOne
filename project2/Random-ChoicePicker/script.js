const tagsEl=document.getElementById('tags');
const textarea=document.getElementById('textarea')

textarea.focus() //automatic focus on textarea when we load page

textarea.addEventListener('keyup',(e)=>{
/* these event provide code indicating which key is pressed */
/* when this happens we call a func create tags and we pass in .target.value which is going to be whatever we type in */
createTags(e.target.value)

if(e.key === 'Enter') {
    setTimeout(() => {
        e.target.value = '' // clearing the input value with .target dot value
    }, 10)

    randomSelect()
}

})

function  createTags(input){
/* also when we put comma it should create an array of whatever is on either side of these comments */

const tags=input.split(',').filter(tag=>tag.trim()!=='').map(tag=>tag.trim())
    
/*converting string into array separated by , and for removing empty spaces use filter mmethod */
/*trim will trim the space if its not a empty string */
/* then use map which will just manipulate the array so for each tag we want to return an array with tag but we want ot return*/
/*now let get these tags put into our html */
/*so we will get rid of that and lets take tagsEl and clear it */
/*otherwise they will increase in quantity */

tagsEl.innerHTML=''

/*then take tags which is an array and loop through it */
tags.forEach(tag => {
    const tagEl = document.createElement('span')
    tagEl.classList.add('tag')//added class tag
    tagEl.innerText = tag
    tagsEl.appendChild(tagEl)/*after this step whatever we write in textarea will come downside  */
})
}

// here we want  the ability to hit enter and then have it randomly select 
// to highlight and it will give cool little animation
function randomSelect() {
    const times = 30// this represnt no of times it will highlight leeter before it stops

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()
	
	if (randomTag !== undefined) { //this all is used for highlighting and unhighlighting tags
        highlightTag(randomTag)

        setTimeout(() => {
            unHighlightTag(randomTag)
        }, 100)
	}
    }, 100);

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {/*pick a random tag to stop  */
            const randomTag = pickRandomTag()

            highlightTag(randomTag)
        }, 100)

    }, times * 100)
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]//node list me hogha store tags
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}
