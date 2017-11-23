import classNames from 'classnames';
import React, { Component } from 'react';
import List from '../List/List';
import ListItem from '../List/ListItem/ListItem';
import styles from './Artists.css';

/**
 * Component to render list of artists.
 * on click of artist name, function to filter favorites by artist name is called.
 **/

class Artists extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      selected: '',
    };
  }

  onClick(artist) {
    this.props.onClick(artist);
    this.setState({ selected: artist.get('name') });
  }

  render() {
    const { artists } = this.props;
    const { selected } = this.state;
    return (
      <List className={styles.list}>
        {artists.map((artist) => <ListItem
          className={classNames(styles.listItem, { [styles.selected]: selected === artist.get('name') })}
          onClick={() => this.onClick(artist)}>
          <div className={styles.artist}>
          </div>
          <div className={classNames(styles.listItemSinger, styles['text-ellipsis'])}>{artist.get('name')}</div>
        </ListItem>)}
      </List>
    );
  }
}

export default Artists;
