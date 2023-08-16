
document.querySelector('.menu').addEventListener('click',()=>{ /* querselector all method return an array like object nodelist we need to look through this list and add each list item class  change*/
    document.querySelectorAll('.target').forEach((item)=>{  /* foreach loop through each list item . */
    /* this callback func is taling one arg  tht is current item from the list during looping*/
     /*adding the class to ement if not exist otherwise remove */

     item.classList.toggle("change");
});
});
/* section m click krne se section close */
document.querySelectorAll('.wrapper').forEach((item)=>{
item.addEventListener('click',()=>{
    document.querySelectorAll('.target').forEach((item)=>{
        item.classList.remove("change");
    });
});
});


const videos = document.querySelectorAll('.video');
videos.forEach((video)=>{
    video.addEventListener('mouseover',()=>{
        video.play();
    });
    video.addEventListener('mouseout',()=>{
        video.pause();
    })
})
