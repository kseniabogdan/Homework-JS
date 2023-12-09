"use strict"

const inputEmail = document.querySelector('.input__email')
const inputPassword = document.querySelector('.input__password')
const button = document.querySelector('.button');
const inform = document.querySelector('.inform');
const object = document.querySelector('.object');
button.addEventListener('click', addContact);

const contactObj = {}

function addContact() {

    const valueEmail = inputEmail.value
    const valuePassword = inputPassword.value
    const testEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(valueEmail)
    const testPassword = /^[a-z0-9_-]{3,16}$/.test(valuePassword)
    
    if (!testEmail || !testPassword) {
        inform.classList.add('color__red')
        inform.innerHTML = "You have not filled email or password"
    } else {
        inform.innerHTML = "Your password and email have been accepted"
        contactObj.email = valueEmail
        contactObj.password = valuePassword
    }

    object.innerHTML = JSON.stringify(contactObj)
}



