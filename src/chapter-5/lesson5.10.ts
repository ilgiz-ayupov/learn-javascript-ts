// ---------- Задание 1 - Деструктурирующее присваивание ----------
type JohnUserType = {
  name: string;
  years: number;
  isAdmin?: boolean;
};

let johnUser: JohnUserType = {
  name: "John",
  years: 30,
};

const { name: johnUserName, years, isAdmin } = johnUser;

console.group("Задание 1");
console.log(johnUserName, years, isAdmin);
console.groupEnd();

// ---------- Задание 2 - Максимальная зарплата ----------
let salaries5_10 = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

console.group("Задание 2");
console.log(Math.max(...Object.values(salaries5_10)));
console.groupEnd();
