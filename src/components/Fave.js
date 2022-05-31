import React, { Component } from 'react';

class Fave extends Component {
  handleClick = (e) => {
    e.stopPropagation();
    this.props.onFaveToggle(this.props.film);
  };

  render() {
    let isFave = this.props.fave ? 'remove_from_queue' : 'add_to_queue';

    return (
      <div onClick={this.handleClick} className={`film-row-fave ${isFave}`}>
        <p className='material-icons'>{isFave}</p>
      </div>
    );
  }
}

export default Fave;
