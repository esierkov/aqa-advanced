import { Book } from "./Book.js";
import { EBook } from "./EBook.js";

const book1 = new Book("Кобзар", "Тарас Шевченко", 1840);
const book2 = new Book("Лісова пісня", "Леся Українка", 1911);
const ebook1 = new EBook(
    "JavaScript для початківців",
    "Іван Петренко",
    2022,
    "PDF"
);

book1.printInfo();
book2.printInfo();
ebook1.printInfo();

book1.title = "Новий Кобзар";
console.log(book1.title);

ebook1.fileFormat = "EPUB";
console.log(ebook1.fileFormat);

const books = [book1, book2, ebook1];

const oldestBook = Book.findOldestBook(books);

console.log("\nНайдавніша книга:");
oldestBook.printInfo();

const ebookFromBook = EBook.createFromBook(book2, "MOBI");

console.log("\nEBook створений з Book:");
ebookFromBook.printInfo();