export type Book = {
  id: string;
  title: string;
  description: string;
  cover: string;
};

export interface BookContextType {
  books: Book[];
  loading: boolean;
  error: string | null;
  selectedBook: Book | null;
  fetchBooks: (searchTerm: string) => Promise<void>;
  fetchBookById: (bookId: string) => Promise<void>;
  clearBooks: () => void;
  setSelectedBook: (book: Book | null) => void;
}

export interface BookResponse {
  items: Book[];
  totalItems: number;
  kind: string;
}
