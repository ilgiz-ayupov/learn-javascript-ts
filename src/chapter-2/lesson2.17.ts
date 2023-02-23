// ---------- Задание 4 - Перепишите с использованием функции-стрелки ----------
const ask = (question: string, yes: () => void, no: () => void):void => {
  if (confirm(question)) yes();
  else no();
};

ask(
  "Вы согласны?",
  () => {
    alert("Вы согласились.");
  },
  () => {
    alert("Вы отменили выполнение.");
  }
);
