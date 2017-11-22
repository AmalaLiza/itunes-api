import { fromJS } from 'immutable';
import {
  ACTION_LOAD_ALBUMS_SUCCESS,
  ACTION_LOAD_FORKS_SUCCESS,
  ACTION_LOAD_ALBUMS_ERROR,
  ACTION_HIDE_ERROR,
} from '../actions/actions-constants';

const initialState = fromJS({
  artist: {},
  albums: {},
  error: false,
});

export function albumsReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_LOAD_ALBUMS_SUCCESS:
      const newState = state.set('artist', fromJS(action.payload.artist));
      return newState.set('albums', fromJS(action.payload.albums));

    case ACTION_LOAD_FORKS_SUCCESS:
      const sortedForks = action.payload.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
      sortedForks.splice(3, sortedForks.length - 3);
      return state.updateIn(['publicGists', action.payload.gistId, 'forks'], () => fromJS(sortedForks));

    case ACTION_LOAD_ALBUMS_ERROR:
      return state.update('error', () => fromJS(action.error));

    case ACTION_HIDE_ERROR:
      return state.update('error', () => false);

    default:
      return state;
  }
}
