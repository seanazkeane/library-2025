const myLibrary = [];

const bookForm = document.querySelector('#book-form');
bookForm.classList.add('display-none');
const addBookButton = document.querySelector('#add-book-button');
addBookButton.addEventListener('click', showBookForm);
const libraryContainer = document.querySelector("#library-container");

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleRead = function() {
  this.read = !this.read;
}

function showBookForm() {
    bookForm.classList.remove('display-none')
    bookForm.classList.add('display-flex');
}

function addBookToLibrary() {
  // take params, create a book then store it in the array
  event.preventDefault();
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let pages = document.getElementById('pages').value;
  let read = document.getElementById('read').value;
  let book = new Book(title, author, pages, read);
  myLibrary.push(book);
  renderBooks();
  bookForm.reset();
}

bookForm.addEventListener('submit', addBookToLibrary);

function renderBooks() {
    libraryContainer.innerHTML = '';
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookDiv = document.createElement("div");
        bookDiv.id = i;
        bookDiv.classList.add('book-card');
        bookDiv.innerHTML =
        `<p>${book.title}</p>
        <p>${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <p id="readToggler">Read: ${book.read ? "Yes" : "Not yet"}</p>
        <button onclick='toggleRead(${i})'>${book.read ? "Mark as Unread" : "Mark as Read"}</button>
        <button onclick='removeBook(${i})'>Remove</button`;
        libraryContainer.appendChild(bookDiv);
    }
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    renderBooks();
}

function toggleRead(index) {
  myLibrary[index].toggleRead();
  renderBooks();
}