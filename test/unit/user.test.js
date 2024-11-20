const userModel = require("../../models/user");

describe("User Model Test", () => {
  it("should be able to return whether the user is adult", () => {
    const user = new userModel({ username: "John Doe", age: 20 });
    expect(user.isAdult()).toBeTruthy();
  });

  it("Should be able to return wheter the user is not adult", () => {
    const user = new userModel({ username: "Rommel", age: 17});
    expect(user.isAdult()).toBeFalsy()
  });
});
