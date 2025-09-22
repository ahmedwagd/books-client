import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/home.tsx";
import "./index.css";
import BooksPage from "./pages/books.tsx";
import MainLayout from "./layouts/mainLayout.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" index element={<HomePage />} />
        <Route path="/books" element={<BooksPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
