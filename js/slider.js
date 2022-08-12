// PORTFOLIO SLIDER

// Variables
let sliderContainer = document.querySelector('.vh-slider-container')
let sliderList = document.querySelector('.vh-slider-list')
let projectsItem = document.querySelectorAll('.vh-projects-item')
let sliderListWidth = null;
let prevItem = document.querySelector('.vh-item-prev');
let nextItem = document.querySelector('.vh-item-next');
let sliderPosition = 0;
let slideTotalItems = projectsItem.length;
let currentSlide = document.querySelectorAll('.vh-current-slide')
let totalSlide = document.querySelector('.vh-total-slide')
let currentCounter = 1;
let navItems = document.querySelectorAll('.vh-item-navigator a');

// Counter formatter
let counterFormatter = function (number) {
    if (number < 10) {
        return '0' + number;
    } else {
        return number;
    }
}

for (let current = 0; current < currentSlide.length; current++) {
    currentSlide[current].innerHTML = counterFormatter(currentCounter);
}
totalSlide.innerHTML = counterFormatter(slideTotalItems);

// Counter add
let counterAdd = function () {
    if (currentCounter >= 0 && currentCounter < slideTotalItems) {
        currentCounter++;
        for (let current = 0; current < currentSlide.length; current++) {
            currentSlide[current].innerHTML = counterFormatter(currentCounter);
        }
    }
}

// Counter remove
let counterRemove = function () {
    if (currentCounter > 1 && currentCounter <= slideTotalItems) {
        currentCounter--;
        for (let current = 0; current < currentSlide.length; current++) {
            currentSlide[current].innerHTML = counterFormatter(currentCounter);
        }
    }
}

// Set active item
anime({
    targets: '.vh-item-active',
    width: 90
})

let setActiveItem = function () {
    for (let nav = 0; nav < navItems.length; nav++) {
        let myNavNumber = parseInt(navItems[nav].getAttribute('data-nav'));
        if (myNavNumber === currentCounter) {
            removeClassActive()
            navItems[nav].classList.add('vh-item-active');
            anime({
                targets: '.vh-item-active',
                width: 90
            })
        }
    }
}

let removeClassActive = function () {
    for (let nav = 0; nav < navItems.length; nav++) {
        navItems[nav].classList.remove('vh-item-active')
        anime({
            targets: navItems[nav],
            width: 20
        })
    }
    for (let sld = 0; sld < projectsItem.length; sld++) {
        projectsItem[sld].classList.remove('vh-slide-active')
        projectsItem[sld].querySelector('.vh-projects-item-box').classList.remove('vh-scale-right');
        projectsItem[sld].querySelector('.vh-projects-item-thumb img').classList.remove('vh-scale-up');
        projectsItem[sld].querySelector('.vh-projects-item-info').classList.remove('vh-fade-from-left');
    }
}

// Set active slide
let setActiveSlide = function () {
    for (let slide = 0; slide < projectsItem.length; slide++) {
        let mySlideNumber = parseInt(projectsItem[slide].getAttribute('data-slide'));
        if (mySlideNumber === currentCounter) {
            projectsItem[slide].classList.add('vh-slide-active');
            projectsItem[slide].querySelector('.vh-projects-item-box').classList.add('vh-scale-right');
            projectsItem[slide].querySelector('.vh-projects-item-thumb img').classList.add('vh-scale-up');
            projectsItem[slide].querySelector('.vh-projects-item-info').classList.add('vh-fade-from-left');
        }
    }
}

// Container width
let containerWidth = sliderContainer.parentElement.offsetWidth;

sliderContainer.style.width = containerWidth + 'px';

for (let i = 0; i < projectsItem.length; i++) {
    projectsItem[i].style.width = containerWidth + 'px';

    let projectsItemWidth = projectsItem[i].offsetWidth;

    sliderListWidth += projectsItemWidth;
}

sliderList.style.width = sliderListWidth + 'px';

// Next and prev event
let nextSlideAnim = function () {
    let lastItem = sliderListWidth - containerWidth

    if ((-1 * sliderPosition) === lastItem) {
        return;
    }

    sliderPosition -= containerWidth;

    anime({
        targets: sliderList,
        translateX: sliderPosition,
        easing: 'cubicBezier(0,1.01,.32,1)'
    });
}

let prevSlideAnim = function () {
    if (sliderPosition === 0) {
        return;
    }

    sliderPosition += containerWidth;

    anime({
        targets: sliderList,
        translateX: sliderPosition,
        easing: 'cubicBezier(0,1.01,.32,1)'
    });
}


nextItem.addEventListener('click', function () {
    nextSlideAnim();
    counterAdd();
    setActiveItem();
    setActiveSlide();
})

prevItem.addEventListener('click', function () {
    prevSlideAnim();
    counterRemove();
    setActiveItem();
    setActiveSlide();
})