"use strict";

import UserStorage from "./UserStorage.js";

export default class User {
  constructor(req) {
    this.params = req.params;
    this.body = req.body;
    this.query = req.query;
    this.header = req.header;
  }

  async getDescription() {
    const td = await UserStorage.getDescription();
    // console.log("User.js의 getDescription 동작");
    // console.log(td);
    return td;
  }

  async appendDescription() {
    // console.log("User.js의 User class의 appendDescription 실행");
    // console.log(data);

    let key = await UserStorage.appendDescription(this.body);
    //반환값 안줘도 되는데 catch문 때문에 그냥 줌

    return key;
  }

  async deleteDescription() {
    let key = await UserStorage.deleteDescription(this.params.id);
    //반환값 안줘도 되는데 catch문 때문에 그냥 줌

    return key;
  }

  async updateDescription() {
    let key = await UserStorage.updateDescription(
      this.body.description,
      this.body.id
    );
    //반환값 안줘도 되는데 catch문 때문에 그냥 줌

    return key;
  }

  async checkbox() {
    let key = await UserStorage.checkbox(this.body);
    //반환값 안줘도 되는데 catch문 때문에 그냥 줌

    return key;
  }
}
