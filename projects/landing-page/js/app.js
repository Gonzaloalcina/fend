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
 * Define Global Variables
 * 
*/

const topmenu = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

const navBuilder = () => {
    //var where we are going to write the html
    let navCode = '';
    sections.forEach(section => {
        let sectionId = section.id; //store ids of sections
        let sectionDataNav = section.dataset.nav; //store datanav
        navCode += `<li><a class="menu__link" href="#${sectionId}">${sectionDataNav}</a></li>`;
    });
    topmenu.innerHTML = navCode;
}

navBuilder();

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


