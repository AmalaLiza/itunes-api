/**
 * selector to get get albums list and artist name
 * @param state
 * @returns {Object}
 */

export const getAlbums = state => ({
  albums: state.iTunesApi.get('albums'),
  artist: state.iTunesApi.get('artist'),
});

/**
 * selector to get error, favorites, artists
 * @param state
 * @returns {Object}
 */

export const selector = state => ({
  error: state.iTunesApi.get('error'),
  favorites: state.iTunesApi.get('favorites'),
  artists: state.iTunesApi.get('artists'),
});

