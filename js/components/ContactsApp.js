
class ContactsApp extends Contacts {
  constructor() {
    super();
    const wrapper = document.querySelector('.wrapper');

    this.contactsDivList = document.createElement('div');
    this.contactsDivList.classList.add('contactsList');
    this.contactsDiv = document.createElement('div');
    this.contactsDiv.classList.add('contacts');

    wrapper.append(this.contactsDivList, this.contactsDiv);

    this.app = ['name', 'email', 'address', 'phone'];
  }

  createInput() {
    const contactsBlock = document.querySelector('.contacts');
    contactsBlock.innerHTML = 'Enter the new contact';

    this.app.forEach(element => {
      const inputBlock = document.createElement('div');
      inputBlock.classList.add('input__block', `block__${element}`);
      inputBlock.innerHTML = `Fill ${element}`;
      contactsBlock.append(inputBlock);
      const inputPut = document.querySelector(`.block__${element}`);
      const input = document.createElement('input');
      input.classList.add('input', `${element}`);
      input.setAttribute('type', 'text');
      input.setAttribute('placeholder', `${element}`);
      inputPut.append(input);
    })

    let inputPhone = document.querySelector('.phone');
    inputPhone.setAttribute('placeholder', '+375-11-111-11-11');

    this.buttonReg = document.createElement('button');
    this.buttonReg.classList.add('button', 'button__reg');
    this.buttonReg.innerHTML = 'Add contact';

    contactsBlock.append(this.buttonReg);

    const answer = document.createElement('p');
    answer.classList.add('answer');
    answer.innerHTML = "";
    contactsBlock.append(answer);

    this.buttonReg.addEventListener('click', () => {
      const inputName = contactsBlock.querySelector('.name');
      const inputEmail = contactsBlock.querySelector('.email');
      const inputAddress = contactsBlock.querySelector('.address');
      const inputPhone = contactsBlock.querySelector('.phone');

      let testEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(inputEmail.value)
      let testPhone = /^\+?[0-9\-\(\)\s]*$/.test(inputPhone.value)

      const contact = {
        id: `${this.lastId}`,
        name: inputName.value,
        email: inputEmail.value,
        address: inputAddress.value,
        phone: inputPhone.value
      };

      if (inputName.value == "") {
        answer.innerHTML = "Failed to add contact. The name field must be filled"
      } else if (!testEmail && inputEmail.value != "") {
        answer.innerHTML = "Failed to add contact. Invalid email address"
      } else if (!testPhone && inputPhone.value != "") {
        answer.innerHTML = "Failed to add contact. invalid phone number"
      } else this.addContact(contact);

      this.updateContact();

      inputName.value = '';
      inputEmail.value = '';
      inputAddress.value = '';
      inputPhone.value = '';
    })
  }

  updateContact() {

    let dataContact = this.get();

    this.contactsDivList.innerHTML = '';

    dataContact.forEach((item) => {
      let contactElem = document.createElement('div');
      let h3Elem = document.createElement('h3');
      let divElem = document.createElement('div');

      let divBtnElem = document.createElement('div');
      let btnEdit = document.createElement('button');
      let btnRemove = document.createElement('button');

      contactElem.classList.add('contact__block');
      h3Elem.classList.add('contact__name');
      divElem.classList.add('contact__content');
      divBtnElem.classList.add('contact__buttons');
      btnEdit.classList.add('contact__btn');
      btnRemove.classList.add('contact__btn', 'delete__btn');

      contactElem.id = item.data.id;
      h3Elem.innerHTML = 'Name: ' + item.data.name;
      divElem.innerHTML = 'Email: ' + item.data.email + ', Address: ' + item.data.address + ', Phone: ' + item.data.phone;

      btnEdit.innerHTML = 'Edit';
      btnRemove.innerHTML = 'Delete';

      divBtnElem.append(btnEdit, btnRemove);
      contactElem.append(h3Elem, divElem, divBtnElem);
      this.contactsDivList.append(contactElem);

      btnEdit.addEventListener('click', () => {
        this.onEdit(item.data.id);
      });

      btnRemove.addEventListener('click', () => {
        this.onRemove(item.data.id);
      });

    });

    this.updateStorage()
  }

  onEdit(id) {

    if (!id) return;
    const userEdit = this.users.find((item) => {
      return item.data.id == id;
    });
    if (!userEdit) return;

    let contactsBlock = document.querySelector('.contacts');
    contactsBlock.innerHTML = '';

    const editElem = document.createElement('div');
    editElem.classList.add('blockShow__edit');
    editElem.innerHTML = 'Enter the new data';
    contactsBlock.append(editElem);

    this.app.forEach(element => {
      let editElemShow = contactsBlock.querySelector(`.blockShow__edit`);
      const inputBlock3 = document.createElement('div');
      inputBlock3.classList.add('input__block', `blockEdit__${element}`);
      inputBlock3.innerHTML = `Edit ${element}`;
      editElemShow.append(inputBlock3);
      const inputPut3 = document.querySelector(`.blockEdit__${element}`);
      const input3 = document.createElement('input');
      input3.classList.add('input', `edit__${element}`);
      input3.setAttribute('type', 'text');
      input3.setAttribute('value', "");
      inputPut3.append(input3);
    })

    let editElemShow = contactsBlock.querySelector(`.blockShow__edit`);
    const inputEditName = contactsBlock.querySelector('.edit__name');
    const inputEditEmail = contactsBlock.querySelector('.edit__email');
    const inputEditAddress = contactsBlock.querySelector('.edit__address');
    const inputEditPhone = contactsBlock.querySelector('.edit__phone');

    inputEditName.value = userEdit.data.name;
    inputEditEmail.value = userEdit.data.email;
    inputEditAddress.value = userEdit.data.address;
    inputEditPhone.value = userEdit.data.phone;

    let button2 = document.createElement('button');
    button2.classList.add('button', 'button__save');
    button2.innerHTML = 'Save';
    editElemShow.append(button2);

    let button3 = document.createElement('button');
    button3.classList.add('button', 'button__cancel');
    button3.innerHTML = 'Cancel';
    editElemShow.append(button3);

    const answerEdit = document.createElement('p');
    answerEdit.classList.add('answer');
    answerEdit.innerHTML = "";
    editElemShow.append(answerEdit);

    const buttonSave = contactsBlock.querySelector('.button__save');
    const buttonCancel = contactsBlock.querySelector('.button__cancel');

    buttonCancel.addEventListener('click', () => {
      this.createInput()
    })

    let testEmailEdit = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(inputEditEmail.value)
    let testPhoneEdit = /^\+?[0-9\-\(\)\s]*$/.test(inputEditPhone.value)


    buttonSave.addEventListener('click', () => {

      const EditContact = {
        id: id,
        name: inputEditName.value,
        email: inputEditEmail.value,
        address: inputEditAddress.value,
        phone: inputEditPhone.value
      };

      if (inputEditName.value == "") {
        answerEdit.innerHTML = "Failed to edit contact. The name field must be filled"
      } else if (!testEmailEdit && inputEditEmail.value != "") {
        answerEdit.innerHTML = "Failed to edit contact. Invalid email address"
      } /* else if (!testPhoneEdit && inputEditPhone.value != "") {
        answerEdit.innerHTML = "Failed to edit contact. invalid phone number"
      } */ else {
        this.editContact(id, EditContact);
        this.updateContact()
        this.createInput()
      }
    })
  };

  onRemove(id) {
    if (!id) return;

    this.removeContact(id);
    this.updateContact();
  };

  setCookie(cname, cvalue, exdays) {
    let d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  getCookie(name) {
    let matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

  checkCookie() {
    let username = this.getCookie('storageExpiration');
    if (username != "") {
      document.cookie = 'storageExpiration=del; max-age=-1';
    }
  }

  setStorage() {
    localStorage.setItem('storageData', JSON.stringify(this.users));
  }

  getStorage() {
    let localDataContact = localStorage.getItem('storageData');
    let storageDataContact = JSON.parse(localDataContact);

    if (localDataContact.length > 0) {
      storageDataContact.forEach((user) => {
        this.addContact(user.data)
      })
    }

    if (!localDataContact || localDataContact.length == 0) this.setServerData();

    this.updateContact()
  }

  async setServerData() {
    if (this.users.length > 0) return;
    let serverData = await fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())

    let serverContacts = serverData.forEach((item) => {
      const serverContact = {
        id: `${this.lastId}`,
        name: item.name,
        email: item.email,
        address: item.address.street,
        phone: item.phone
      }
      this.addContact(serverContact);
    });

    this.updateContact()
  }

  updateStorage() {
    this.setStorage()
    this.checkCookie()
    this.setCookie('storageExpiration', 'update', '10')
  }

  loadStorage() {
    if (document.cookie.indexOf('storageExpiration') == -1) {
      localStorage.removeItem('storageData')
    } else {
      if (!this.users || this.users.length == 0) {
        this.getStorage()
      }
    };
  }
}
