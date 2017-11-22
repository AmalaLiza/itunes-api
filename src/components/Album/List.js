import React, { Component } from 'react';
import * as ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styles from './Album.css';
import { getTag } from './Album';
import Tag from '../Tag/Tag';

class List extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      showList: '',
    };
    this.hideAllLists = this.hideAllLists.bind(this);
    this.showList = this.showList.bind(this);
  }

  /**
   * Function to handle Off click.
   **/
  hideAllLists(e) {
    const domNode = ReactDOM.findDOMNode(this);
    if (!domNode || !domNode.contains(e.target)) {
      this.setState({ showList: '' });
    }
  }

  /**
   * Function to show and hide list items.
   **/
  showList(e) {
    if (this.state.showList !== this.props.gist.get('id'))
      this.setState({ showList: this.props.gist.get('id') });
    else
      this.setState({ showList: '' });
    e.stopPropagation();
  }

  componentDidMount() {
    //Binds click action to component.
    document.addEventListener('click', this.hideAllLists, false);
  }

  componentWillUnmount() {
    //Unbinds click action from. component
    document.removeEventListener('click', this.hideAllLists, false);
  }

  render() {

    const { gist } = this.props;

    return <div className={styles.extraTags}>
      <span className={styles.extra}
            onClick={this.showList}>
        +{gist.get('files').size - 3}
      </span>

      {gist.get('id') === this.state.showList ? <div className={styles.list}>

        {gist.get('files').toArray().map((file, index) => {
          if (index >= 3)
            return <Tag key={index}
                        value={file.get('language') && file.get('language').length ?
                          file.get('language') : getTag(file.get('type'))}>
            </Tag>;
        })}

      </div> : null}
    </div>;
  }
}

List.propTypes = {
  /**
   * Data to load gist component
   */
  gist: PropTypes.object.isRequired,

};

export default List;
