let myLibrary = [];
 let libraryDisplay = document.querySelector('#library-display'); 

function Book(title, author, pageNumber){
  this.title = title;
  this.author = author;
  this.pageNumber = pageNumber;
  this.readStatus = false;
}

Book.prototype.toggleStatus = () => {
  this.readStatus == true ? this.readStatus = false : this.readStatus = true
}

const deleteBook = (e) => {
  index = myLibrary.findIndex(book);
  myLibrary.splice(index, 1);
}

document.getElementById(0).addEventListener('click', (e) => {
  console.log(e.target);
});


function displayBook(myLibrary){
  while (libraryDisplay.firstChild) {
        libraryDisplay.removeChild(libraryDisplay.firstChild);
    }
    
   myLibrary.forEach((book) => {
    let row = document.createElement('tr');
    row.innerHTML = `<td>${book.title}</td>
                    <td>${book.author}</td>
                    <td>${book.pageNumber}</td>
                    <td><button id="${book.title}">${book.readStatus}</button></td>
                    <td><button id="${myLibrary.indexOf(book)}" data-id="${myLibrary.indexOf(book)}">Delete</button></td>`
     libraryDisplay.appendChild(row)}
    );
}

function addBookToLibrary(title, author, pageNumber){
  let book = new Book(title, author, pageNumber);
  myLibrary.push(book); 
  displayBook(myLibrary);
 }
 
 function cleaFields(){
   title = document.getElementById('title').value = ""
   author = document.querySelector('#author').value = ""
   pageNumber = document.querySelector('#page-num').value = ""
 }
 

 document.getElementById('form').addEventListener('submit', function(e) {
  let title = document.getElementById('title').value;
  let author = document.querySelector('#author').value;
  let pageNumber = document.querySelector('#page-num').value;
  addBookToLibrary(title, author, pageNumber);
  cleaFields()
  e.preventDefault();
});






