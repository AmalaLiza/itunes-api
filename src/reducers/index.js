import { combineReducers } from 'redux';
import { albumsReducer } from './albumsReducer';

export default function createReducer(asyncReducers) {
  const appReducer = combineReducers({
    iTunesApi: albumsReducer,
    // write synchronous reducers above this line
    ...asyncReducers,
  });

  return (state, action) => appReducer(state, action);
}
