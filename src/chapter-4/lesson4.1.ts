// ---------- Задание 1 - Привет, object ----------

const userObject = {
  name: "John",
  surname: "Smith",
};

userObject.name = "Pete";

delete userObject.name;

// ---------- Задание 2 - Проверка на пустоту ----------

const isEmpty = (obj: object) => {
  return Boolean(Object.keys(obj).length);
};

type ScheduleType = {
  [key: string]: string;
};
const schedule: ScheduleType = {};

console.log(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

alert(isEmpty(schedule)); // false

// ---------- Задание 3 - Объекты-константы? ----------
// Можно ли изменить объект, объявленный с помощью const? Как вы думаете?
// const user = {
//   name: "John",
// };
// user.name = "Pete";

// Ответ: Да, можно так как ключевое слово const защищает ссылку на объект и не позволяет её изменить.

// ---------- Задание 4 - Сумма свойств объекта ----------
type SalariesType = {
  [key: string]: number;
};
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

const getSalariesSum = (obj: SalariesType) => {
  return Object.keys(obj).reduce((result, person) => result + obj[person], 0);
};

console.log(getSalariesSum(salaries));

// ---------- Задание 5 - Умножаем все числовые свойства на 2 ----------

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

const multiplyNumeric = (obj: { [key: string]: number | string }) => {
  const result = { ...obj };
  for (const key in obj) {
    const value = obj[key];
    if (typeof value === "number") {
      result[key] = value * 2;
    }
  }

  return result;
};

console.log(multiplyNumeric(menu));
console.log(menu);
