import React from 'react';
import styles from './AlbumDetails.css';

const AlbumDetails = ({ activeAlbum }) => (
  <div className={styles.details}>
    <div className={styles.albumCover}
         style={{ backgroundImage: `url("${activeAlbum.get('artworkUrl100')}")` }}>
    </div>
    <div className={styles.albumDetails}>
      <div>
        <span className={styles.title}>{activeAlbum.get('trackName')}: </span>
        <span className={styles.value}>{activeAlbum.get('trackName')}</span>
      </div>
      <div>
        <span className={styles.title}>{activeAlbum.get('artistName')}: </span>
        <span className={styles.value}>{activeAlbum.get('artistName')}</span>
      </div>
      <div>
        <span className={styles.title}>{activeAlbum.get('artistName')}: </span>
        <span className={styles.value}>{activeAlbum.get('artistName')}</span>
      </div>
      <div>
        <span className={styles.title}>{activeAlbum.get('artistName')}: </span>
        <span className={styles.value}>{activeAlbum.get('artistName')}</span>
      </div>
      <div>
        <span className={styles.title}>{activeAlbum.get('artistName')}: </span>
        <span className={styles.value}>{activeAlbum.get('artistName')}</span>
      </div>
      <div>
        <span className={styles.title}>{activeAlbum.get('artistName')}: </span>
        <span className={styles.value}>{activeAlbum.get('artistName')}</span>
      </div>
    </div>
  </div>
);

AlbumDetails.propTypes = {};
AlbumDetails.defaultProps = {};

export default AlbumDetails;
