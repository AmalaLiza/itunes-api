import React, { Component } from 'react';
import styles from './ArtistDetails.css';
import Avatar from '../Avatar/Avatar';

class ArtistDetails extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { artist } = this.props;

    return (<div className={styles.userDetails}>

      <Avatar
        className={styles.avatar}
        src={artist.get('img_url')} />

      <div className={styles.detailsWrapper}>
        <div className={styles.properties}>
          <span>Name : </span>
          <span className={styles.value}>{artist.get('name')}</span>
        </div>
        <div>
          <span>User URL : </span>
          <span
            className={`${styles.value} url`}
            onClick={() => window.open(artist.get('img_url'))}>{artist.get('img_url')}</span>
        </div>
      </div>
    </div>);
  }
}

ArtistDetails.propTypes = {};
ArtistDetails.defaultProps = {};

export default ArtistDetails;
