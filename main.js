"use strict";

let date = new Date();
let options = {
  year: 'numeric',
  month: 'long',
  weekday: 'long',
  day: '2-digit'
};

let lang = prompt('h');

let langArr = new Map([
  ['ru', date.toLocaleString('ru', options)],
  ['en', date.toLocaleString('en-GB', options)]
]);

lang === String('en') ? console.log(langArr.get('en')) : console.log(langArr.get('ru'));



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















