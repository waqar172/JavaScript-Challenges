var books = [
    {
      title: 'hamlet',
      author: 'william shakespeare’,
      alreadyRead: false
    },
    {
      title: 'Mark Twain',
      author: 'The Adventures of Tom Sawyer',
      alreadyRead: true
    }
  ];
  
  for (var i = 0; i < books.length; i++) {
    var book = books[i];
    var bookInfo = book.title + '" by ' + book.author;
    if (book.alreadyRead) {
      console.log('You already read "' + bookInfo);
    } else {
      console.log('You still need to read "' + bookInfo);
    }
  }  