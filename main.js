"use strict";

let lang = prompt('На каком языке вывести сегодняшнюю дату?' + ' ' + 'ru / en');
let date = new Date();
let options = {
  year: 'numeric',
  month: 'long',
  weekday: 'long',
  day: '2-digit'
};

let langArr = [
  ["ru", 'en']
];

let namePerson = prompt('Как вас зовут?');
let condition =
  (namePerson === 'Артём') ? 'Директор' :
    (namePerson === 'Александр') ? 'Преподаватель' :
      'Студент';



if (lang === 'ru') {
  console.log(date.toLocaleString('ru', options));
} else if (lang === 'en') {
  console.log(date.toLocaleString('en-GB', options));
} else {
  console.log(date.toLocaleString('zh-Hans-CN', options));
}

switch (lang) {
  case 'ru':
    console.log(date.toLocaleString('ru', options));
    break;
  case 'en':
    console.log(date.toLocaleString('en-GB', options));
    break;
  default:
    console.log('Тогда на китайском', date.toLocaleString('zh-Hans-CN', options));
}



for (let i = 0; i < langArr.length; i++) {

  for (let i = 0; i < langArr.length; i++) {
    (langArr[0][0]) = console.log(date.toLocaleString('ru', options));
    (langArr[0][1]) = console.log(date.toLocaleString('en-GB', options));
  }

}

console.log(condition);