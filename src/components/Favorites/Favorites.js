import classNames from 'classnames';
import React, { Component } from 'react';
import Artists from '../Artists/Artists';
import styles from './Favorites.css';

class Favorites extends Component {
  render() {
    const { favorites, artists } = this.props;

    return (
      <div className={styles.wrapper}>
        <div>
          <h2 className={styles.heading}>FAVORITES</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <div className={styles.listItemImage}>
              </div>
              <div className={styles.listItemTitle}>Title</div>
              <div className={styles.listItemSinger}>Singer</div>
            </li>
            {favorites.map((album) => <li className={styles.listItem}>
              <div className={styles.listItemImage}
                   style={{ backgroundImage: `url("${album.get('artworkUrl100')}")` }}>
              </div>
              <div className={classNames(styles.listItemTitle, styles['text-ellipsis'])}>{album.get('artistName')}</div>
              <div className={classNames(styles.listItemSinger, styles['text-ellipsis'])}>{album.get('trackName')}</div>
            </li>)}
          </ul>
        </div>
        <div className={styles.artistWrapper}>
          <h2 className={styles.heading}>ARTISTS</h2>
          {artists && artists.size > 0 && <Artists artists={artists} />}
        </div>
      </div>
    );
  }
}

Favorites.propTypes = {};
Favorites.defaultProps = {};

export default Favorites;
