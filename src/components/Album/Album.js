import React, { Component } from 'react';
import ListItem from '../List/ListItem/ListItem';
import styles from './Album.css';

/**
 * Component to render list of albums.
 * on click of album cover name, function to add to favorites or remove from favorites is called.
 **/

class Album extends Component {
  render() {
    const { album, onClick } = this.props;
    return (
      <ListItem className={styles.listItem}>
        <div className={styles.albumCover}
             onClick={onClick}
             style={{ backgroundImage: `url("${album.get('artworkUrl100')}")` }}>
          {!album.get('favorite') ?
            <img className={styles.favoriteIcon}
                 src='favorite.png' /> :
            <img className={styles.favorite}
                 src='favorite.png' />}
        </div>
        <span className={styles.albumName}>{
          album.get('trackName')}
          </span>
        <span className={styles.artist}>
          {album.get('artistName')}
          </span>
      </ListItem>
    );
  }
}

export default Album;
