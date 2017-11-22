import {
  ACTION_ADD_TO_FAVORITES,
  ACTION_HIDE_ERROR,
  ACTION_LOAD_ALBUMS,
  ACTION_LOAD_ALBUMS_ERROR,
  ACTION_LOAD_ALBUMS_SUCCESS,
  ACTION_REMOVE_FROM_FAVORITES,
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

export function addToFavorites(id, album) {
  return {
    type: ACTION_ADD_TO_FAVORITES,
    payload: { id, album },
  };
}

export function removedFromFavorites(id, album) {
  return {
    type: ACTION_REMOVE_FROM_FAVORITES,
    payload: { id, album },
  };
}


export function hideError() {
  return {
    type: ACTION_HIDE_ERROR,
  };
}
