import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hideError } from '../../actions/action-creator';
import { loadAlbumsOfArtist } from '../../actions/action-creator';
import AlbumsList from '../../components/AlbumsList/AlbumsList';
import { selector } from '../../components/AlbumsList/albumslist.selector';
import ErrorPopup from '../../components/ErrorToast/ErrorToast';
import Favorites from '../../components/Favorites/Favorites';
import Heading from '../../components/Heading/Heading';
import SearchBox from '../../components/SearchBox/SearchBox';
import '../../global.css';
import styles from './App.css';

/**
 * Stateless component Background,
 * just to render background image and it's styles.
 * */

const BackGround = ({ className }) => <div className={className}>
</div>;

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      artist: '',
    };
    this.hideError = this.hideError.bind(this);
    this.loadAlbums = this.loadAlbums.bind(this);
    this.filterFavorites = this.filterFavorites.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.favorites.size !== nextProps.favorites.size)
      this.setState({ artist: '' });
  }

  /**
   * Function to load albums of the searched value.
   * Dispatches action to store to load albums of that particular artist.
   * */

  loadAlbums(value) {
    this.props.dispatch(loadAlbumsOfArtist(value));
  }

  /**
   * Function to hide error component.
   * Dispatches action to store to hide error.
   * */

  hideError() {
    this.props.dispatch(hideError());
  }

  /**
   * Function to filter favorites by artist name.
   * Sets the state the currently clicked artist name.
   * */

  filterFavorites(artist) {
    this.setState({ artist: artist.get('name') });
  }

  render() {

    const { favorites, artists } = this.props;
    const { artist } = this.state;

    return (
      <div className={styles.appWrapper}>

        <BackGround className={styles.appBackground} />

        <div className={styles.appContainer}>

          <SearchBox onEnter={this.loadAlbums} />

          {/** Component to render all the list of albums. */}

          <AlbumsList />

          {favorites && favorites.size > 0 && <Heading text={'FAVORITES'} className={styles.favHeading}/>}

          {/** Component to render all the list of favorite albums and it's details. */}

          {favorites && favorites.size > 0 && <Favorites favorites={favorites}
                                                         artist={artist}
                                                         artistOnClick={this.filterFavorites}
                                                         artists={artists} />}
          {/** Error when no albums are found. */}

          {this.props.error ? <ErrorPopup error={this.props.error}
                                          hideError={this.hideError} /> : null}

        </div>
      </div>
    );
  }
}

const mapStateToProps = state => selector(state);
export default connect(mapStateToProps)(App);

App.propTypes = {
  artist: PropTypes.object,
  favorites: PropTypes.object,
};
