import React from 'react';
import PropTypes from 'prop-types';
import styles from './Album.css';
import { getDate } from '../../utils';

const GistDetails = ({ album, className }) => (<div className={className}>
  <div>
    <span className={styles.label}>Track Name</span>
    <span className={styles.value}>{album.get('trackName')}</span>
  </div>

  <div>
    <span className={styles.label}>Collection Name : </span>
    <span
      className={styles.value}>{album.get('collectionName')}</span>
  </div>

  <div>
    <span className={styles.label}>Preview URL :</span>
    <span
      onClick={() => window.open(album.get('previewUrl'))}> {album.get('previewUrl')}</span>
  </div>
</div>);

export default GistDetails;

GistDetails.propTypes = {

  /**
   * class name for component
   * */
  className: PropTypes.string.isRequired,

  /**
   * gist object
   * */
  album: PropTypes.object.isRequired,
};
