let userName;
userName=prompt("Введите логин", "");
if (userName=="Admin") {
let userLogin;
userLogin=prompt("Введите пароль");
if (userLogin=="Я главный") {
    alert("Здавствуйте!");
}
else if (userLogin==0||userLogin===null) {
alert("Отменено");
    }
else {
    alert("Неверный пароль");
}
} else if (userName==0||userName===null) {
    alert("Отменено");
} else {
    alert ("я вас не знаю")
}