import React from "react";

class BookTrigger extends React.Component {
  state = {
    value: this.props.shelf,
  };

  handleChange = (e) => {
    const { book } = this.props;
    const { value } = e.target;
    this.setState({ value });
    this.props.onMove(book, value);
  };
  render() {
    const { value } = this.state;
    return (
      <div className="book-shelf-changer">
        <select value={value} onChange={this.handleChange}>
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}
export default BookTrigger;
