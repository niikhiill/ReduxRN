import * as actions from './actions';

const initialState = {
  books: [],
  bookmarks: [],
  notes: [],
  bookerror: '',
};

function booksReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_BOOKS_SUCCESS:
      return {...state, books: action.payload};
    case actions.GET_BOOKS_ERROR:
      return {...state, bookerror: action.payload};
    case actions.ADD_TO_BOOKMARK_LIST:
      return {...state, bookmarks: [...state.bookmarks, action.payload]};
    case actions.REMOVE_FROM_BOOKMARK_LIST:
      return {
        ...state,
        bookmarks: state.bookmarks.filter(
          (book) => book.id !== action.payload.id,
        ),
      };
    default:
      return state;
  }
}

export default booksReducer;
