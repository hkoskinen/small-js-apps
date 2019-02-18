(() => {
  'use strict';

  // UI variables
  const bookForm = document.querySelector('#book-form'),
        title = document.querySelector("#title"),
        author = document.querySelector("#author"),
        isbn = document.querySelector("#isbn");

  const bookList = document.querySelector('.book-list');
  const errorMessage = document.querySelector('#error-message');
  
  document.addEventListener('DOMContentLoaded', () => {
    // add some example data
    bookList.appendChild(createBookItem('The Art Of Deception', 'Kevin Mitnick', '978-0764542800'));
    bookList.appendChild(createBookItem('The Nature Of Code: Simulating Natural Systems with Processing', 'Daniel Shiffman', '978-0985930806'));
    bookList.appendChild(createBookItem('Code: The Hidden Language of Computer Hardware and Software', 'Charles Petzold', '978-0735611313'));
    bookList.appendChild(createBookItem("Clean Architecture: A Craftsman's Guide to Software Structure and Design", 'Robert C. Martin', '978-0134494166'));
    bookList.appendChild(createBookItem('Effective Java', 'Joshua Bloch', '978-0134685991'));
  });

  bookForm.addEventListener('submit', e => {
    if (title.value === '' || author.value === '' || isbn.value === '') {
      showError('Please fill out all the fields');
    } else {
      bookList.appendChild(createBookItem(title.value, author.value, isbn.value));
      clearForm();
    }
    e.preventDefault();
  });

  bookList.addEventListener('click', e => {
    // make sure that you can press the whole button to delete the row
    if (e.target.classList.contains('delete-book')) {
      e.target.parentElement.parentElement.remove();
    }
  });
  
  function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
    setTimeout(() => {
      errorMessage.style.display = 'none';
    }, 3000);
  }

  function clearForm() {
    bookForm.reset();
  }

  function createBookItem(title, author, isbn) {
    const tr = document.createElement('tr');
    const titleEl = document.createElement('td');
    titleEl.appendChild(document.createTextNode(title));
    tr.appendChild(titleEl);

    const authorEl = document.createElement('td');
    authorEl.appendChild(document.createTextNode(author));
    tr.appendChild(authorEl);

    const isbnEl = document.createElement('td');
    isbnEl.appendChild(document.createTextNode(isbn));
    tr.appendChild(isbnEl);

    const deleteEl = document.createElement('td');
    deleteEl.classList = 'center';
    const btn = document.createElement('button');
    btn.classList = "delete-book pure-button";
    btn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deleteEl.appendChild(btn);
    tr.appendChild(deleteEl);

    return tr;
  }
  
})();