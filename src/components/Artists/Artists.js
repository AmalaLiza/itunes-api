import classNames from 'classnames';
import React, { Component } from 'react';
import ListItem from '../List/ListItem/ListItem';
import List from '../List/List';
import styles from './Artists.css';

/**
 * Component to render list of artists.
 * on click of artist name, function to filter favorites by artist name is called.
 **/

class Artists extends Component {
  render() {
    const { artists, onClick } = this.props;
    return (
      <List className={styles.list}>
        {artists.map((artist) => <ListItem className={styles.listItem}
                                     onClick={() => onClick(artist)}>
          <div className={styles.artist}>
            <span className={styles.letter}>
            {artist.get('name')[0]}
          </span>
          </div>
          <div className={classNames(styles.listItemSinger, styles['text-ellipsis'])}>{artist.get('name')}</div>
        </ListItem>)}
      </List>
    );
  }
}

export default Artists;
