document.querySelector('.menu').addEventListener('click', () => { 
	document.querySelectorAll('.target').forEach((item) => {   /* acceing nav and menu throuh same class target  */
		item.classList.toggle('change'); 
	})
})


const icons = document.querySelectorAll('.section-1-icons i') /* this cmd will allow us to select all icons */
let i = 1; 

setInterval(() => {
	i++
	const icon = document.querySelector('.section-1-icons .change') /* loding first icon */
	icon.classList.remove('change') /* this method will return an array of icons and remove first icon afyer it has loaded  */

	if (i > icons.length) {
		icons[0].classList.add('change') /*agaib runnuing from start when icons re over */
		i = 1
	} else {
		icon.nextElementSibling.classList.add('change') /* returnn  remaining icons*/
	}
}, 2000)