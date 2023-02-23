// ---------- Задание 1 - Использование "this" в литерале объекта ----------
// function makeUser() {
//   return {
//     name: "John",
//     ref: this,
//   };
// }
// let user = makeUser();
// alert(user.ref.name); // Каким будет результат?

// Ответ: Ошибка. Так как функция makeUser не является методом объекта её
//      this равен undefined

// ---------- Задание 2 - Создайте калькулятор ----------

const calculator = {
  a: 0,
  b: 0,
  read() {
    this.a = Number(prompt("Введите первое число: "));
    this.b = Number(prompt("Введите первое число: "));
  },
  sum() {
    if (isNaN(this.a) || isNaN(this.b)) {
      return "Некорректный ввод";
    }
    return this.a + this.b;
  },
  mul() {
    if (isNaN(this.a) || isNaN(this.b)) {
      return "Некорректный ввод";
    }
    return this.a * this.b;
  },
};

calculator.read();
const resultSum = calculator.sum();
const resultMul = calculator.mul();

alert(`Сложение: ${resultSum}`);
alert(`Произведение: ${resultMul}`);

// ---------- Задание 3 - Цепь вызовов ----------
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert(this.step);
    return this;
  },
};

ladder.up().up().down().showStep().down().showStep();
