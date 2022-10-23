const listNav = document.getElementById("navbar__list");
const sections = [...document.querySelectorAll("section")]
let navListContainer = '';

/**
 * make list items 
 */

function navUlList() {
    sections.forEach(section => {
        const sectionID = section.id;
        const sectionAtrribute = section.dataset.nav;
        navListContainer += `<li> <a class="list_sec" data-nav="${sectionID}" href="#${sectionID}">${sectionAtrribute}</a></li>`
    })
    listNav.innerHTML = navListContainer;
}
navUlList();

/** when click on nav links && animation */

listNvScrol = [...document.querySelectorAll('a[href^="#"]')];
// console.log(listNvScrol);

listNvScrol.forEach(a => {
    a.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(a.getAttribute('href')).scrollIntoView({
            behavior: "smooth",
            block: "end"
        });

    });
});


//listNav.addEventListener("click", () => { document.scrollIntoView({ behavior: "smooth" }) });

/**animation to sections and nav bar <a>link  highlight*/

window.onscroll = function () {
    sections.forEach((element) => {
        let navActv = listNav.querySelector(`[data-nav=${element.id}]`);
        if (element.getBoundingClientRect().top <= 110 && element.getBoundingClientRect().top >= -520) {
            element.classList.add("your-active-class");
            navActv.classList.add("navSec-active");
        } else {
            element.classList.remove("your-active-class");
            navActv.classList.remove("navSec-active");
        }
    });
}
/*
test element position
*/
// console.log(document.getElementById("section1").getBoundingClientRect());
// console.log(document.getElementById("section2").getBoundingClientRect());
// console.log(document.getElementById("section3").getBoundingClientRect());
//sction h529
