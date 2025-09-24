// // src/context/BooksContext.tsx
// import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
// import axios from 'axios';

// export type Book = {
//   id: string;
//   title: string;
//   description: string;
//   cover: string;
// };

// interface BooksContextType {
//   books: Book[];
//   loading: boolean;
//   error: string | null;
// }

// const BooksContext = createContext<BooksContextType | null>(null);

// export const BooksProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//   const [books, setBooks] = useState<Book[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchBooks = async () => {
//       try {
//         // Assuming the local REST API endpoint is at http://localhost:3000/books
//         // Adjust the port if your backend runs on a different one (e.g., 5000 for Express)
//         const response = await axios.get<Book[]>('http://localhost:3000/books');
//         setBooks(response.data);
//         setError(null);
//       } catch (err) {
//         console.error('Error fetching books:', err);
//         setError('Failed to fetch books. Please check the API.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBooks();
//   }, []);

//   return (
//     <BooksContext.Provider value={{ books, loading, error }}>
//       {children}
//     </BooksContext.Provider>
//   );
// };

// export const useBooks = (): BooksContextType => {
//   const context = useContext(BooksContext);
//   if (context === null) {
//     throw new Error('useBooks must be used within a BooksProvider');
//   }
//   return context;
// };
