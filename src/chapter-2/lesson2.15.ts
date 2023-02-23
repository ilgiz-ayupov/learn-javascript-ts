// ---------- Задание 1 - Обязателен ли "else"? ----------
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     // ...
//     return confirm("Родители разрешили?");
//   }
// }

function checkAge(age: number) {
  return age > 18;
}

// Ответ: Нет, блок else не нужен для кода выше. Так же можно отказаться и от if.

// ---------- Задание 2 - Перепишите функцию, используя оператор '?' или '||' ----------
// function checkAge2(age: number) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm("Родители разрешили?");
//   }
// }

// Вариант 1 - Оператор ?
function checkAge2(age: number) {
  return age > 18 ? true : confirm("Родители разрешили ?");
}

// Вариант 2 - Оператор ||
function checkAge3(age: number) {
  return age > 18 || confirm("Родители разрешили ?");
}

// ---------- Задание 3 - Функция min(a, b) ----------
function min(a: number, b: number) {
  return a < b ? a : b;
}

console.log(min(2, 5));
console.log(min(3, -1));
console.log(min(1, 1));

// ---------- Задание 4 - Функция pow(x,n) ----------
function pow(x: number, n: number) {
  if (n === 0) return 1;

  let result = x;
  for (let i = 0; i < n - 1; i++) {
    result *= result;
  }
  return result;
}

console.log(pow(3, 2));
console.log(pow(3, 3));
console.log(pow(1, 100));
