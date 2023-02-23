// ---------- Задание 1 - Выведется ли alert? ----------

if ("0") {
  alert("Привет");
}

// Ответ: Да, так как в инструкции if будет произведено приведение к типу boolean.
// "0" ==> true

// ---------- Задание 2 - Выведется ли alert? ----------
const promptName = prompt(
  "Какое официальное название JavaScript ?"
).toLowerCase();

// Вариант 1
if (promptName === "ecmascript") {
  alert("Верно !");
} else {
  alert("Не знаете? ECMAScript!");
}

// Вариант 2
// alert(promptName === "ECMAScript" ? "Верно !" : "Не знаете? ECMAScript!");

// ---------- Задание 3 - Выведется ли alert? ----------
const promptNumber: number = Number(prompt("Введите число: "));

if (promptNumber > 0) {
  alert("Число положительное !");
} else if (promptNumber < 0) {
  alert("Число отрицательное");
} else if (promptNumber === 0) {
  alert("Число равно нулю");
} else {
  alert("Некорректный ввод");
}

// ---------- Задание 4 - Перепишите 'if' в '?' ----------
// let result;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }

// Ответ: const result = a + b < 4 ? "Мало" : "Много";

// ---------- Задание 5 - Перепишите 'if..else' в '?' ----------
// let message;

// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }

const login = "Сотрудник";
const message =
  login === "Сотрудник"
    ? "Привет"
    : login === "Директор"
    ? "Здравствуйте"
    : login === ""
    ? "Нет логина"
    : "";

alert(message);
