/*both b utton have same class .navbut */
/*this method returm a node list which is array like object to transform in array we have to loop through button and attach to both  onclick and to convert node list into array use array.dot*/
/*this method array.foreach help to execute the func for each array item separately*/
/* item refer to navigation button */
/*2 level up we have rech card  and classlist store all classe element has*/
/*toogle method add class name to element if not eist and vice versa*/


const container = document.querySelector(".container");

document.querySelector(".open-navbar-icon").addEventListener("click", () => {
  container.classList.add("change");
});

document.querySelector(".close-navbar-icon").addEventListener("click", () => {
  container.classList.remove("change");
});

const colors = ["#6495ed", "#7fffd4", "#ffa07a", "#f08080", "#afeeee"];

let i = 0;

Array.from(document.querySelectorAll(".nav-link")).forEach(item => {
  item.style.cssText = `background-color: ${colors[i++]}`;
});

Array.from(document.querySelectorAll(".navigation-button")).forEach(item => {
    item.onclick = () => {
        item.parentElement.parentElement.classList.toggle("change");
    };
});
