let myLibrary = [];

const submit = document.querySelector('.submit');

let bookTitle = document.querySelector('.title');
let bookAuthor = document.querySelector('.author');
let bookPages = document.querySelector('.pages');
let bookRead = document.querySelector('.read');

function Book(title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
}

Book.prototype.addBookToLibrary = function () {
    myLibrary.push(this);
    console.log(myLibrary);
    return myLibrary;
}


bookRead.addEventListener('click', () => {
    bookRead.classList.add('have-read');
})

function saveInput() {
    
    let haveRead = "have read";
    let haveNotRead = "have not";

    if (bookRead.classList.contains('have-read')) {
        let bookReport = haveRead;
        return bookReport;
    } else {
        let bookReport = haveNotRead;
        return bookReport;
    }
}

function bookInfo() {
    let title = bookTitle.value;
    let author = bookAuthor.value;
    let pages = bookPages.value;
    let read = saveInput();
    let bookInput = new Book(title, author, pages, read);
    console.log(bookInput);
    myLibrary.push(bookInput);
}


submit.addEventListener('click', () => {
    bookInfo();

})


