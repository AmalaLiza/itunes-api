import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBox extends Component {
  render() {
    return (
      <div>
        <input type={'search'} />
      </div>
    );
  }
}

SearchBox.propTypes = {};
SearchBox.defaultProps = {};

export default SearchBox;
