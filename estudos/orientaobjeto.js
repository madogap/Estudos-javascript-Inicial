//var obj = new Object;//Duas formas de fazer objeto
//var obj = {};// Criação de um objeto livro pagina 45

obj = {
    name: {
        first: 'Gandalf',
        last: 'Grey'
    },
    address: 'Middle Earth'
};
console.log(obj);
console.log('-------------------------------------------------------------------');

var book = new book('A', 'B', 'C');

function book(title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
    this.printTitle = function () {
        console.log(this.title);//A
    }
    this.printPages = function () {
        console.log(this.pages);//B
    }
    this.printIsbn = function () {
        console.log(this.isbn);//C
    };
}
console.log(book);
book.printPages();
book.printTitle();
book.printIsbn(); 

console.log(this.title);//undefined
console.log('--------------------------------');
console.log(this.page);//undefined
console.log('--------------------------------');
console.log(this.isbn);//undefined
console.log('--------------------------------');

console.log('\n');
console.log(book.title);//A
console.log('--------------------------------');
console.log(book.pages);//B
console.log('--------------------------------');
console.log(book.isbn);//C




book.title = 'New Title';
book.pages = 'New Pages';
book.isbn = 'New Isbn';
console.log('--------------------------------');
console.log(book.title);//New Title

console.log('--------------------------------');
console.log(book.pages);//New Pages
console.log('--------------------------------');

console.log(book.isbn);//New Isbn
console.log('--------------------------------');

console.log(this.title);//undefined
console.log(this.page);//undefined
console.log(this.isbn);//undefined



