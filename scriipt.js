
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
    const wrapper = document.querySelector('.wrapper');
    this.contactsDivList = document.createElement('div');
    this.contactsDivList.classList.add('contactsList');
    this.contactsDiv = document.createElement('div');
    this.contactsDiv.classList.add('contacts');
    wrapper.append(this.contactsDivList, this.contactsDiv);
    this.app = ['name', 'email', 'adress', 'phone'];
    let dataContact = this.get();

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
    this.buttonReg = document.createElement('button');
    this.buttonReg.classList.add('button', 'button__reg');
    this.buttonReg.innerHTML = 'Add contact';
    contactsBlock.append(this.buttonReg);


    let lastId = 0;

    this.buttonReg.addEventListener('click', () => {
      const inputName = contactsBlock.querySelector('.name');
      const inputEmail = contactsBlock.querySelector('.email');
      const inputAdress = contactsBlock.querySelector('.adress');
      const inputPhone = contactsBlock.querySelector('.phone');

      lastId++;

      const contact = {
        id: `${lastId}`,
        name: inputName.value,
        email: inputEmail.value,
        adress: inputAdress.value,
        phone: inputPhone.value
      };

      this.addContact(contact)

      this.updateContact()

      inputName.value = '';
      inputEmail.value = '';
      inputAdress.value = '';
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
      divElem.innerHTML = 'Email: ' + item.data.email + ', Adress: ' + item.data.adress + ', Phone: ' + item.data.phone;

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
      this.checkCookie()

      this.setCookie("storageExpiration", "Update", "10")
      console.log(document.cookie)
    });

  }

  onEdit(id) {

    if (!id) return;
    const user = this.users.find((item) => {
      return item.data.id == id;
    });
    if (!user) return;

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
    const inputEditAdress = contactsBlock.querySelector('.edit__adress');
    const inputEditPhone = contactsBlock.querySelector('.edit__phone');

    inputEditName.value = user.data.name;
    inputEditEmail.value = user.data.email;
    inputEditAdress.value = user.data.adress;
    inputEditPhone.value = user.data.phone;

    let button2 = document.createElement('button');
    button2.classList.add('button', 'button__save');
    button2.innerHTML = 'Save';
    editElemShow.append(button2);

    let button3 = document.createElement('button');
    button3.classList.add('button', 'button__cancel');
    button3.innerHTML = 'Cancel';
    editElemShow.append(button3);

    const buttonSave = contactsBlock.querySelector('.button__save');
    const buttonCancel = contactsBlock.querySelector('.button__cancel');

    buttonCancel.addEventListener('click', () => {
      this.createInput()
    })

    buttonSave.addEventListener('click', () => {

      const EditContact = {
        id: id,
        name: inputEditName.value,
        email: inputEditEmail.value,
        adress: inputEditAdress.value,
        phone: inputEditPhone.value
      };

      this.editContact(id, EditContact);
      this.updateContact()
      this.createInput()
    })
  };

  onRemove(id) {

    if (!id) return;

    this.removeContact(id);
    this.updateContact();
  }

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
    let username = this.getCookie("storageExpiration");
    if (username != "") {
      document.cookie = 'storageExpiration=del; max-age=-1';
    } 
    
  }
}

let contactApp = new ContactsApp();

contactApp.createInput()




//console.log(JSON.stringify(contactApp))
//console.log(contactApp)
