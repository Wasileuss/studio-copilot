// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

// ----------------------------------------------------------------

const menuItems = document.querySelectorAll('.menu__item');
const menuHighlight = document.createElement('div');
menuHighlight.classList.add('menu__highlight');
document.querySelector('.menu__list').appendChild(menuHighlight);

function moveHighlight(item) {
    const itemCoords = item.getBoundingClientRect();
    const menuCoords = document.querySelector('.menu__list').getBoundingClientRect();
    const offsetX = itemCoords.left - menuCoords.left;
    const width = itemCoords.width;

    menuHighlight.style.width = `${width}px`;
    menuHighlight.style.transform = `translateX(${offsetX}px)`;
}

menuItems.forEach(item => {
    item.addEventListener('click', function() {
        menuItems.forEach(link => link.classList.remove('menu__item--active'));
        this.classList.add('menu__item--active');
        moveHighlight(this);
    });
});

moveHighlight(document.querySelector('.menu__item--active'));

window.addEventListener('resize', function() {
    const activeItem = document.querySelector('.menu__item--active');
    if (activeItem) {
        moveHighlight(activeItem);
    }
});

// ==============================================================

function updateContent() {
    var width = window.innerWidth;
    var contentDiv = document.querySelector('.footer__label-text');

    if (width < 550) {
      contentDiv.innerHTML = 'Subscribe to our newsletter';
    } else {
      contentDiv.innerHTML = 'Would you like to recieve our Newsletter with offers and upcoming services?';
    }
}

updateContent();
window.onresize = updateContent;

// ==============================================================

const toggleItems = document.querySelectorAll('.plans__toggle-item');
const toggleBg = document.querySelector('.plans__toggle-active-bg');
toggleItems.forEach((item, index) => {
    item.addEventListener('click', function() {
        toggleItems.forEach(el => {
            el.classList.remove('plans__toggle-item--active');
            toggleBg.style.removeProperty('--index');
        });
        this.classList.add('plans__toggle-item--active');
        toggleBg.style.setProperty('--index', index);
    });
});

// ==============================================================

const radioMonthly = document.getElementById("monthly");
const radioQuarterly = document.getElementById("quarterly");
const radioAnnual = document.getElementById("annual");

function showPricing(period) {
    const monthlyElements = document.querySelectorAll("[id$='-monthly']");
    const quarterlyElements = document.querySelectorAll("[id$='-quarterly']");
    const annualElements = document.querySelectorAll("[id$='-annual']");
    const priceOld = document.querySelectorAll(".card__price-old");

    monthlyElements.forEach((el) => el.classList.add("hidden"));
    quarterlyElements.forEach((el) => el.classList.add("hidden"));
    annualElements.forEach((el) => el.classList.add("hidden"));
    priceOld.forEach((el) => el.classList.add("card__price-old--hidden"));

    if (period === "monthly") {
        monthlyElements.forEach((el) => el.classList.remove("hidden"));
    } else if (period === "quarterly") {
        quarterlyElements.forEach((el) => el.classList.remove("hidden"));
    } else if (period === "annual") {
        annualElements.forEach((el) => el.classList.remove("hidden"));
    }

    if (!radioMonthly.checked) {
        priceOld.forEach((el) => el.classList.remove("card__price-old--hidden"));
    }
}

showPricing("monthly");

radioMonthly.addEventListener("change", () => showPricing("monthly"));
radioQuarterly.addEventListener("change", () => showPricing("quarterly"));
radioAnnual.addEventListener("change", () => showPricing("annual"));

// ==============================================================

