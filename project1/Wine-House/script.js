let counter1 = 0; /* this will help us to define which sec is currently displayed by default */
let counter2 = 1;/*this weill hold previous state  */
let bool = true;


const sections = document.querySelectorAll("section");
const progress = document.querySelector(".progress h2");/*select heading */
const circles = document.querySelectorAll(".circle");
const menu = document.querySelector(".menu");
const section1wrapper = document.querySelector(".section-1-wrapper");
const section5wrapper = document.querySelector(".section-5-wrapper");

section1wrapper.style.transform = "scale(1)";


/*we have make func procounter for progressbar we have to make this heading dynamic and also take care of circles */
const progressCounter = () => {
/*we need to change the content of heading as right side of it */
/*as i am going to use counter2 bcse it is starting with one and goes till 5 */
/*second part will be length of section-list */
/*in order to change content of element use property textcontent */
progress.textContent = `${counter2}/${sections.length}`;


/*transforming circle to array */
  Array.from(circles).forEach((circle) => {
    circle.style.backgroundColor = "transparent";
  });
  document.querySelector(`.circle-${counter2}`).style.backgroundColor = "#ddd";
};

/*we have to call pagecontroller func on evvry click */
/*if page controller func retrn true then we need to run this code here */
/*and if it return false then just this func will be executed whih is compltely enough */
/*we have used pagecontroller()&& */
const pageController = () => {
  bool = true;/* we need to set this varaiable to true  */
  /*in this case on each execution of func bool is updatd to true */
  /*but if stat is executed bool is set to false */
  /*if counter1-5 we are at footer and we no longer need to display  the page*/
  if (counter1 === 5) {
    Array.from(sections).forEach((section) => { /*section is curren sec */
      section.style.left = "0";
      /*we have to make a left pos for all sec=0 */
    });
    counter1 = 0; /*reset both counter */
    counter2 = 1;
    section1wrapper.style.transform = "scale(1)";
    
    section5wrapper.style.transform = "scale(1.5)";
    progressCounter();
    bool = false;/*  when if stat s exec*/
}
  /*finally use a return statement which will allow us to terminate the execu of any other code in this func */
/*when first page is displayed and when we scroll up then we get an error saying cant read property style of null  */
/*so in this case move all sec to left side by -100vw  and we have to display footer */  
if (counter1 === -1) {
    Array.from(sections).forEach((section) => {
      if (section.classList[0] === "section-5") {
        return;
        /*if this cond is true then we have to terminate executing of this func by using return */
      }
      section.style.left = "-100vw";
      /*in all other cases we have to make left pos of this sec -100vw */
    });
    counter1 = 4;
    counter2 = 5;/*counter is set to 4 and 5 bcse footer will be displayed */
    section1wrapper.style.transform = "scale(1.5)";
    section5wrapper.style.transform = "scale(1)";
    progressCounter();/*also call progresscounter func */
    bool = false;
  }
  /*calling this progress counter also inside if   so now no will change from 1 to 4 on scrolling pages*/
  progressCounter();
  return bool;/*return bool */
};

window.addEventListener("wheel", (e) => { /*attach an event listener to global window object  */
/* event wheel is used this event will be fired whwn we move the wheel of mouse */  
const deltaY = e.deltaY > 0;/* deltay is property we used when we want to scroll page up or down by default its value is -100 */
/*so if value of deltay is pos then we have to nav to next page if neg go prev page */
  if (deltaY) {
    counter1++;
    counter2++; /*for holding previous state */
  } else {
    counter1--;
    counter2--;
  }

  pageController();/* call this func inside wheel  */

  /*when we scroll down and reach footer then on next scroll we get error cannot red style of null */
  /*it happen bcse on last scroll if statement was executed inside page controller func */
  /*it may be counter 0 we dont have sec with this no  and ie we get error */
  /* so when it happen i mean when one of if stement is executed we dont wnt to run  ).style.left = `${deltaY ? "-100vw" : "0"}`;*/
  /*to fix that we need to return a bool value from page controller func */
  progressCounter();
  console.log(counter1, counter2);

  if (bool) {
    document.querySelector(/*run this code once bool is true*/
      `.section-${deltaY ? counter1 : counter2}`
/*once section is selected then we have to change its style means we have to move the sec to left by 100vw*/     
/*so we need style .left and we have to set it to -100 vw */
/*once we reach footer and scroll again then we will gwt the white bg */
/*actually its a container and on next scroll we will get an error bcse we dont have sec */
/*beside this we see here part of sec4 as width of its blurr bg is eqaul to 110*/ 
/*so hide this by using overflow:hidden */
).style.left = `${deltaY ? "-100vw" : "0"}`;
/*in above we use backtick to check if deltay is + or - */
/*so if deltay is true we have to move this sec to left side by -100vw and if false then 0 */
/*when scrolling down the counter is inc by 1 and we can see next pages in seq but when we scroll up we cant see the previous page  */ 
/*this happen bcse when we scroll down the counter is incr by 1  and once we scroll up it is dereased*/
/*we need to maintin its last value so make another counter counter2*/
document.querySelector(
      `.section-${deltaY ? counter1 : counter2}-wrapper`
    ).style.transform = `scale(${deltaY ? "1.5" : "1"})`;
/*once we reach footer and scroll down we have to show the first page and also all the other pages */
    document.querySelector(
      `.section-${deltaY ? counter1 + 1 : counter2 + 1}-wrapper`
    ).style.transform = `scale(${deltaY ? "1" : "1.5"})`;
  }
});

/*button control */
document.querySelector(".left-btn").addEventListener("click", () => {
  counter1--;
  counter2--;

  /*in order to nav to diff page we have to change the left pos for this sec */
 /*so in case of left btn we will define sec number by using counter 2 */
  pageController() &&
    (document.querySelector(`.section-${counter2}`).style.left = "0");


    /*once we reach footer and click again again we will face to same issue which we had earlier  wheel event*/
  /*creted a fun page controller and used it multiiplr times where needed */
    if (bool) {
    document.querySelector(`.section-${counter2}-wrapper`).style.transform =
      "scale(1)";
    document.querySelector(`.section-${counter2 + 1}-wrapper`).style.transform =
      "scale(1.5)";
  }
});

document.querySelector(".right-btn").addEventListener("click", () => {
  counter1++;
  counter2++;
  pageController() &&
    (document.querySelector(`.section-${counter1}`).style.left = "-100vw");

  if (bool) {
    document.querySelector(`.section-${counter2}-wrapper`).style.transform =
      "scale(1)";
    document.querySelector(`.section-${counter1}-wrapper`).style.transform =
      "scale(1.5)";
  }
});

document.querySelector(".grapes-img").addEventListener("mouseover", () => {
  document.querySelector(".section-3-wrapper").style.opacity = ".5";
});

document.querySelector(".grapes-img").addEventListener("mouseout", () => {
  document.querySelector(".section-3-wrapper").style.opacity = "1";
});

menu.addEventListener("click", () => {
  document.querySelector(".navbar").classList.toggle("change");
});
