import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { selectAlbums } from '../AlbumsList/albumslist.selector';
import Album from '../Album/Album';
import ArtistDetails from '../ArtistDetails/ArtistDetails';

class Favorites extends Component {
  render() {
    return (
      <div>
        <ul>
          <Album />
          <Album />
        </ul>
        <div>
          <ArtistDetails />
        </div>
      </div>
    );
  }
}

Favorites.propTypes = {};
Favorites.defaultProps = {};

const mapStateToProps = state => selectAlbums(state);
export default connect(mapStateToProps)(AlbumsList);
