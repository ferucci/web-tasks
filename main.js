"use strict";

let string = prompt('Приветствую JS, нужно после тридцатого символа обрезать текст');

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
}

const result = function (a) {
  a.trim();
  const result2 = function () {
    if (isNumber(a)) {
      console.log('В качестве аргумента передана НЕ строка');
    } else if (a.length > 30) {
      a = a.slice(0, 30) + '...';
    } else {
      return a;
    }
  };
  result2();
  return a.trim();
};

console.log(result(string));













