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
    console.log(bookRead.classList);
})

function bookInfo() {
    let title = bookTitle.value;
    let author = bookAuthor.value;
    let pages = bookPages.value;
    let bookInput = ( "'" + title + "'," + "'" + author + "'," + "'" + pages + "'," + "'");
    return bookInput;
}

function saveInput() {
    
    let haveRead = "have read";
    let haveNotRead = "have not read";
    let readBook = bookInfo();

    if (bookRead.classList.contains('have-read')) {
        let bookReport = (readBook + "'" + haveRead + "'");
        return bookReport;
    } else {
        let bookReport = (readBook + "'" + haveNotRead + "'");
        return bookReport;
    }
}




submit.addEventListener('click', () => {
    let bookRecord = saveInput();
  
    let bookSave = new Book(bookRecord);
    bookSave.addBookToLibrary();
    console.log(myLibrary);
    //helper functions:
        //access input elements
        //string together in new Book item
        //name according to input title
        //push to myLibrary
})

//Add event listener to submit button that takes input and puts into constructor function


