
"use strict";

//1
let book = document.getElementsByClassName("book");
let books = document.getElementsByClassName("books")[0];
book[0].before(book[1]);
books.append(book[2]);
book[2].before(book[3]);

//2
let body = document.getElementsByTagName("body")[0];
body.style.cssText= `position: relative;
background-image: url(./image/you-dont-know-js.jpg);
background-size: cover;
background-position: center;
background-repeat: no-repeat;
z-index: 1;`;

//3
let nameOfBook3 = book[2].querySelector("h2");
nameOfBook3.innerHTML = `<a href="https://github.com/azat-io/you-dont-know-js-ru/blob/master/es6%20%26%20beyond/README.md#you-dont-know-js-es6--beyond"
target="_blank">Книга 3. this и Прототипы Объектов</a>`;

//4
let advertis = document.querySelector(".adv");
advertis.remove();

//5 
let uls = book[4].querySelectorAll("li");
uls[1].after(uls[0]);
uls[2].before(uls[9]);
uls[9].after(uls[3]);
uls[3].after(uls[4]);
uls[2].after(uls[6]);
uls[6].after(uls[7]);

//6 

let uls6 = book[5].querySelectorAll("li");
uls6[8].insertAdjacentHTML('afterend', '<li>Глава 8: За пределами ES6</li>')
