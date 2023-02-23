// ---------- Задание 1 - Переведите текст вида border-left-width в borderLeftWidth ----------
alert("Задание 1");
function title(str: string) {
  return str[0].toUpperCase() + str.slice(1);
}

function camelize(str: string) {
  const arr = str.split("-");
  return arr.slice(1).reduce((result, item) => result + title(item), arr[0]);
}

alert(camelize("border-left-width"));
alert(camelize("list-style-image"));
alert(camelize("-webkit-transition"));

// ---------- Задание 2 - Фильтрация по диапазону ----------
alert("Задание 2");
let arr = [5, 3, 8, 1];

function filterRange(arr: number[], a: number, b: number): number[] {
  return arr.filter((number) => number >= a && number <= b);
}

let filtered = filterRange(arr, 1, 4);

alert(`Результат filterRange: ${filtered}`); // 3,1 (совпадающие значения)

alert(`Исходный массив после filterRange: ${arr}`); // 5,3,8,1 (без изменений)

// ---------- Задание 3 - Фильтрация по диапазону "на месте" ----------
alert("Задание 3");
function filterRangeInPlace(arr: number[], a: number, b: number): void {
  arr.forEach((number, index) => {
    if (number < a || number > b) arr.splice(index, 1);
  });
}

filterRangeInPlace(arr, 1, 4);
alert(`Исходный массив после filterRangeInPlace: ${arr}`);

// ---------- Задание 4 - Сортировать в порядке по убыванию ----------
alert("Задание 4");
let arr2 = [5, 2, 1, -10, 8];
arr2.sort((a, b) => (a < b ? 1 : -1));
alert(`Массив после сортировки: ${arr2}`);

// ---------- Задание 5 - Скопировать и отсортировать массив ----------
alert("Задание 5");
const skills = ["HTML", "JavaScript", "CSS"];

function copySorted(arr: string[]): string[] {
  return arr.slice().sort((a, b) => a.localeCompare(b));
}

const sorted = copySorted(skills);

alert(`Отсортированный массив: ${sorted}`); // CSS, HTML, JavaScript
alert(`Оригинальный массив: ${skills}`); // HTML, JavaScript, CSS (без изменений)

// ---------- Задание 6 - Создать расширяемый калькулятор ----------
alert("Задание 6");

type OperatorsType = {
  [key: string]: (a: number, b: number) => number;
};

class PowerCalculator {
  operators: OperatorsType;

  constructor() {
    this.operators = {
      "+": (a, b) => a + b,
      "-": (a, b) => a - b,
    };
  }

  isValid(example: string): boolean {
    const [a, operator, b] = example.split(" ");
    if (isNaN(Number(a)) || isNaN(Number(b))) {
      return false;
    }
    if (Object.keys(this.operators).indexOf(operator) === -1) {
      return false;
    }

    return true;
  }

  addMethod(operator: string, fn: (a: number, b: number) => number): void {
    this.operators[operator] = fn;
  }

  calculate(example: string): number {
    const valid = this.isValid(example);
    if (valid) {
      const [a, operator, b] = example.split(" ");
      return this.operators[operator](Number(a), Number(b));
    }
    return NaN;
  }
}

const powerCalculator = new PowerCalculator();
powerCalculator.addMethod("*", (a, b) => a * b);
powerCalculator.addMethod("/", (a, b) => a / b);
powerCalculator.addMethod("**", (a, b) => a ** b);

alert(`2 * 3 = ${powerCalculator.calculate("2 * 3")}`);
alert(`10 / 2 = ${powerCalculator.calculate("10 / 2")}`);
alert(`2 ** 8  = ${powerCalculator.calculate("2 ** 8")}`);

// ---------- Задание 7 - Трансформировать в массив имён ----------
alert("Задание 7");
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];

let names = users.map((user) => user.name);

alert(`Список имён: ${names}`); // Вася, Петя, Маша

// ---------- Задание 8 - Трансформировать в объекты ----------
alert("Задание 8");
type UserType = {
  id: number;
  name: string;
  surname: string;
  age: number;
};

let vasya2: UserType = { name: "Вася", surname: "Пупкин", id: 1, age: 25 };
let petya2: UserType = { name: "Петя", surname: "Иванов", id: 2, age: 30 };
let masha2: UserType = { name: "Маша", surname: "Петрова", id: 3, age: 28 };

let usersObj: UserType[] = [vasya2, petya2, masha2];

type UserMappedType = {
  id: number;
  fullName: string;
};
let usersMapped: UserMappedType[] = usersObj.map((user) => ({
  id: user.id,
  fullName: `${user.name} ${user.surname}`,
}));

alert(usersMapped[0].id); // 1
alert(usersMapped[0].fullName); // Вася Пупкин

// ---------- Задание 9 - Отсортировать пользователей по возрасту ----------
alert("Задание 9");

function sortByAge(users: UserType[]): void {
  users.sort((a, b) => a.age - b.age);
}

sortByAge(usersObj);

alert("Отсортированные пользователи: ");
alert(usersObj[0].name); // Вася
alert(usersObj[1].name); // Маша
alert(usersObj[2].name); // Петя

// ---------- Задание 10 - Перемешайте массив ----------
alert("Задание 10");

const numbers = [1, 2, 3, 4, 5];

function shuffle<T>(array: Array<T>): void {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffle(numbers);
alert(`Первая прокрутка через shuffle: ${numbers}`);
shuffle(numbers);
alert(`Вторая прокрутка через shuffle: ${numbers}`);
shuffle(numbers);
alert(`Третья прокрутка через shuffle: ${numbers}`);

// ---------- Задание 11 - Получить средний возраст ----------
alert("Задание 11");
function getAvgAge(arr: UserType[]): number {
  const qty = arr.length;
  return Math.round(arr.reduce((result, user) => result + user.age, 0) / qty);
}

alert(`Средне арифметическое возрастов пользователей = ${getAvgAge(usersObj)}`);

// ---------- Задание 12 - Получить средний возраст ----------
alert("Задание 12");

function unique<T>(arr: Array<T>): Array<T> {
  const result: Array<T> = [];
  arr.forEach((item) => {
    if (result.indexOf(item) === -1) {
      result.push(item);
    }
  });
  return result;
}

let strings = [
  "кришна",
  "кришна",
  "харе",
  "харе",
  "харе",
  "харе",
  "кришна",
  "кришна",
  ":-O",
];

alert(`Уникальные значения в массиве: ${unique(strings)}`);

// ---------- Задание 13 - Создайте объект с ключами из массива ----------
alert("Задание 13");

type UsersType = {
  id: string;
  name: string;
  age: number;
};

const usersGroups: UsersType[] = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

function groupById(arr: UsersType[]) {
  return arr.reduce((result, item) => {
    result[item.id] = item;
    return result;
  }, {} as { [key: string]: UsersType });
}
alert("Результат в консоли");
console.log("Сгруппированные объекты по id:", groupById(usersGroups));
