import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hideError } from '../../actions/action-creator';
import { loadAlbumsOfArtist } from '../../actions/action-creator';
import AlbumDetails from '../../components/AlbumDetails/AlbumDetails';
import AlbumsList from '../../components/AlbumsList/AlbumsList';
import { selector } from '../../components/AlbumsList/albumslist.selector';
import ErrorPopup from '../../components/ErrorPopup/ErrorPopup';
import Favorites from '../../components/Favorites/Favorites';
import SearchBox from '../../components/SearchBox/SearchBox';
import '../../global.css';
import styles from './App.css';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.hideError = this.hideError.bind(this);
  }

  /**
   * Function to hide error component
   * It dispatches action to store to hide error.
   * */

  hideError() {
    this.props.dispatch(hideError());
  }

  render() {

    const { activeAlbum, favorites, artists } = this.props;

    return (
      <div className={styles.appWrapper}>
        <div className={styles.appBackground}>
        </div>
        <div className={styles.appContainer}>
          <SearchBox onEnter={value => this.props.dispatch(loadAlbumsOfArtist(value))} />
          <AlbumsList />
          {favorites && favorites.size > 0 && <Favorites favorites={favorites}
                                                         artists={artists} />}
          {this.props.error ? <ErrorPopup
            error={this.props.error}
            hideError={this.hideError} /> : null}

        </div>
      </div>
    );
  }
}

const mapStateToProps = state => selector(state);
export default connect(mapStateToProps)(App);
