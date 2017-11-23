import { fromJS } from 'immutable';
import {
  ACTION_ADD_TO_FAVORITES,
  ACTION_HIDE_ERROR,
  ACTION_LOAD_ALBUMS_ERROR,
  ACTION_LOAD_ALBUMS_SUCCESS,
  ACTION_REMOVE_FROM_FAVORITES,
} from '../actions/actions-constants';

const initialState = fromJS({
  artist: {},
  albums: {},
  error: false,
  favorites: {},
  activeAlbum: {},
  artists: {},
});

export function albumsReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_LOAD_ALBUMS_SUCCESS:
      state = state.set('artist', fromJS(action.payload.artist));
      return state.set('albums', fromJS(action.payload.albums));

    case ACTION_ADD_TO_FAVORITES:
      state = state.updateIn(['albums', action.payload.id.toString(), 'favorite'], () => true);
      let artistId = action.payload.album.get('artistId') || action.payload.album.get('collectionArtistId');
      state = state.updateIn(['artists', artistId], () => fromJS({ name: action.payload.album.get('artistName') }));
      const favorite = action.payload.album.set('favorite', true);
      return state.setIn(['favorites', action.payload.id.toString()], fromJS(favorite));

    case ACTION_REMOVE_FROM_FAVORITES:
      state = state.updateIn(['albums', action.payload.id.toString(), 'favorite'], () => false);
      artistId = action.payload.album.get('artistId') || action.payload.album.get('collectionArtistId');
      state = state.deleteIn(['artists', artistId]);
      return state.deleteIn(['favorites', action.payload.id.toString()]);

    case ACTION_LOAD_ALBUMS_ERROR:
      return state.update('error', () => action.error);

    case ACTION_HIDE_ERROR:
      return state.update('error', () => false);

    default:
      return state;
  }
}
