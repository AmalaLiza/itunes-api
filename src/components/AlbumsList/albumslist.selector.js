
export const selectAlbums = state => ({
  albums: state.iTunesApi.get('albums'),
  artist: state.iTunesApi.get('artist'),
});

export const getError = state => ({
  error: state.iTunesApi.get('error'),
});
