'use strict'
const swither = document.getElementById('switcher');
const sliderAfter = document.querySelector('.slider__mode');
const main = document.getElementById('main');
const mainImg = document.querySelectorAll('.main__img');
const mainItem = document.querySelectorAll('.main__item');
const mainItemPrice = document.querySelectorAll('.main__itemPrice');
const title = document.querySelectorAll('h3');
const aboutText = document.querySelectorAll('.about__text');
const articleText = document.querySelectorAll('.article__text');
const priceItem = document.querySelectorAll('.price__item');
const modalContent = document.querySelector('.modal__content');
const modalText = document.querySelectorAll('.modal__content p');
const modalDescr = document.querySelector('.modal__decriptiontn');
const modalImg = document.querySelector('.modal__img');


function Switch() {
    if (swither.checked) {
        sliderAfter.src = './assets/img/moon.png';
        main.style.background = '#18181818';
        ItemChange();
    }
}

function ItemChange() {
    mainItem.forEach(item => {
        item.classList.add('main__itemDark');
    });
    mainItemPrice.forEach(text => {
        text.style.color = "#fff";
    });
    title.forEach(title => {
        title.style.color = "#fff";
    });
    aboutText.forEach(text => {
        text.style.color = "#fff";
    });
    articleText.forEach(text => {
        text.style.color = "#fff";
    });
    priceItem.forEach(text => {
        text.style.color = "#fff";
    });
    modalText.forEach(text => {
        text.style.color = "#fff";
    });
    modalContent.style.background = "#181818";
    modalDescr.style.color = "fff";
}

swither.addEventListener('change', Switch, false);