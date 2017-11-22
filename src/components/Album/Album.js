import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AlbumDetails from './AlbumDetails';
import { selectAlbums } from '../AlbumsList/albumslist.selector';
import styles from './Album.css';

/**
 * Function to get tag from file type
 * @param type
 * @return string
 * if file type is plain/text, tag will be TEXT
 * if file type is application/javascript, tag will be JAVASCRIPT
 * if file type is application/python, tag will be PYTHON
 * */

export const getTag = (type) => {
  const tag = type.split('/')[1];
  if (tag === 'plain') { return 'text'; }
  return tag;
};

class Album extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      albumHovered: false,
    };
  }

  render() {
    const { album } = this.props;

    return (<div>
      <img
        className={styles.gist}
        src={album.get('artworkUrl100')} />
      <AlbumDetails className={styles.detailsContainer} album={album} />
    </div>);
  }
}

Album.propTypes = {
  /**
   * Data to load Album component
   */
  Album: PropTypes.object.isRequired,
};

const mapStateToProps = state => selectAlbums(state);

export default connect(mapStateToProps)(Album);
