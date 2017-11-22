import loadAlbums from './sagas/loadAlbums.saga';
import loadForks from './sagas/loadForks.saga';

/**
 * Exporting all sagas used for the applications.
 * * */

export default [
  loadAlbums,
  loadForks,
];
