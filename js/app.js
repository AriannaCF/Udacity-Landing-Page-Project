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

/* Global Variables */
const navbar = document.querySelector('#navbar');
const menu = document.querySelector('#hamburger-menu');
const sections = document.querySelectorAll('.division');

const viewportHeight = document.documentElement.clientHeight;
const subsections = document.querySelectorAll('.subdivision');
const up = document.querySelector('#up-chevron');
const header = document.querySelector('#page-header');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

//activates styling when element is in the viewport
function highlighter() {
    subsections.forEach(subsection => {
        const top = subsection.getBoundingClientRect().top;
        const bottom = subsection.getBoundingClientRect().bottom;
        if (top<viewportHeight && bottom>0) {
            subsection.classList.add('active');
        } else {
            subsection.classList.remove('active');
        }
    }
    )
}
//highlights active section in navbar
function classMaster () {
    let current = navbar.getElementsByClassName('active');
    if (current.length>0) {
        current[0].className = current[0].className.replace(' active', '');
    }
    this.className+=' active';
}
//toggles hamburger menu on smaller screens
function navBarFunctionality () {
    if (navbar.style.display==="none") {
        navbar.style.display="block";
    } else {
        navbar.style.display="none";
    }
}
//scroll back to top
function backToTop (e) {
    e.preventDefault();
    header.scrollIntoView({
        behavior:'smooth'
    })
}
//hide up chevron above the fold
function scrollUp () {
    let y = window.scrollY;
    if (y>=812) {
        up.classList.add('shown');
        up.classList.remove('hidden');
    } else { 
        up.classList.remove('shown');
        up.classList.add('hidden')
    }
}
//Add event listeners

document.addEventListener ('scroll', highlighter);
document.addEventListener ('scroll', scrollUp)
menu.addEventListener('click', navBarFunctionality);
up.addEventListener('click', backToTop);


// Build menu

sections.forEach(section => {
    const navItem = document.createElement('li');
    navbar.append(navItem);
    const anchor = document.createElement('a');
    anchor.setAttribute('class', 'button');
    anchor.innerText=section.dataset.nav;
    navItem.append(anchor);
//smooth scroll to clicked link
    navItem.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(`#${section.dataset.section}`).scrollIntoView({
            behavior:'smooth'
        });
    })
    const segments = document.getElementsByClassName('button');
    for (let i=0; i<segments.length; i++) {
        segments[i].addEventListener('click', classMaster)
        }});

