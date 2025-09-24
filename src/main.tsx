import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/home.tsx";
import "./index.css";
import BooksPage from "./pages/books.tsx";
import MainLayout from "./layouts/mainLayout.tsx";
import BookPage from "./pages/bookPage.tsx";
import { BookProvider } from "./context/BookContext.tsx";

createRoot(document.getElementById("root")!).render(
  <BookProvider>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" index element={<HomePage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/books/:id" element={<BookPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </BookProvider>
);
