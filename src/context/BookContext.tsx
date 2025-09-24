import React, {
  createContext,
  useContext,
  useReducer,
  useCallback,
} from "react";
import { bookApi } from "../api/bookApi";
import { bookReducer, initialState } from "../reducers/bookReducer";
import type { BookContextType, BookFormData, BookState } from "@/types";

// Create context
const BookContext = createContext<BookContextType | undefined>(undefined);

// Provider component props
interface BookProviderProps {
  children: React.ReactNode;
}

// Custom hook for error handling
const useBookErrorHandler = () => {
  const handleError = useCallback((error: unknown): string => {
    if (error instanceof Error) {
      return error.message;
    }
    return "An unexpected error occurred";
  }, []);

  return { handleError };
};

// Provider component
export const BookProvider: React.FC<BookProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(bookReducer, initialState);
  const { handleError } = useBookErrorHandler();

  // Action creators
  const setLoading = useCallback(
    (loading: boolean) => dispatch({ type: "SET_LOADING", payload: loading }),
    []
  );

  const setError = useCallback(
    (error: string | null) => dispatch({ type: "SET_ERROR", payload: error }),
    []
  );

  const setBooks = useCallback(
    (books: BookState["books"]) =>
      dispatch({ type: "SET_BOOKS", payload: books }),
    []
  );

  const addBook = useCallback(
    (book: BookState["books"][0]) =>
      dispatch({ type: "ADD_BOOK", payload: book }),
    []
  );

  const updateBookInState = useCallback(
    (book: BookState["books"][0]) =>
      dispatch({ type: "UPDATE_BOOK", payload: book }),
    []
  );

  const deleteBookFromState = useCallback(
    (id: string) => dispatch({ type: "DELETE_BOOK", payload: id }),
    []
  );

  const selectBook = useCallback(
    (book: BookState["selectedBook"]) =>
      dispatch({ type: "SELECT_BOOK", payload: book }),
    []
  );

  // Business logic functions with useCallback to prevent re-renders
  const fetchBooks = useCallback(async (): Promise<void> => {
    setLoading(true);
    try {
      const books = await bookApi.getAll();
      setBooks(books);
    } catch (error) {
      setError(handleError(error));
    }
  }, [setLoading, setBooks, setError, handleError]);

  const getBook = useCallback(
    async (id: string): Promise<void> => {
      setLoading(true);
      try {
        const book = await bookApi.getById(id);
        dispatch({ type: "SELECT_BOOK", payload: book }); // This should set selectedBook
      } catch (error) {
        setError(handleError(error));
      }
    },
    [setLoading, setError, handleError]
  );

  const createBook = useCallback(
    async (bookData: BookFormData): Promise<void> => {
      setLoading(true);
      try {
        const newBook = await bookApi.create(bookData);
        addBook(newBook);
      } catch (error) {
        const message = handleError(error);
        setError(message);
        throw new Error(message);
      }
    },
    [setLoading, addBook, setError, handleError]
  );

  const updateBook = useCallback(
    async (id: string, bookData: BookFormData): Promise<void> => {
      setLoading(true);
      try {
        const updatedBook = await bookApi.update(id, bookData);
        updateBookInState(updatedBook);
      } catch (error) {
        const message = handleError(error);
        setError(message);
        throw new Error(message);
      }
    },
    [setLoading, updateBookInState, setError, handleError]
  );

  const deleteBook = useCallback(
    async (id: string): Promise<void> => {
      setLoading(true);
      try {
        await bookApi.delete(id);
        deleteBookFromState(id);
      } catch (error) {
        const message = handleError(error);
        setError(message);
        throw new Error(message);
      }
    },
    [setLoading, deleteBookFromState, setError, handleError]
  );

  const clearError = useCallback((): void => {
    setError(null);
  }, [setError]);

  const contextValue: BookContextType = {
    state,
    fetchBooks,
    getBook,
    createBook,
    updateBook,
    deleteBook,
    selectBook,
    clearError,
  };

  return (
    <BookContext.Provider value={contextValue}>{children}</BookContext.Provider>
  );
};

// Custom hook to use the book context
export const useBookContext = (): BookContextType => {
  const context = useContext(BookContext);
  if (context === undefined) {
    throw new Error("useBookContext must be used within a BookProvider");
  }
  return context;
};
