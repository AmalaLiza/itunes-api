import React, { Component } from 'react';

class Album extends Component {
  render() {
    return (
      <li>
        <div>image</div>
        <span>details</span>
        <span>details</span>
      </li>
    );
  }
}

Album.propTypes = {};
Album.defaultProps = {};

export default Album;
