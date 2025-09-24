import AddBookSheet from "@/components/AddBookSheet";
import BookCard from "@/components/BookCard";
import { useBookContext } from "@/context/BookContext";
import { useEffect } from "react";

function BooksPage() {
  const { state, fetchBooks } = useBookContext();
  // const [showForm, setShowForm] = useState(false);
  // const [searchTerm, setSearchTerm] = useState("");

  // Fix: Add proper dependencies and cleanup
  useEffect(() => {
    let isMounted = true;

    const loadBooks = async () => {
      try {
        if (isMounted) {
          await fetchBooks();
        }
      } catch (error) {
        console.error("Failed to load books:", error);
      }
    };

    loadBooks();

    return () => {
      isMounted = false;
    };
  }, [fetchBooks]); // Only depend on fetchBooks which is now memoized

  // const filteredBooks = state.books.filter(
  //   (book) =>
  //     book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     book.description.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  return (
    // <BookProvider>
    <section className="lg:grid">
      <div className="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto text-center ">
          <h1 className="text-4xl sm:text-5xl">
            <span className="font-bold bg-gradient-to-r from-blue-600 via-purple-500  to-indigo-400 inline-block text-transparent bg-clip-text">
              Books List
            </span>
          </h1>
          <div className="mt-8">
            <AddBookSheet />
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {state.books.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              // onDelete={handleDelete}
              // onSelect={selectBook}
            />
          ))}
        </div>
      </div>
    </section>
    //{" "}
    // </BookProvider>
  );
}

export default BooksPage;
