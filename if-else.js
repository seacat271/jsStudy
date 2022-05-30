let age=55
let quest
quest=prompt ("Сколько лет дяде Валере?", " ");
if (quest<age) {
    alert("Сильно мало");
} else if (quest==age) {
    alert("Откуда ты знала?");
    alert("Дядя Валера между прочим хранит это в тайне");
} else {
    alert("Ну ты уж совсем пергнула. Дядя Валера обидиться");
}
