/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

//navbar variables
const navbar = document.querySelector('#navbar');
const menu = document.querySelector('#hamburger-menu');
const sections = document.querySelectorAll('.division');
const resourcesSection = document.querySelector('#section1');
const educationSection = document.querySelector('#section2');
const designSection = document.querySelector('#section3');
const projectSection = document.querySelector('#section4');

//viewport variables
const viewportHeight = document.documentElement.clientHeight;
const subsections = document.querySelectorAll('.subdivision');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function highlighter() {
    //loop through subsections
    for (subsection of subsections) {
        //find subsection position
        const top = subsection.getBoundingClientRect().top;
        const bottom = subsection.getBoundingClientRect().bottom;
        //if subsection is in viewport, add class, remove once subsection is out of viewport
        if (top<viewportHeight && bottom>0) {
            subsection.classList.add('active');
        } else {
            subsection.classList.remove('active');
        }
    }
}

function navBarFunctionality () {
    //toggle navbar display on small screens
    if (navbar.style.display==="none") {
        navbar.style.display="block";
    } else {
        navbar.style.display="none";
    }
}

document.addEventListener ('scroll', highlighter);
menu.addEventListener('click', navBarFunctionality)


// Build menu 
for (section of sections) {
    const navItem = document.createElement('li');
    navbar.append(navItem);
    const anchor = document.createElement('a');
    anchor.setAttribute('href',`#${section.dataset.section}`);
    anchor.innerText=section.dataset.nav;
    navItem.append(anchor);
}