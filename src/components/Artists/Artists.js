import classNames from 'classnames';
import React, { Component } from 'react';
import styles from './Artists.css';

class ArtistDetails extends Component {
  render() {
    const { artists } = this.props;
    return (
      <ul className={styles.list}>
        {artists.map((album) => <li className={styles.listItem}>
          <div className={styles.artist}>{artists.get('name')[0]}</div>
          <div className={classNames(styles.listItemSinger, styles['text-ellipsis'])}>{artists.get('name')}</div>
        </li>)}
      </ul>
    );
  }
}

ArtistDetails.propTypes = {};
ArtistDetails.defaultProps = {};

export default ArtistDetails;
