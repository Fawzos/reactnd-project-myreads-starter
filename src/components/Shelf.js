import React from "react";
import Book from "./Book";

class Shelf extends React.Component {
  render() {
    console.log(this.props);
    const { shelf, books, onMove } = this.props;
    const booksInCurrentShelf = books.filter(
      (book) => book.shelf === shelf.key
    );
    console.log("booksInCurrentShelf", booksInCurrentShelf);
    return (
      <div className="bookshelf">
        <h2 className="bookShelf-title">{shelf.name}</h2>
        <ol className="books-grid">
          {booksInCurrentShelf.map((book) => (
            <Book key={book.id} book={book} shelf={shelf.key} onMove={onMove} />
          ))}
        </ol>
      </div>
    );
  }
}

export default Shelf;
