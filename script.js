// For selecting single element
const select = (selector) => {
    const select = document.querySelector(selector);
    return select;
};

// For selecting multiple element
const selectAll = (selector) => {
    const selectAll = document.querySelectorAll(selector);
    return selectAll;
};

// Navbar open and close for SMALL and MEDIUM Devices
const navBar = select("header nav");
const navBack = select(".nav-background");

const navIconOpen = select(".nav-icon");

navIconOpen.addEventListener('click', () => {
    navBar.classList.add("active");
    navBack.classList.add("active")
});

const navIconClose = select(".nav-icon-close");

navIconClose.addEventListener('click', () => {
    navBar.classList.remove("active");
    navBack.classList.remove("active")
});


// Dropdown for SMALL and MEDIUM Devices
const listItem = selectAll(".dropdown-list");
let arrowIcons = selectAll("a .arrow")

listItem[0].addEventListener('click', () => {
    const dropdownOne = selectAll(".dropdown")[0];

    dropdownOne.classList.toggle("active");
    arrowIcons[0].classList.toggle("active");
});

listItem[1].addEventListener('click', () => {
    const dropdownTwo = selectAll(".dropdown")[1];
    
    dropdownTwo.classList.toggle("active");
    arrowIcons[1].classList.toggle("active");
});

// CLOSE Navbar if the click doesn't contain Navbar in SMALL and MEDIUM Devices
document.addEventListener("click", function(e){
    if(!navIconOpen.contains(e.target) && !navBar.contains(e.target)){
        navBar.classList.remove("active");
        navBack.classList.remove("active")
    };
});