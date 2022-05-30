import React, { Component } from "react";

class Fave extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);

    this.state = {};
  }
  handleClick = (e) => {
    e.stopPropagation();
    console.log("Handling Fave click!");
    this.props.onFaveToggle(this.props.film);
  };

  render() {
    const isFave = this.props.isFave ? "remove_from_queue" : "add_to_queue";

    return (
      <div onClick={this.handleClick} className={`film-row-fave ${isFave}`}>
        <p className="material-icons">{isFave}</p>
      </div>
    );
  }
}

export default Fave;
