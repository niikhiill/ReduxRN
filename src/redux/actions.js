import axios from 'axios';
import {BASE_URL} from '../config';

export const GET_BOOKS_SUCCESS = 'GET_BOOKS_SUCCESS';
export const ADD_TO_BOOKMARK_LIST = 'ADD_TO_BOOKMARK_LIST';
export const REMOVE_FROM_BOOKMARK_LIST = 'REMOVE_FROM_BOOKMARK_LIST';
export const GET_BOOKS_ERROR = 'GET_BOOKS_ERROR';

export const getBooks = () => {
  return function (dispatch) {
    axios
      .get(BASE_URL)
      .then((response) => {
        //response.data
        const books = response.data;
        dispatch(getBooksSuccess(books));
      })
      .catch((error) => {
        dispatch(getBooksError(error.message));
      });
  };
};

export const getBooksSuccess = (books) => {
  return {
    type: GET_BOOKS_SUCCESS,
    payload: books,
  };
};

export const getBooksError = (error) => {
  return {
    type: GET_BOOKS_ERROR,
    payload: error,
  };
};

export const addBookmark = (book) => (dispatch) => {
  dispatch({
    type: ADD_TO_BOOKMARK_LIST,
    payload: book,
  });
};

export const removeBookmark = (book) => (dispatch) => {
  dispatch({
    type: REMOVE_FROM_BOOKMARK_LIST,
    payload: book,
  });
};
