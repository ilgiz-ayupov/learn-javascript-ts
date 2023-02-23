// ---------- Задание 1 - Фильтрация уникальных элементов массива ----------

function unique2<T>(arr: Array<T>): Array<T> {
  return Array.from(new Set(arr));
}

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];
console.group("Задание 1");
console.log("Уникальные значения:", unique2(values)); // Hare,Krishna,:-O
console.groupEnd();

// ---------- Задание 2 - Отфильтруйте анаграммы ----------
function aclean(arr: string[]) {
  let map = new Map();

  for (let word of arr) {
    let sorted = word.toLowerCase().split("").sort().join(""); // (*)
    map.set(sorted, word);
  }

  return Array.from(map.values());
}

let anagrams = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.group("Задание 2");
console.log(aclean(anagrams));
console.groupEnd();

// ---------- Задание 3 - Перебираемые ключи ----------
let map = new Map();
map.set("name", "John");
let keys = Array.from(map.keys());
keys.push("more");

console.group("Задание 3");
console.log("Перебираемые ключ:", keys); // ["name", "more"]
console.groupEnd();
