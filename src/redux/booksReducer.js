import * as actions from './actions';

const initialState = {
  books: [],
  bookmarks: [],
  // notes: [],
  bookerror: '',
  page: 1,
  note: '',
};

function booksReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_BOOKS_SUCCESS:
      return {...state, books: [...state.books, ...action.payload]};
    case actions.GET_BOOKS_ERROR:
      return {...state, bookerror: [...state.bookerror, ...action.payload]};
    case actions.ADD_TO_BOOKMARK_LIST:
      return {...state, bookmarks: [...state.bookmarks, action.payload]};
    case actions.REMOVE_FROM_BOOKMARK_LIST:
      return {
        ...state,
        bookmarks: state.bookmarks.filter(
          (book) => book.id !== action.payload.id,
        ),
      };
    case actions.ADD_NOTE:
      return {...state, note: action.payload};

    default:
      return state;
  }
}

export default booksReducer;
