import React, { Component } from 'react';
import { connect } from 'react-redux';
import Album from '../Album/Album';
import { addToFavorites } from '../../actions/action-creator';
import { removedFromFavorites } from '../../actions/action-creator';
import { getAlbums } from './albumslist.selector';
import styles from './AlbumsList.css';
import List from '../List/List';
import Heading from '../Heading/Heading';

class AlbumsList extends Component {

  constructor(props, context) {
    super(props, context);
    this.addRemoveFavorites = this.addRemoveFavorites.bind(this);
  }

  /**
   * Function to add or remove favorite albums.
   * Dispatches action to store to add album or remove, if the album is already in favorites list.
   * */

  addRemoveFavorites(album) {
    !album.get('favorite') ? this.props.dispatch(addToFavorites(album.get('trackId'), album)) :
      this.props.dispatch(removedFromFavorites(album.get('trackId'), album));
  }

  render() {
    const { albums } = this.props;
    return (
      <div className={styles.wrapper}>
        <Heading text={'ALBUMS'}/>
        {albums.size ?
          <List className={styles.list}>
            {albums.map((album) => <Album album={album}
                                          onClick={() => this.addRemoveFavorites(album)} />)}
          </List> :
          <span className={styles.text}>No albums found.</span>}
      </div>
    );
  }
}

const mapStateToProps = state => getAlbums(state);
export default connect(mapStateToProps)(AlbumsList);
