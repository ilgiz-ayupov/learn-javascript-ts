// ---------- Задание 1 - Скопирован ли массив? ----------
// Что выведет следующий код?

const fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
const shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
alert(fruits.length);

// Ответ: Нет, shoppingCart получает ссылку на объект fruits.
// Следовательно производя shoppingCart.push("Банан") добавляется новый примитив
//      в массив fruits

// ---------- Задание 2 - Операции с массивами ----------
const styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[Math.floor(styles.length / 2)] = "Классика";
alert(styles.shift());
styles.unshift("Рэп", "Регги");

alert(`Результат: ${styles}`);

// ---------- Задание 3 - Вызов в контексте массива ----------
// Каков результат? Почему?
// let arr = ["a", "b"];

// arr.push(function () {
//   alert(this);
// });

// arr[2]();
// Итак, у нас есть вызов функции arr[2] как метода объекта.
// Соответственно, он получает в качестве this объект arr и выводит массив: a,b,function(){...}

// ---------- Задание 4 - Сумма введённых чисел ----------
function readNumbers(): number[] {
  const numbers: number[] = [];
  while (true) {
    const number = prompt("Введите число: ", "");
    if (number === "" || isNaN(Number(number))) break;
    numbers.push(Number(number));
  }
  return numbers;
}

function sumInputNumbers(numbers: number[]): number {
  return numbers.reduce((result, number) => result + number, 0);
}

alert(`Сумма чисел: ${sumInputNumbers(readNumbers())}`);

// ---------- Задание 5 - Подмассив наибольшей суммы ----------
function getMaxSubSum(arr: number[]) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) {
    // для каждого элемента массива
    partialSum += item; // добавляем значение элемента к partialSum
    maxSum = Math.max(maxSum, partialSum); // запоминаем максимум на данный момент
    if (partialSum < 0) partialSum = 0; // ноль если отрицательное
  }

  return maxSum;
}

alert(getMaxSubSum([-1, 2, 3, -9])); // 5
alert(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
alert(getMaxSubSum([-2, -1, 1, 2])); // 3
alert(getMaxSubSum([100, -9, 2, -3, 5])); // 100
alert(getMaxSubSum([1, 2, 3])); // 6
alert(getMaxSubSum([-1, -2, -3])); // 0
