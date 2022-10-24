let myLibrary = [];

const submit = document.querySelector('.submit');

let bookTitle = document.querySelector('.title');
let bookAuthor = document.querySelector('.author');
let bookPages = document.querySelector('.pages');
let bookRead = document.querySelector('.read');

//Book constructor function
function Book(title, author, pages, status) {
    this.title = bookTitle.value
    this.author = bookAuthor.value
    this.pages = bookPages.value
    this.status = status
}

//Adds prototype to book constructor to add book to myLibrary array
Book.prototype.addBookToLibrary = function () {
    myLibrary.push(this);
    console.log(myLibrary);
    return myLibrary;
}

//Event listener to collect input book info
bookRead.addEventListener('click', () => {
    if (!bookRead.classList.contains('have-read')) {
        bookRead.classList.add('have-read');
    } else if (bookRead.classList.contains('have-read')) {
        bookRead.classList.remove('have-read');
    }
})

//Sets class of book based on read status
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


//Adds book to library and displays book on shelf
function shelfBook() {

    let read = saveInput();
    let bookInput = new Book(title, author, pages, read);
    console.log(bookInput);
    myLibrary.push(bookInput);



    let bookShelf = document.querySelector('.bookShelf');
    let bookDiv = document.createElement('div');
    let titleDiv = document.createElement('div');
    let authorDiv = document.createElement('div');
    let pagesDiv = document.createElement('div');
    let readDiv = document.createElement('div');

    bookDiv.classList.add('book');
    bookDiv.setAttribute('id', myLibrary.indexOf(bookInput));
    bookShelf.appendChild(bookDiv);

    titleDiv.textContent = bookTitle.value;
    titleDiv.classList.add('title');
    bookDiv.appendChild(titleDiv);

    authorDiv.textContent = bookAuthor.value;
    authorDiv.classList.add('author');
    bookDiv.appendChild(authorDiv);

    pagesDiv.textContent = bookPages.value;
    pagesDiv.classList.add('pages');
    bookDiv.appendChild(pagesDiv);

    readDiv.textContent = saveInput();
    readDiv.classList.add('read');
    bookDiv.appendChild(readDiv);
}

submit.addEventListener('click', () => {
    shelfBook();
})


