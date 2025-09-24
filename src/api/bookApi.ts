import type { Book, BookFormData } from "@/types";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_APP_API_URL;

// Create axios instance with base configuration
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Response interceptors for error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error);
    throw error;
  }
);

// API functions
export const bookApi = {
  // Get all books - adjust endpoint to match your API
  getAll: async (): Promise<Book[]> => {
    const response = await apiClient.get<Book[]>("/books");
    return response.data;
  },

  // Get single book by ID
  getById: async (id: string): Promise<Book> => {
    const response = await apiClient.get<Book>(`/books/${id}`);
    return response.data;
  },

  // Create new book
  create: async (book: BookFormData): Promise<Book> => {
    const response = await apiClient.post<Book>("/books", book);
    return response.data;
  },

  // Update existing book
  update: async (id: string, book: BookFormData): Promise<Book> => {
    const response = await apiClient.patch<Book>(`/books/${id}`, book);
    return response.data;
  },

  // Delete book
  delete: async (id: string): Promise<void> => {
    await apiClient.delete(`/books/${id}`);
  },
};

export default apiClient;
