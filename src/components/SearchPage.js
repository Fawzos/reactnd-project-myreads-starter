import React from "react";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";

class SearchPage extends React.Component {
  render() {
    const { searchBooks, books, onSearch, onClose, onMove } = this.props;
    console.log(this.props);
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search" onClick={onClose}>
              Close
            </button>
          </Link>
          <SearchInput onSearch={onSearch} />
        </div>
        <SearchResults
          searchBooks={searchBooks}
          onMove={onMove}
          books={books}
        />
      </div>
    );
  }
}

export default SearchPage;
