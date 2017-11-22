import React, { Component } from 'react';
import { connect } from 'react-redux';
import ErrorPopup from '../../components/ErrorPopup/ErrorPopup';
import AlbumsList from '../../components/AlbumsList/AlbumsList';
import { getError } from '../../components/AlbumsList/albumslist.selector';
import { hideError } from '../../actions/action-creator';
import styles from './App.css';
import '../../global.css';

class App extends Component {

  constructor(props, context) {
    super(props, context);
    this.hideError = this.hideError.bind(this);
  }

  /**
   * Function to hide error component
   * It dispatches action to store to hide error.
   **/

  hideError() {
    this.props.dispatch(hideError());
  }

  render() {

    return (
      <div>
        <div className={styles.background}></div>
        <AlbumsList />
        {this.props.error ? <ErrorPopup error={this.props.error}
                                        hideError={this.hideError} /> : null}
      </div>
    );
  }
}

const mapStateToProps = state => getError(state);

export default connect(mapStateToProps)(App);