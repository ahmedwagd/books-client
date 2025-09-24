export type Book = {
  id: string;
  title: string;
  description: string;
  cover: string;
};

export type BookFormData = Omit<Book, "id">;

// export interface BookContextType {
//   books: Book[];
//   loading: boolean;
//   error: string | null;
//   selectedBook: Book | null;
//   fetchBooks: (searchTerm: string) => Promise<void>;
//   fetchBookById: (bookId: string) => Promise<void>;
//   clearBooks: () => void;
//   setSelectedBook: (book: Book | null) => void;
// }

// export interface BookResponse {
//   items: Book[];
//   totalItems: number;
//   kind: string;
// }

export interface BookState {
  books: Book[];
  selectedBook: Book | null;
  loading: boolean;
  error: string | null;
}

export type BookAction =
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_ERROR"; payload: string | null }
  | { type: "SET_BOOKS"; payload: Book[] }
  | { type: "ADD_BOOK"; payload: Book }
  | { type: "UPDATE_BOOK"; payload: Book }
  | { type: "DELETE_BOOK"; payload: string }
  | { type: "SELECT_BOOK"; payload: Book | null };

export interface BookContextType {
  state: BookState;
  fetchBooks: () => Promise<void>;
  getBook: (id: string) => Promise<void>;
  createBook: (book: BookFormData) => Promise<void>;
  updateBook: (id: string, book: BookFormData) => Promise<void>;
  deleteBook: (id: string) => Promise<void>;
  selectBook: (book: Book | null) => void;
  clearError: () => void;
}
