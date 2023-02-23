// ---------- Задание 1 - Сумма пользовательских чисел ----------
const promptFirstNumber = Number(prompt("Введите первое число: "));
const promptSecondNumber = Number(prompt("Введите второе число: "));

if (isNaN(promptFirstNumber) || isNaN(promptSecondNumber)) {
  alert("Некорректный ввод");
} else {
  alert(promptFirstNumber + promptSecondNumber);
}

// ---------- Задание 2 - Почему 6.35.toFixed(1) == 6.3? ----------
// alert((6.35).toFixed(1) == 6.3);
// Ответ: Они равны потому что, метод toFixed возвращает string. "6.3" == 6.3 ==> true
//      Но Typescript такой код недопустим.

// ---------- Задание 3 - Ввод числового значения ----------
function readNumber(): number | null {
  let runningLoop = true;
  while (runningLoop) {
    let number = prompt("Введите число: ", "");
    if (number === "") {
      return null;
    }

    if (!isNaN(Number(number))) {
      return Number(number);
    }
  }
}

alert(`Ваш ввод: ${readNumber()}`);

// ---------- Задание 4 - Случайное число от min до max ----------
function random(min: number, max: number) {
  return Math.round(min + Math.random() * (max - min));
}

alert(`Рандомное число от 1 до 5: ${random(1, 5)}`);
