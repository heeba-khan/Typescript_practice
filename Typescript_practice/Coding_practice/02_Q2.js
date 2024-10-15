function returnUser(user) {
    if (user.isActive) {
        return "".concat(user.name, " is Active.");
    }
    else {
        return "".concat(user.name, " is not Active");
    }
}
var myuser = { id: 1, name: "Heeba", email: "heebak45@gmail.com", isActive: true };
console.log(returnUser(myuser));
