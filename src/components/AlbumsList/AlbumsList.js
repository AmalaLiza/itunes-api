/* eslint-disable react/prop-types,react/prefer-stateless-function,
no-useless-constructor,react/no-unused-prop-types,react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Album from '../Album/Album';
import ArtistDetails from '../ArtistDetails/ArtistDetails';
import TextField from '../TextField/TextField';
import { loadAlbumsOfArtist } from '../../actions/action-creator';
import { selectAlbums } from './albumslist.selector';
import styles from './AlbumsList.css';

const AlbumCount = ({ count }) => (<div className={`${styles.AlbumCount} bold`}>
  <h3 className={styles.AlbumCountHeading}>AlbumS ({count})</h3>
</div>);

const AlbumWrapper = ({ className, children }) => (<div className={className}>
  {children}
</div>);

const AlbumsListWrapper = ({ children, className }) => (<div className={className}>
  {children}
</div>);

class AlbumsList extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { albums, artist } = this.props;

    return (<AlbumsListWrapper className={styles.wrapper}>
      <div className={styles.searchBoxWrapper}>
        <span className={styles.searchHint}>Search albums by typing artist name and hit enter</span>
        <TextField
          type="text"
          className={styles.searchBox}
          onEnter={value => this.props.dispatch(loadAlbumsOfArtist(value))} />
      </div>

      {albums.size ? <ArtistDetails artist={artist} /> : null}
      {albums.size ? <AlbumCount count={albums.size} /> : null}

      <AlbumWrapper className={styles.gistWrapper}>
        {albums
          .map(album => (<Album
            key={album.get('trackId')}
            album={album} />))}

      </AlbumWrapper>

    </AlbumsListWrapper>);
  }
}

AlbumsList.propTypes = {
  /**
   * Data to load Albums components
   */
  albums: PropTypes.object,

  /**
   * Data to load user details
   */
  atrist: PropTypes.object,
};

const mapStateToProps = state => selectAlbums(state);
export default connect(mapStateToProps)(AlbumsList);