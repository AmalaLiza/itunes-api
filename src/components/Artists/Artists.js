import classNames from 'classnames';
import React, { Component } from 'react';
import styles from './Artists.css';

class Artists extends Component {
  render() {
    const { artists, onClick } = this.props;
    return (
      <ul className={styles.list}>
        {artists.map((artist) => <li className={styles.listItem}
                                     onClick={() => onClick(artist)}>
          <div className={styles.artist}>
            <span className={styles.letter}>
            {artist.get('name')[0]}
          </span>
          </div>
          <div className={classNames(styles.listItemSinger, styles['text-ellipsis'])}>{artist.get('name')}</div>
        </li>)}
      </ul>
    );
  }
}

Artists.propTypes = {};
Artists.defaultProps = {};

export default Artists;
