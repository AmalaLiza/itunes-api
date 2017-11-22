export const getAlbums = state => ({
  albums: state.iTunesApi.get('albums'),
  artist: state.iTunesApi.get('artist'),
});

export const selector = state => ({
  error: state.iTunesApi.get('error'),
  activeAlbum: state.iTunesApi.get('activeAlbum'),
  favorites: state.iTunesApi.get('favorites'),
  artists: state.iTunesApi.get('artists'),
});

