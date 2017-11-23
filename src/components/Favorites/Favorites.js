import classNames from 'classnames';
import React, { Component } from 'react';
import Artists from '../Artists/Artists';
import Heading from '../Heading/Heading';
import List from '../List/List';
import ListItem from '../List/ListItem/ListItem';
import styles from './Favorites.css';

const Header = () => <div className={styles.listItem}>
  <div className={styles.listItemImage}>
  </div>
  <div className={styles.listItemTitle}>Title</div>
  <div className={styles.listItemSinger}>Singer</div>
</div>;

class Favorites extends Component {
  render() {
    const { favorites, artists, artistOnClick, artist } = this.props;

    return (
      <div className={styles.wrapper}>
        <div>

          <Heading text={`Songs (${favorites.size})`} />
          <Header />

          <List className={styles.list}>

            {favorites
              .filter((album) => artist === '' ? true : album.get('artistName') === artist)
              .map((album) =>
                (<ListItem className={styles.listItem}>

                  <div className={styles.listItemImage}
                       style={{ backgroundImage: `url("${album.get('artworkUrl100')}")` }}>
                  </div>
                  <div className={classNames(styles.listItemTitle, styles['text-ellipsis'])}>
                    {album.get('artistName')}
                  </div>
                  <div className={classNames(styles.listItemSinger, styles['text-ellipsis'])}>
                    {album.get('trackName')}
                  </div>
                </ListItem>))}
          </List>
        </div>

        <div className={styles.artistWrapper}>
          <Heading text={`Artists (${artists.size})`} />
          {artists && artists.size > 0 && <Artists artists={artists}
                                                   onClick={artistOnClick} />}
        </div>

      </div>
    );
  }
}

export default Favorites;
