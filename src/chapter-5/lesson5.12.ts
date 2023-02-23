// ---------- Задание 1 - Преобразуйте объект в JSON, а затем обратно в обычный объект ----------
const userObj = {
  name: "Василий Иванович",
  age: 35,
};

const userJson = JSON.stringify(userObj);

console.group("Задание 1");
console.log(userJson);
console.groupEnd();

// ---------- Задание 2 - Исключить обратные ссылки ----------

let room = {
  number: 23,
};

let meetup = {
  title: "Совещание",
  occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
  place: room,
};

// цикличные ссылки
//@ts-ignore
room.occupiedBy = meetup;
//@ts-ignore
meetup.self = meetup;

console.group("Задание 2");
console.log(
  JSON.stringify(meetup, function replacer(key, value) {
    return key !== "" && value === meetup ? undefined : value;
  })
);
console.groupEnd();
