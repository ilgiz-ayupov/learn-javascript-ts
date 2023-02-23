// ---------- Задание 1 - Хранение отметок "не прочитано" ----------
let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" },
];

const readMessages = new WeakSet();
readMessages.add(messages[0]);
readMessages.add(messages[1]);

console.group("Задание 1");
console.log("Список прочитанных сообщений:", readMessages);
console.groupEnd();

// ---------- Задание 2 - Хранение времени прочтения ----------
const dateReadMessages = new WeakMap();
dateReadMessages.set(messages[0], new Date());

console.group("Задание 2");
console.log("Список прочитанных сообщений:", dateReadMessages);
console.groupEnd();
