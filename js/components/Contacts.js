
class Contacts {
  constructor() {
    this.users = [];
    this.lastId = 1;
  }

  addContact(contact) {
    this.lastId++;
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
