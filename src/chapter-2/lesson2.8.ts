// ---------- Задание 1 - Чему будут равны переменные a, b, c и d в примере ниже? ----------

let a = 1,
  b = 1;

let c = ++a; // ?
let d = b++; // ?

// Ответ: a = 2; b = 2; c = 2; d = 1;

// ---------- Задание 2 - Чему будут равны переменные x и y после исполнения кода в примере ниже? ----------
let x = 2;

let y = 1 + (x *= 2);

// Ответ: x = 4; y = 5;

// ---------- Задание 3 - Какой результат будет у выражений ниже? ----------
// ==> Ответ: В Typescript это неправильные выражение, а в Javascript эти выражения будут равны:
// "" + 1 + 0                   ==> "10";
// "" - 1 + 0;                  ==> -1
// true + false;                ==> 1;
// 6 / "3";                     ==> 2
// "2" * "3";                   ==> 6
// 4 + 5 + "px";                ==> "45px"
// "$" + 4 + 5;                 ==> "$45"
// "4" - 2;                     ==> 2
// "4px" - 2;                   ==> NaN
// "  -9  " + 5;                ==> " -9 5"
// "  -9  " - 5;                ==> -14
// null + 1;                    ==> 1
// undefined + 1;               ==> NaN
// " \t \n" - 2;                ==> -2

// ---------- Задание 4 - Исправьте сложение ----------

let firstNumber: number = Number(prompt("Первое число?", "1"));
let secondNumber: number = Number(prompt("Второе число?", "2"));

if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
    alert(a + b);
} else {
    alert("Некорректный вывод")
}
