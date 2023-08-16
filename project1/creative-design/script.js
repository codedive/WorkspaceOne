document.querySelectorAll('.story-btn').forEach(btn=>{ 
    btn.addEventListener('click',()=>{  /* click event added */ 
        btn.classList.toggle('change')   /* classlist toogle method taken on class change it will change the style of button when clickd on it */
        btn.nextElementSibling.classList.toggle('change') /* similary change the story on clicking */
    
    })
})