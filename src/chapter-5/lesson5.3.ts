// ---------- Задание 1 - Сделать первый символ заглавным ----------
function ucFirst(str: string): string {
  return str[0].toUpperCase() + str.slice(1);
}

alert(`вася ==> ${ucFirst("вася")}`);

// ---------- Задание 2 - Проверка на спам ----------
function checkSpam(str: string): boolean {
  return /viagra|XXX/gi.test(str);
}

alert(checkSpam("buy ViAgRA now"));
alert(checkSpam("free xxxxx"));
alert(checkSpam("innocent rabbit"));

// ---------- Задание 3 - Усечение строки ----------
function truncate(str: string, maxlength: number) {
  return str.length > maxlength ? str.slice(0, maxlength - 1) + "…" : str;
}

alert(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));

alert(truncate("Всем привет!", 20));

// ---------- Задание 4 - Выделить число ----------
function extractCurrencyValue(str: string): number {
  return Number(str.match(/[0-9]/g).join(""));
}

alert(extractCurrencyValue("$120"));
