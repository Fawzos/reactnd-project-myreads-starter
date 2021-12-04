import React from "react";
import ListBook from "./components/ListBook";
import "./App.css";
import * as BooksAPI from "./BooksAPI";
import { Route, Routes } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import { debounce } from "throttle-debounce";

const shlves = [
  { key: "currentlyReading", name: "Currently Reading" },
  { key: "wantToRead", name: "Want to Read" },
  { key: "read", name: "Read" },
];

class App extends React.Component {
  state = {
    books: [],
    searchBooks: [],
    error: false,
  };

  componentDidMount = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  };
  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf).catch((error) => {
      this.setState({ error: true });
    });
    if (shelf === "none") {
      this.setState((currentState) => ({
        books: currentState.books.filter((b) => b.id !== book.id),
      }));
    } else {
      book.shelf = shelf;
      this.setState((currentState) => ({
        books: currentState.books.filter((b) => b.id !== book.id).concat(book),
      }));
    }
  };

  searchBook = debounce(300, false, (query) => {
    if (query.length > 0) {
      BooksAPI.search(query).then((books) => {
        if (books.error) {
          this.setState({ searchBooks: [] });
        } else {
          this.setState({ searchBooks: books });
        }
      });
    } else {
      this.setState({ searchBooks: [] });
    }
  });

  closeSearch = () => {
    this.setState({ searchBooks: [] });
  };

  render() {
    const { books, searchBooks } = this.state;
    return (
      <div className="app">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <ListBook shlves={shlves} books={books} onMove={this.moveBook} />
            }
          />
          <Route
            path="/search"
            element={
              <SearchPage
                searchBooks={searchBooks}
                books={books}
                onSearch={this.searchBook}
                onClose={this.closeSearch}
                onMove={this.moveBook}
              />
            }
          />
        </Routes>
      </div>
    );
  }
}
export default App;
