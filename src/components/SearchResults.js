import React from "react";
import Book from "./Book";

class SearchResults extends React.Component {
  render() {
    const { books, onMove, searchBooks } = this.props;

    const searchedBooks = searchBooks.map((book) => {
      books.map((b) => {
        if (b.id === book.id) {
          book.shelf = b.shelf;
        }
        return b;
      });
      return book;
    });
    return (
      <div className="search-books-results">
        <ol className="books-grid">
          {searchedBooks.map((book) => (
            <Book
              key={book.id}
              book={book}
              shelf={book.shelf ? book.shelf : "none"}
              onMove={onMove}
            />
          ))}
        </ol>
      </div>
    );
  }
}
export default SearchResults;
