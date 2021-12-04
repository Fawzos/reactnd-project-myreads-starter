import React from "react";
import { Link } from "react-router-dom";
import Shelf from "./Shelf";

class ListBook extends React.Component {
  render() {
    console.log(this.props);
    const { shlves, books, onMove } = this.props;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-book-content">
          <div>
            {shlves.map((shelf) => (
              <Shelf
                key={shelf.key}
                books={books}
                shelf={shelf}
                onMove={onMove}
              />
            ))}
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">
            <button>Add Book</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default ListBook;
