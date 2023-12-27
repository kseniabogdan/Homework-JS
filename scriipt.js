"use strict"

class User {
  constructor(userInfo) {
    this.data = userInfo;
  }

  editUserInfo(newInfo) {
    this.data = newInfo;
  }

  getUserInfo() {
    return this.data;
  }
}

class Contacts {
  constructor() {
    this.users = [];
  }

  addContact(contact) {
    const newContact = new User(contact);
    this.users.push(newContact);
  }

  editContact(id, obj) {
    const user = this.users.find((user) => user.data.id === id);
    user.editUserInfo(obj);
  }

  removeContact(id) {
    const newArray = this.users.filter((user) => user.data.id !== id);
    this.users = newArray;
  }

  get() {
    return this.users;
  }
}

class ContactsApp extends Contacts {
  constructor() {
    super();
    const wrapper = document.querySelector('.wrapper')
    const contactsDiv = document.createElement('div');
    contactsDiv.classList.add('contacts');
    wrapper.appendChild(contactsDiv);
    this.app = ['name', 'email', 'address', 'phone'];

  }

  creatInput() {
    const contactsBlock = document.querySelector('.contacts');
    this.app.forEach(element => {
      const inputBlock = document.createElement('div');
      inputBlock.classList.add('input__block', `block__${element}`);
      inputBlock.innerHTML = `Your ${element}`;
      contactsBlock.append(inputBlock);
      const inputPut = document.querySelector(`.block__${element}`);
      const input = document.createElement('input');
      input.classList.add('input', `${element}`);
      input.setAttribute('type', 'text');
      input.setAttribute('value', "");
      inputPut.append(input);
    })
    const button1 = document.createElement('button');
    button1.classList.add('button', 'button__reg');
    button1.innerHTML = 'Register';
    contactsBlock.append(button1);

    const buttonReg = contactsBlock.querySelector('.button__reg')

    let lastId = 0;
    const transfer = new Contacts();

    buttonReg.addEventListener('click', function onAdd() {
      const inputName = contactsBlock.querySelector('.name');
      const inputEmail = contactsBlock.querySelector('.email');
      const inputAddress = contactsBlock.querySelector('.address');
      const inputPhone = contactsBlock.querySelector('.phone');

      lastId++;

      const contact = {
        id: `${lastId}`,
        name: inputName.value,
        email: inputEmail.value,
        address: inputAddress.value,
        phone: inputPhone.value
      };

      transfer.addContact(contact)

      const answer = document.createElement('p');
      answer.classList.add('answer');
      answer.innerHTML = `You have registered. Your registration number (ID) ${lastId}`;
      contactsBlock.insertBefore(answer, inputBlock2);

      console.log(transfer.users)


    })

    const inputBlock2 = document.createElement('div');
    inputBlock2.classList.add('input__block', 'block__edit');
    inputBlock2.innerHTML = "To edit, eneter ID";
    contactsBlock.append(inputBlock2);

    const inputPut2 = document.querySelector('.block__edit');
    const input2 = document.createElement('input');
    input2.classList.add('input', 'edit');
    input2.setAttribute('type', 'text');
    input2.setAttribute('value', "");
    inputPut2.append(input2);

    const button2 = document.createElement('button');
    button2.classList.add('button', 'button__edit');
    button2.innerHTML = 'Edit';
    contactsBlock.append(button2);

    const buttonEdit = contactsBlock.querySelector('.button__edit');
    const appNew = this.app

    buttonEdit.addEventListener('click', function onEdit() {

      const editElem = document.createElement('div');
      editElem.classList.add('blockShow__edit');
      editElem.innerHTML = 'Enter the new data';
      contactsBlock.insertBefore(editElem, inputBlock3);
      const editElemShow = contactsBlock.querySelector(`.blockShow__edit`);

      let transferUsers = transfer.get();

      appNew.forEach(element => {
        const inputBlock3 = document.createElement('div');
        inputBlock3.classList.add('input__block', `blockEdit__${element}`);
        inputBlock3.innerHTML = `Your ${element}`;
        editElemShow.append(inputBlock3);
        const inputPut3 = document.querySelector(`.blockEdit__${element}`);
        const input3 = document.createElement('input');
        input3.classList.add('input', `edit__${element}`);
        input3.setAttribute('type', 'text');
        input3.setAttribute('value', "");
        inputPut3.append(input3);
      })

      const button3 = document.createElement('button');
      button3.classList.add('button', 'button__save');
      button3.innerHTML = 'Save';
      editElemShow.append(button3);

      const buttonSave = contactsBlock.querySelector('.button__save');
      const valueEdit = contactsBlock.querySelector('.edit');
      const idEdit = valueEdit.value;

      buttonSave.addEventListener('click', function saveEdit() {
        const inputEditName = contactsBlock.querySelector('.edit__name');
        const inputEditEmail = contactsBlock.querySelector('.edit__email');
        const inputEditAddress = contactsBlock.querySelector('.edit__address');
        const inputEditPhone = contactsBlock.querySelector('.edit__phone');

        const newContact = {
          id: idEdit,
          name: inputEditName.value,
          email: inputEditEmail.value,
          address: inputEditAddress.value,
          phone: inputEditPhone.value
        };

        transfer.editContact(idEdit, newContact);

        console.log(transfer.users)


      });
    })

    const inputBlock3 = document.createElement('div');
    inputBlock3.classList.add('input__block', 'block__delete');
    inputBlock3.innerHTML = "To delete, eneter ID";
    contactsBlock.append(inputBlock3);

    const inputPut3 = document.querySelector('.block__delete');
    const input3 = document.createElement('input');
    input3.classList.add('input', 'delete');
    input3.setAttribute('type', 'text');
    input3.setAttribute('value', "");
    inputPut3.append(input3);

    const button4 = document.createElement('button');
    button4.classList.add('button', 'button__delete');
    button4.innerHTML = 'Delete';
    contactsBlock.append(button4);

    const buttonDelete = contactsBlock.querySelector('.button__delete');

    buttonDelete.addEventListener('click', function onRemove() {
      const valueDelete = contactsBlock.querySelector('.delete');
      const idDelete = valueDelete.value;

      transfer.removeContact(idDelete)

      console.log(transfer.users)

      const answerDel = document.createElement('p');
      answerDel.classList.add('answer', 'answer__del');
      answerDel.innerHTML = `You have deleted the contact details with the number (ID) ${idDelete}`;
      contactsBlock.append(answerDel);
    })


  }

}

let contactApp = new ContactsApp();

contactApp.creatInput()


//console.log(JSON.stringify(contactApp))
//console.log(contactApp)
