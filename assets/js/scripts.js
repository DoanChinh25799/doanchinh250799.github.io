// Show-Hide input datetime picker
var datetimePicker = document.querySelectorAll(".showDatetimePicker .header__search-item-description");
datetimePicker.forEach(element => {
    element.addEventListener('click', () => {
        var date = element.nextElementSibling;
        let check = (date.style.display == "none");
        if (check) date.style.display = "block";
        else date.style.display = "none";
    })
});

// Window Scroll

var myNav = document.querySelector(".header__navbar");
window.addEventListener('scroll', function (event) {
    event.preventDefault();
    var nav_user = document.querySelector('li.header__navbar-user-item');
    var nav_user_global = document.querySelector('li.header__navbar-user-item i');
    var nav_logo = document.querySelector('.header__logo-img');
    var nav_centre = document.querySelector('.header__navbar-main');
    var nav_centre_item = document.querySelectorAll('.header__navbar-main .header__navbar-main-item');
    var nav_search = document.querySelector('.header__search');
    var nav_top_search = document.querySelector('.header-main-search-btn');
    if (window.scrollY >= 100) {
        myNav.classList.add("active");
        myNav.classList.add("animation");
        myNav.classList.add("header__navbar-shadow");
        myNav.classList.remove("disable");
        nav_centre.style.display = "none";
        nav_search.style.display = "none";
        nav_top_search.style.display = "flex";
        nav_user.setAttribute("style", "color: var(--black-color)");
        nav_user_global.setAttribute("style", "color: var(--black-color)");
        nav_logo.style.fill = "#FF385C";
        nav_centre_item.forEach(e => {
            e.setAttribute("style", "color: var(--white-color)");
        });
    }
    else {
        myNav.classList.add("disable");
        myNav.classList.remove("active");
        myNav.classList.remove("animation");
        myNav.classList.remove("header__navbar-shadow");
        nav_centre.style.display = "flex";
        nav_search.style.display = "flex";
        nav_top_search.style.display = "none";
        nav_user.setAttribute("style", "color: var(--white-color)");
        nav_user_global.setAttribute("style", "color: var(--white-color)");
        nav_logo.style.fill = "var(--white-color)";
    }

    nav_top_search.addEventListener('click', () => {
        nav_centre.style.display = "flex";
        nav_search.style.display = "flex";
        nav_top_search.style.display = "none";
        nav_centre_item.forEach(e => {
            e.setAttribute("style", "color: var(--black-color)");
        });
    })
});

var slides = document.querySelector('.slides');
var prev = document.querySelector('#prev');
var next = document.querySelector('#next');
var width = document.querySelector('.slide-item').clientWidth;

console.log(next, prev, width);

prev.addEventListener("click",()=>{
    slides.scrollLeft -= width;
});

next.addEventListener("click",()=>{
    slides.scrollLeft += width;
});