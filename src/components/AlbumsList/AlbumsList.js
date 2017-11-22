import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Album from '../Album/Album';

class AlbumsList extends Component {
  render() {
    return (
      <div>
        <ul>
          <Album />
          <Album />
          <Album />
        </ul>
      </div>
    );
  }
}

AlbumsList.propTypes = {};
AlbumsList.defaultProps = {};

export default AlbumsList;
