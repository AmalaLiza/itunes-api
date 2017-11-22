import { fromJS } from 'immutable';
import {
  ACTION_LOAD_ALBUMS_SUCCESS,
  ACTION_ADD_TO_FAVORITES,
  ACTION_REMOVE_FROM_FAVORITES,
  ACTION_HIDE_ERROR,
} from '../actions/actions-constants';

const initialState = fromJS({
  artist: {},
  albums: {},
  error: false,
  favorites: {},
});

export function albumsReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_LOAD_ALBUMS_SUCCESS:
      state = state.set('artist', fromJS(action.payload.artist));
      return state.set('albums', fromJS(action.payload.albums));

    case ACTION_ADD_TO_FAVORITES:
      state = state.updateIn(['albums', action.payload.id.toString(), 'favorite'], () => true);
      return state.setIn(['favorites', action.payload.id.toString()], fromJS(action.payload));

    case ACTION_REMOVE_FROM_FAVORITES:
      state = state.updateIn(['albums', action.payload.id.toString(), 'favorite'], () => false);
      return state.deleteIn(['favorites', action.payload.id.toString()]);

    case ACTION_HIDE_ERROR:
      return state.update('error', () => false);

    default:
      return state;
  }
}
