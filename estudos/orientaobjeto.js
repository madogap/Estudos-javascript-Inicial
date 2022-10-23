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
console.log('\n\n');
var book = new book('A', 'B', 'C');
function book(title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
    this.printTitle = function () {
        console.log(this.title);
    }
    this.printPages = function () {
        console.log(this.pages);
    }
    this.printIsbn = function () {
        console.log(this.isbn);
    };
}
book.printTitle();
book.printPages();
book.printIsbn();

console.log(this.title);
console.log(this.page);
console.log(this.isbn);

console.log('\n');
console.log(book.title);
console.log(book.pages);
console.log(book.isbn);

book.title = 'New Title';
book.pages = 'New Pages';
book.isbn = 'New Isbn';
console.log(book.title);

console.log(book.pages);

console.log(book.isbn);

console.log(this.title);
console.log(this.page);
console.log(this.isbn);



