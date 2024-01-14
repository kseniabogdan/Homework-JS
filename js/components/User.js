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
