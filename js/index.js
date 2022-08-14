// PRELOADER
window.addEventListener('load', function () {
    var pagePreloader = document.querySelector('.vh-preloader');
    pagePreloader.classList.add('vh-fade-out');
    setTimeout(function () {
        pagePreloader.style.display = 'none';
    }, 2000);
})

// GREET
let greet = document.querySelector('#vh-greet');
let text = "i!";
let interval = 300;

window.addEventListener('load', function () {
    function showText(greet, text, interval) {
        let char = text.split("").reverse();

        let typer = setInterval(() => {

            if (!char.length) {
                return clearInterval(typer)
            }

            let next = char.pop()

            greet.innerHTML += next;

        }, interval)
    }

    setTimeout(function () {
        showText(greet, text, interval)
    }, 2000)
})

// MENU MOBILE
{
    let toggleMenu = document.querySelectorAll('.vh-toggle-menu');
    let menuMobile = document.querySelector('.vh-menu-mobile');
    let overlay = document.querySelector('.vh-menu-overlay');
    let btnMenuIcon = document.querySelector('.vh-btn-menu-mobile i');
    for (let i = 0; i < toggleMenu.length; i++) {
        toggleMenu[i].addEventListener('click', function () {
            menuMobile.classList.toggle('vh-menu-is-closed');
            menuMobile.classList.toggle('vh-menu-is-opened');
            btnMenuIcon.classList.toggle('bi-list');
            btnMenuIcon.classList.toggle('bi-x');
            overlay.classList.toggle("vh-is-open");
        })
    }
}

// CONTACT MODAL
{
    let toggleModal = document.querySelectorAll('.vh-toggle-modal');
    for (let i = 0; i < toggleModal.length; i++) {
        toggleModal[i].addEventListener('click', function () {
            let overlay = document.querySelector('.vh-overlay')
            let contactModal = document.querySelector('#vh-contact-modal')
            overlay.classList.toggle("vh-is-open");
            contactModal.classList.toggle("vh-is-open");
            contactModal.classList.toggle("vh-slide-top-in");
        })
    }
}

// ACTIVE LINK
document.querySelectorAll('.vh-nav-link').forEach(link => {
    if (link.href === window.location.href) {
        link.setAttribute("aria-current", "page");
    }
});

// BOX CONTACT INFO
let btnContact = document.querySelector(".vh-btn-contact");
btnContact.addEventListener("click", function () {
    let boxContactInfo = document.querySelector(".vh-contact-info");
    boxContactInfo.classList.toggle("vh-is-open");
    this.classList.toggle("vh-change-icon");
})

// WAYPOINTS
let myScrollDown = document.querySelector('.vh-scroll-down')
let waypoint = new Waypoint({
    element: myScrollDown,
    handler: function () {
        myScrollDown.classList.toggle('vh-fade-out');
    },
    offset: '80%'
})