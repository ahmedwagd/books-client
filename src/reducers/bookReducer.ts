import type { BookAction, BookState } from "@/types";

// Initial state
export const initialState: BookState = {
  books: [],
  selectedBook: null,
  loading: false,
  error: null,
};

// Reducer function
export const bookReducer = (
  state: BookState,
  action: BookAction
): BookState => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: action.payload };

    case "SET_ERROR":
      return { ...state, error: action.payload, loading: false };

    case "SET_BOOKS":
      return { ...state, books: action.payload, loading: false, error: null };

    case "ADD_BOOK":
      return { ...state, books: [...state.books, action.payload] };

    case "UPDATE_BOOK":
      return {
        ...state,
        books: state.books.map((book) =>
          book.id === action.payload.id ? action.payload : book
        ),
        selectedBook: state.selectedBook?.id === action.payload.id ? action.payload : state.selectedBook,
        loading: false,
      };

    case "DELETE_BOOK":
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      };

    case "SELECT_BOOK":
      return {
        ...state,
        selectedBook: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
