import { createContext, useContext, useState } from "react";
import axios from "axios";
import type { Book, BookContextType } from "../types";

const API_BASE_URL = "https://localhost:3030/api/v1/books";

export const BooksContext = createContext<BookContextType | undefined>(
  undefined
);

// Custom hook to use book context
export const useBooks = (): BookContextType => {
  const context = useContext(BooksContext);
  if (!context) {
    throw new Error("useBooks must be used within a BooksProvider");
  }
  return context;
};

// provider

export const BooksProvider = ({ children }: { children: React.ReactNode }) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  // Fetch books by search term
  const fetchBooks = async (searchTerm: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `${API_BASE_URL}?q=${searchTerm}&maxResults=20`
      );
      setBooks(response.data.items || []);
    } catch (err) {
      setError(
        (err instanceof Error
          ? err.message
          : "Failed to fetch books") as unknown as null
      );
      setBooks([]);
    } finally {
      setLoading(false);
    }
  };
  // Fetch single book by ID
  const fetchBookById = async (bookId: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`${API_BASE_URL}/books/${bookId}`);
      setSelectedBook(response.data);
    } catch (err) {
      setError(
        (err instanceof Error
          ? err.message
          : "Failed to fetch book details") as unknown as null
      );
    } finally {
      setLoading(false);
    }
  };

  // Clear books
  const clearBooks = () => {
    setBooks([]);
    setError(null);
  };

  const initial: BookContextType = {
    books,
    loading,
    error,
    selectedBook,
    fetchBooks,
    fetchBookById,
    clearBooks,
    setSelectedBook,
  };
  //   return (
  //     <BooksContext.Provider value={initial}>{children}</BooksContext.Provider>
  //   );
};
