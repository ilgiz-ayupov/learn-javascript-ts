// ---------- Задание 1 - Сумма свойств объекта ----------
type SalaryType = {
  [key: string]: number;
};
let salariesObj: SalaryType = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function getSumSalaries(salaries: SalaryType): number {
  return Object.keys(salaries).reduce(
    (result, key) => result + salaries[key],
    0
  );
}

console.group("Задание 1");
console.log("Сумма значений объекта salaries = ", getSumSalaries(salariesObj));
console.groupEnd();

// ---------- Задание 2 - Подсчёт количества свойств объекта ----------
let user = {
  name: "John",
  age: 30,
};

function count(obj: { [key: string]: any }) {
  return Object.keys(obj).length;
}

console.group("Задание 2");
console.log("Длина объекта user = ", count(user));
console.groupEnd();
