// ---------- Задание 1 - Создайте дату ----------
console.group("Задание 1");
console.log(new Date("2012-2-20 3:12:00"));
console.groupEnd();

// ---------- Задание 2 - Покажите день недели ----------

function getWeekDay(date: Date): string {
  const weekDays = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
  return weekDays[date.getDay()];
}

console.group("Задание 2");
console.log("Сегодня -", getWeekDay(new Date()));
console.groupEnd();

// ---------- Задание 3 - День недели в европейской нумерации ----------
function getLocalDay(date: Date): number {
  const day = date.getDay();
  if (day === 0) {
    return 7;
  }
  return day;
}

console.group("Задание 3");
console.log("Номер сегодняшнего дня недели -", getLocalDay(new Date()));
console.groupEnd();

// ---------- Задание 4 - Какой день месяца был много дней назад? ----------
function getDateAgo(date: Date, days: number): number {
  date.setDate(date.getDate() - days);
  return date.getDate();
}

console.group("Задание 4");
console.log("3 дня назад было следующее число -", getDateAgo(new Date(), 3));
console.log(
  "2 января 2015 года 365 дня назад было следующее число -",
  getDateAgo(new Date(2015, 0, 2), 365)
);
console.groupEnd();

// ---------- Задание 5 - Последнее число месяца? ----------
function getLastDayOfMonth(year: number, month: number): number {
  const date = new Date(year, month + 1, 0);
  return date.getDate();
}

console.group("Задание 5");
console.log("Последний день Февраля в 2012 году -", getLastDayOfMonth(2012, 1));
console.groupEnd();

// ---------- Задание 6 - Сколько сегодня прошло секунд? ----------
function getSecondsToday(): number {
  const date = new Date();
  return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
}

console.group("Задание 6");
console.log("С начала дня сегодня прошло секунд -", getSecondsToday());
console.groupEnd();

// ---------- Задание 7 - Сколько секунд осталось до завтра? ----------
function getSecondsToTomorrow(): number {
  const secondsInDay = 24 * 3600;
  return secondsInDay - getSecondsToday();
}

console.group("Задание 7");
console.log("До завтрашнего дня осталось секунд -", getSecondsToTomorrow());
console.groupEnd();

// ---------- Задание 8 - Сколько секунд осталось до завтра? ----------
function formatDate(date: Date) {
  const currentDate = new Date();
  const passedTime = currentDate.getTime() - date.getTime();

  const msInSec = 1000;
  const msInMin = 60 * 1000;
  const msInH = 60 * msInMin;
  const msInD = 24 * msInH;

  if (passedTime < msInSec) {
    return "прямо сейчас";
  }
  if (passedTime < msInMin) {
    return `${passedTime / msInSec} сек. назад`;
  }
  if (passedTime < msInH) {
    return `${passedTime / msInMin} минут назад`;
  }
  if (passedTime < msInD) {
    return `${passedTime / msInH} часов назад`;
  }

  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const hours = date.getHours();
  const minutes =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    
  return `${year}-${month}-${day} ${hours}:${minutes}`;
}

console.group("Задание 8");
console.log(
  "Сообщение было отправлено:",
  formatDate(new Date(new Date().getTime() - 1))
);
console.log(
  "Сообщение было отправлено:",
  formatDate(new Date(new Date().getTime() - 30 * 1000))
);
console.log(
  "Сообщение было отправлено:",
  formatDate(new Date(new Date().getTime() - 5 * 60 * 1000))
);
console.log(
  "Сообщение было отправлено:",
  formatDate(new Date(new Date().getTime() - 25 * 60 * 1000))
);
console.log(
  "Сообщение было отправлено:",
  formatDate(new Date(new Date().getTime() - 86400 * 1000))
);
console.groupEnd();
