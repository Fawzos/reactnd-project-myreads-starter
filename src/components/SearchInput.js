import React from "react";

class SearchInput extends React.Component {
  state = {
    searchValue: "",
  };

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ searchValue: value }, () => {
      this.props.onSearch(value);
      console.log(e);
    });
  };
  render() {
    return (
      <div className="search-books-input-wrapper">
        <input
          type="text"
          value={this.state.searchValue}
          placeholder="Search by title or author"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default SearchInput;
