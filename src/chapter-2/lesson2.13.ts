// ---------- Задание 1 - Какие значения выведет цикл while? ----------

// Вариант 1 - Префиксный вариант ++i:
let i = 0;
while (++i < 5) alert(i);
// Ответ: 1, 2, 3, 4

// Вариант 2 - Постфиксный вариант i++
i = 0;
while (i++ < 5) alert(i);
// Ответ: 1, 2, 3, 4, 5;

// ---------- Задание 2 - Какие значения выведет цикл for? ----------

// Вариант 1 - Постфиксная форма:
for (let i = 0; i < 5; i++) alert(i);
// Ответ: 0, 1, 2, 3, 4

// Вариант 2 - Префиксная форма:
for (let i = 0; i < 5; ++i) alert(i);
// Ответ: 0, 1, 2, 3, 4

// ---------- Задание 3 - Выведите чётные числа ----------
for (let i = 2; i <= 10; i++) i % 2 === 0 && alert(i);

// ---------- Задание 4 - Замените for на while ----------
// for (let i = 0; i < 3; i++) {
//   alert(`number ${i}!`);
// }
let number = 0;
while (number < 3) {
  alert(`number ${number} !`);
  number++;
}

// ---------- Задание 5 - Повторять цикл, пока ввод неверен ----------
let loopRunning = true;
while (loopRunning) {
  const promptUserNumber = Number(prompt("Введите число больше 100:"));

  if (!isNaN(promptUserNumber) && promptUserNumber > 100) {
    alert("Супер !");
    loopRunning = false;
  } else {
    alert("Некорректный ввод !");
  }
}

// ---------- Задание 6 - Вывести простые числа ----------
const start = Number(prompt("Введите начало: ")); // 2
const end = Number(prompt("Введите конец: ")); // 10

nextPrime: for (let number = start; start < end; number++) {
  if (number === 2) alert(number);

  for (let divider = 2; divider < Math.sqrt(number); divider++) {
    if (number % divider === 0) continue nextPrime;
  }

  alert(number);
}
