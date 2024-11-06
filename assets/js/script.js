let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let container = document.querySelector('.container');
let items = container.querySelectorAll('.list .item');
let indicator = document.querySelector('.indicators');
let dots = indicator.querySelectorAll('ul li');

let active = 0;

prevButton.onclick = () => {
    items[active].classList.remove('active');
    active = (active === 0) ? items.length - 1 : active - 1;
    items[active].classList.add('active');
    updateIndicators();
}

nextButton.onclick = () => {
    items[active].classList.remove('active');
    active = (active === items.length - 1) ? 0 : active + 1;
    items[active].classList.add('active');
    updateIndicators();
}

function updateIndicators() {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[active].classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    items[active].classList.add('active');
    updateIndicators();
});