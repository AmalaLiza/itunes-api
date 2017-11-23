import PropTypes from 'prop-types';
import React from 'react';

const List = ({ children, onClick, className }) => (
  <ul className={className}
      onClick={onClick}>
    {children}
  </ul>
);

List.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default List;
