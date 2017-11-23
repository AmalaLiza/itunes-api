import React from 'react';
import PropTypes from 'prop-types';
import styles from './ErrorToast.css';

export default class ErrorToast extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  /**
   * Automatically hides error message after a 3000 ms.
   * */
  componentDidMount() {
    window.setTimeout(this.props.hideError, 3000);
  }

  render() {

    const { error } = this.props;

    return (
      <div className={styles.wrapper}>
        <span className={styles.error}>{error}</span>
      </div>
    );
  }
}

ErrorToast.propTypes = {
  /**
   * Function to hide error
   */
  hideError: PropTypes.func.isRequired,

  /**
   * Error value
   */
  error: PropTypes.string.isRequired,
};