const navbar = document.querySelector(".navbar");
const navbarOffsetTop = navbar.offsetTop;
const sections = document.querySelectorAll("section");
const navbarLinks = document.querySelectorAll(".navbar-link");
const progress = document.querySelector(".progress-bars-wrapper");
const progressBarPercents = [97, 89, 85, 87, 80, 70, 50];


/* we  will create class change  and define same style as hovr */

window.addEventListener("scroll", () => {
  mainFn();
});

const mainFn = () => {
  if (window.pageYOffset >= navbarOffsetTop) { /* the pageyoffset propert define distance in pixel that has been covered scroll up and second property define the distance from top edge of page to element here navbar*/
    navbar.classList.add("sticky");/* if this satisfy so sticky class add krdo  and if false remove it */
  } else { /* hmne dusre prop ko variabe m esklye dala bcse we will compare first property with initial pos f navbar and we need to define z index of navbar */
    navbar.classList.remove("sticky");
  }


  /*here we have to check sec and check if we have reach proper sec or not  so first param is current sec  and i is index */
  sections.forEach((section, i) => {
    if (window.pageYOffset >= section.offsetTop - 10) { /*  hume navbarlink highlight thode phle kr dena h dusre sec m puhcne se phle that wy -10 */
      navbarLinks.forEach((navbarLink) => {
        navbarLink.classList.remove("change"); /*upr jane m highlight hatane k liye */
      });
      navbarLinks[i].classList.add("change"); /*current index  */
    }
  });

  if (window.pageYOffset + window.innerHeight >= progress.offsetTop) { /* now we have to set progressbar percent  inner height  height of content visible */
    document.querySelectorAll(".progress-percent").forEach((el, i) => {/* .progress-percent ko css se uthyaa aur upr array se defne krgeh percent unka */
      el.style.width = `${progressBarPercents[i]}%`; /* here el is current item of list and i is index in order to define the proper width from array foreach div element */
      el.previousElementSibling.firstElementChild.textContent =
        progressBarPercents[i];   /* defining the percent value from js dynamically so  we need acess of span element  so first get acess of paragaph */
    });
  }
};
mainFn(); /* i want to run this code once by default begore we scroll in order to remove bad experience so define thus func main  so mne do bar ess func ko bulaya h ek andr h aur ek bar bhar h*/
/*one out of scroll event global scope and one inside of scroll event */
window.addEventListener("resize", () => {
  window.location.reload();   /* we can face problem whn change the window sixe  so we need to reload page once  when we resize window */
});
