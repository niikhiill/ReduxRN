import * as actions from './actions';
import produce from 'immer';

const initialState = {
  books: [],
  bookmarks: [],
  // notes: [],
  bookerror: '',
  page: 1,
  note: '',
  comments: [
    {
      id: null,
      comment: '',
    },
  ],
};

function booksReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_BOOKS_SUCCESS:
      return produce(state, (draft) => {
        draft.books.push(...action.payload);
      });
    // return {...state, books: [...state.books, ...action.payload]};
    case actions.GET_BOOKS_ERROR:
      return produce(state, (draft) => {
        draft.bookerror = action.payload;
      });
    // return {...state, bookerror: [...state.bookerror, ...action.payload]};
    case actions.ADD_TO_BOOKMARK_LIST:
      return produce(state, (draft) => {
        draft.bookmarks.push(action.payload);
      });
    // return {...state, bookmarks: [...state.bookmarks, action.payload]};
    case actions.REMOVE_FROM_BOOKMARK_LIST:
      // return {
      //   ...state,
      //   bookmarks: state.bookmarks.filter(
      //     (book) => book.id !== action.payload.id,
      //   ),
      // };
      return produce(state, (draft) => {
        const index = draft.bookmarks.findIndex(
          (book) => book.id === action.payload.id,
        );
        draft.bookmarks.splice(index, 1);
      });

    case actions.ADD_NOTE:
      // return {...state, note: action.payload};
      return produce(state, (draft) => {
        draft.comments.push({id: action.id, comment: action.comments});
      });

    default:
      return state;
  }
}

export default booksReducer;
