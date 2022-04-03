"use strict";

let stroka = prompt('Приветствую JS, я прекрасно себя чувствую и хотел бы, чтоб после тридцатой строки обрезать текст');

const result = function (a) {
  const result2 = function () {
    if (a !== 'string') {
      console.log('В качестве аргумента передана НЕ строка');
    } else if (a.length > a[30]) {
      return a.slice(0, 30);
    }
  };
  result2();
  return a.trim();
};

console.log(result(stroka) + '...');













