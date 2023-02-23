// ---------- Задание 1 - Создайте калькулятор при помощи конструктора, new Calculator ----------

class Calculator {
  a: number;
  b: number;

  constructor() {
    this.a = 0;
    this.b = 0;
  }

  read() {
    this.a = Number(prompt("Введите первое число: "));
    this.b = Number(prompt("Введите второе число: "));
  }

  sum() {
    if (isNaN(this.a) || isNaN(this.b)) {
      return "Некорректный ввод";
    }
    return this.a + this.b;
  }

  mul() {
    if (isNaN(this.a) || isNaN(this.b)) {
      return "Некорректный ввод";
    }
    return this.a * this.b;
  }
}

const calculatorClass = new Calculator();
calculatorClass.read();
const resultSumClass = calculatorClass.sum();
const resultMulClass = calculatorClass.mul();

alert(`Сложение: ${resultSumClass}`);
alert(`Произведение: ${resultMulClass}`);

// ---------- Задание 2 - Создайте new Accumulator ----------
class Accumulator {
  value: number;

  constructor(initialValue: number) {
    this.value = initialValue;
  }

  read() {
    const readNumber = Number(prompt("Введите число: "));
    if (!isNaN(readNumber)) {
      this.value += readNumber;
    }
  }
}

const accumulator = new Accumulator(10);
accumulator.read();
accumulator.read();

alert(`Заряд аккумулятора: ${accumulator.value}`);
