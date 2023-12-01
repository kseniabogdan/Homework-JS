"use strict"
let html = document.documentElement;
html.setAttribute('lang', 'en');


let title = document.createElement('title');
title.innerHTML = 'homework 8';

let metaUtf8 = document.createElement('meta');
metaUtf8.setAttribute('charset', 'UTF-8');

document.head.appendChild(title);
document.head.appendChild(metaUtf8);

const style = document.createElement("style")
document.head.append(style)
style.innerHTML = `
 @import url('https://fonts.googleapis.com/css2?family=Arvo&family=Montserrat&family=Open+Sans&display=swap" rel="stylesheet"');
 
*, *::after, *::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
.wrapper {
    max-width: 1280px;
    margin: 0 auto;
    padding: 122px 240px;
    background-color: #ffff;
}
.header_title {
    color: #212121;
    font-family: Arvo, Arial, sans-serif;
    font-weight: 400;
    font-size: 36px;
    line-height: 48px;
    text-align: center;
}
.header_description {
    color: #9FA3A7;
    font-family: 'Open Sans', Arial, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 26px;
    text-align: center;
    font-style: normal;
    margin: 10px 0 55px 0;
}
.cardsContainer {
    display: flex;
}
.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 401px;
    height: 480px;
    padding: 82px 95px;
    background-color: #f3f4f7;
}
.purple {
    background-color: #8F75BE;
}
.card_pretitle {
    color: #9FA3A7;
    font-family: Montserrat, Arial, sans-serif;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 2.4px;
}
.card_pretitle--purple {
    color: #FFC80A;
}
.card_title {
    color: #212121;
    text-align: center;
    font-family: Arvo, Arial, sans-serif;
    font-size: 36px;
    font-weight: 400;
    line-height: 46px;
    margin: 19px 0 25px 0;
}

.card_text {
    color: #9FA3A7;
    text-align: center;
    font-family: 'Open Sans', Arial, sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 22px;
    margin-bottom: 56px;
}
.card_title--purple, .card_text--purple {
    color: #FFF;
}
.card_button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 52px;
    width: 155px;
    border-radius: 100px;
    border: 3px solid #FFC80A;
    background-color: #f3f4f7;
    color: #212121;
    font-family: Montserrat, Arial, sans-serif;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 2.4px
    cursor: pointer;
}
.card_button--purple {
    color: #FFF;
    background-color: #8F75BE;
}
`
const body = document.body;

let wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
body.appendChild(wrapper);

let header = document.createElement('div');
header.classList.add('header');
wrapper.appendChild(header);

let headerTitle = document.createElement('h2');
headerTitle.classList.add('header_title');
headerTitle.textContent = 'Choose Your Option';
header.append(headerTitle);

let h5 = document.createElement('h5');
h5.classList.add('header_description');
h5.textContent = 'But I must explain to you how all this mistaken idea of denouncing';
header.append(h5);

const cardsContainer = document.createElement('div')
cardsContainer.classList.add('cardsContainer')
wrapper.append(cardsContainer)

const cards = [{
    pretitle: 'FREELANCER',
    title: 'Initially designed to',
    text: 'But I must explain to you how all this mistaken idea of denouncing',
    button: 'START HERE',
    color: 'white',
}, {
    pretitle: 'STUDIO',
    title: 'Initially designed to',
    text: 'But I must explain to you how all this mistaken idea of denouncing',
    button: 'START HERE',
    color: 'purple',
}
];

cards.forEach(el => {
    const cardNew = document.createElement('div')
    if (el.color === 'purple') {
        cardNew.classList.add('card', 'purple')
    } else {
        cardNew.classList.add('card')
    }
    cardsContainer.append(cardNew)

    const pretitleCard = document.createElement('h5')
    if (el.color === 'purple') {
        pretitleCard.classList.add('card_pretitle', 'card_pretitle--purple')
    } else {
        pretitleCard.classList.add('card_pretitle')
    }
    pretitleCard.textContent = el.pretitle

    const titleCard = document.createElement('h2')
    if (el.color === 'purple') {
        titleCard.classList.add('card_title', 'card_title--purple')
    } else {
        titleCard.classList.add('card_title')
    }
    titleCard.textContent = el.title

    const textCard = document.createElement('p')
    if (el.color === 'purple') {
        textCard.classList.add('card_text', 'card_text--purple')
    } else {
        textCard.classList.add('card_text')
    }
    textCard.textContent = el.text

    const buttonCard = document.createElement('button')
    if (el.color === 'purple') {
        buttonCard.classList.add('card_button', 'card_button--purple')
    } else {
        buttonCard.classList.add('card_button')
    }
    buttonCard.classList.add('card_button')
    buttonCard.textContent = el.button


    cardNew.append(pretitleCard, titleCard, textCard, buttonCard)
})
