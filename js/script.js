let books = document.querySelector(".books");
let book = document.getElementsByClassName("book");

//1
books.prepend(book[1]);
books.append(book[2]);
book[2].before(book[3]);

//2
