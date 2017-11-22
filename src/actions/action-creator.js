import {
  ACTION_LOAD_ALBUMS,
  ACTION_LOAD_ALBUMS_SUCCESS,
  ACTION_LOAD_ALBUMS_ERROR,
  ACTION_LOAD_FORKS,
  ACTION_LOAD_FORKS_SUCCESS,
  ACTION_LOAD_FORKS_ERROR,
  ACTION_HIDE_ERROR,
} from './actions-constants';

export function loadAlbumsOfArtist(artistName) {
  return {
    type: ACTION_LOAD_ALBUMS,
    artistName,
  };
}

export function loadAlbumsOfArtistSuccess(albums = {}, artist = {}) {
  return {
    type: ACTION_LOAD_ALBUMS_SUCCESS,
    payload: {
      albums,
      artist,
    },
  };
}

export function loadAlbumsOfArtistError(error) {
  return {
    type: ACTION_LOAD_ALBUMS_ERROR,
    error,
  };
}

export function loadAllForks(url, id) {
  return {
    type: ACTION_LOAD_FORKS,
    payload: { url, id },
  };
}

export function loadForksSuccess(payload) {
  return {
    type: ACTION_LOAD_FORKS_SUCCESS,
    payload,
  };
}

export function loadForksError(error) {
  return {
    type: ACTION_LOAD_FORKS_ERROR,
    error,
  };
}

export function hideError() {
  return {
    type: ACTION_HIDE_ERROR,
  };
}