import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToFavorites } from '../../actions/action-creator';
import { removedFromFavorites } from '../../actions/action-creator';
import Album from '../Album/Album';
import styles from './AlbumsList.css';
import { getAlbums } from './albumslist.selector';

class AlbumsList extends Component {

  constructor(props, context) {
    super(props, context);
    this.addRemoveFavorites = this.addRemoveFavorites.bind(this);
  }

  addRemoveFavorites(album) {
    !album.get('favorite') ? this.props.dispatch(addToFavorites(album.get('trackId'), album)) :
      this.props.dispatch(removedFromFavorites(album.get('trackId')));
  }

  render() {
    const { albums } = this.props;
    return (
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>ALBUMS</h2>
        {albums.size ?
          <ul className={styles.list}>
            {albums.map((album) => <Album album={album}
                                          onClick={() => this.addRemoveFavorites(album)} />)}
          </ul> :
          <span className={styles.text}>No albums found.</span>}
      </div>
    );
  }
}

AlbumsList.propTypes = {};
AlbumsList.defaultProps = {};

const mapStateToProps = state => getAlbums(state);
export default connect(mapStateToProps)(AlbumsList);
