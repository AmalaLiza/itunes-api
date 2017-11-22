import React, { Component } from 'react';
import styles from './Album.css';

class Album extends Component {
  render() {

    const { album, onClick } = this.props;

    return (
      <li className={styles.listItem}>
        <div className={styles.albumCover}
             onClick={onClick}
             style={{ backgroundImage: `url("${album.get('artworkUrl100')}")` }}>
          {!album.get('favorite') ?
            <img className={styles.favoriteIcon}
                 src='src/images/favorite.png' /> :
            <img className={styles.favorite}
                 src='src/images/favorite.png' />}
        </div>
        <span className={styles.albumName}>{album.get('trackName')}</span>
        <span className={styles.artist}>{album.get('artistName')}</span>
      </li>
    );
  }
}

Album.propTypes = {};
Album.defaultProps = {};

export default Album;
