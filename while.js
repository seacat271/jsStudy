
alert ("Угадай число")
let count
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
count=getRandomInt(1, 30)
let quest
do {quest=prompt ("Введи число от 1 до 30");
if (quest<count) {
    alert ("Маловато будет")
} else if (quest>count) {
    alert ("Не, ну это много")
}}
while (count!=quest)

alert ("УГАДАЛА!! Возьми с полки пирожок");
