import React, { Component } from "react";

 class Search extends Component {
  state = {
    text: ""
  };

  handleChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
    this.setState({ text: "" });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="text"
            placeholder="Search Here"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <button type="submit" value="Search">
            Search
          </button>
        </form>
      </div>
    );
  }
}
export default Search;