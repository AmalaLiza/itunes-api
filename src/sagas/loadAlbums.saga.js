import { call, take, put } from 'redux-saga/effects';
import request from '../request';
import { normalizeItems } from '../utils';
import {
  loadAlbumsOfArtistSuccess,
  loadAlbumsOfArtistError,
} from '../actions/action-creator';
import {
  BASE_URL,
  ACTION_LOAD_ALBUMS,
} from '../actions/actions-constants';

/**
 * Makes GET request
 * @returns {*}
 */

export function* loadAlbumsOfArtist(action) {
  try {
    const URL_LOAD_PUBLIC_GISTS = `${BASE_URL}/search?term=${action.artistName.replace(' ', '+')}`;
    const response = yield call(request, URL_LOAD_PUBLIC_GISTS, { method: 'GET' });

    if (response && response.results.length === 0) {
      yield put(loadAlbumsOfArtistError('No Albums Found'));
      yield put(loadAlbumsOfArtistSuccess());
    } else {
      const artist = {
        name: response.results[0].artistName,
        img_url: response.results[0].artistViewUrl,
      };
      response.results.map((album) => {
        album.favorite = false;
        return album;
      });

      yield put(loadAlbumsOfArtistSuccess(normalizeItems(response.results, 'trackId'), artist));
    }
  } catch (error) {
    yield put(loadAlbumsOfArtistError('Error in fetching albums'));
    yield put(loadAlbumsOfArtistSuccess());
  }
}

/**
 * Manages watcher lifecycle
 */

export default function* loadAlbumsOfArtistSaga() {
  while (true) {
    const action = yield take(ACTION_LOAD_ALBUMS);
    yield call(loadAlbumsOfArtist, action);
  }
}
