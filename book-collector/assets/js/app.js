(() => {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    // get the tbody element
    const bookList = document.querySelector('.book-list'); 

    // read the book data from somewhere else, perhaps from localStorage?
    bookList.appendChild(createBookItem('The Art Of Deception', 'Kevin Mitnick', '978-0764542800'));
    bookList.appendChild(createBookItem('The Nature of Code', 'Daniel Shiffman', '978-0985930806'));
  });
  
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
    const anchor = document.createElement('a');
    anchor.href = '#';
    anchor.classList = "delete-book";
    anchor.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deleteEl.appendChild(anchor);
    tr.appendChild(deleteEl);

    return tr;
  }

})();