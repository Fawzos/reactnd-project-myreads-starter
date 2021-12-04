import React from "react";
import BookTrigger from "./BookTrigger";

class Book extends React.Component {
  render() {
    const { book, shelf, onMove } = this.props;
    return (
      <div>
        <li>
          <div className="book">
            <div className="book-top">
              <div
                className="book-cover"
                style={{
                  width: 128,
                  height: 193,
                  backgroundImage: `url(${
                    book.imageLinks
                      ? book.imageLinks.thumbnail
                      : "icons/book-placeholder.svg"
                  })`,
                }}
              />
              <BookTrigger book={book} shelf={shelf} onMove={onMove} />
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">
              {book.authors ? book.authors.join(",") : "Unknown Author"}
            </div>
          </div>
        </li>
      </div>
    );
  }
}

export default Book;
