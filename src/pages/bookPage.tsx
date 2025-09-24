import EditBookSheet from "@/components/EditBookSheet";
import { Button } from "@/components/ui/button";
import { useBookContext } from "@/context/BookContext";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";

function BookPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { state, getBook, deleteBook } = useBookContext();

  useEffect(() => {
    let isMounted = true;

    const loadBook = async () => {
      if (id && isMounted) {
        try {
          await getBook(id);
        } catch (error) {
          console.error("Failed to load book:", error);
        }
      }
    };

    loadBook();

    return () => {
      isMounted = false;
    };
  }, [id, getBook]);

  // Handle delete function
  const handleDelete = async () => {
    if (id && window.confirm("Are you sure you want to delete this book?")) {
      try {
        await deleteBook(id);
        navigate("/books");
      } catch (error) {
        console.error("Failed to delete book:", error);
      }
    }
  };

  // Show loading state
  if (state.loading) {
    return (
      <section className="lg:grid lg:h-screen">
        <div className="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="flex justify-center items-center">
            <div className="text-lg">Loading book details...</div>
          </div>
        </div>
      </section>
    );
  }

  // Show error state
  if (state.error) {
    return (
      <section className="lg:grid lg:h-screen">
        <div className="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="text-center">
            <div className="text-red-600 text-lg mb-4">
              Error: {state.error}
            </div>
            <Button
              onClick={() => navigate("/books")}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Back to Books
            </Button>
          </div>
        </div>
      </section>
    );
  }

  // Show not found state
  if (!state.selectedBook) {
    return (
      <section className="lg:grid lg:h-screen">
        <div className="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Book not found
            </h2>
            <Button
              onClick={() => navigate("/books")}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Back to Books
            </Button>
          </div>
        </div>
      </section>
    );
  }

  // Use the selectedBook from state, not books[0]
  const book = state.selectedBook;

  return (
    <section className="lg:grid lg:h-screen">
      <div className="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        {/* Header with navigation and actions */}
        <div className="mb-8 flex justify-between items-center">
          <Button onClick={() => navigate("/books")} variant="link">
            ← Back to Books
          </Button>
          <div className="flex justify-end flex-col items-center gap-2 md:block space-x-2">
            <EditBookSheet book={book} />
            <Button onClick={handleDelete} variant="destructive">
              Delete
            </Button>
          </div>
        </div>

        {/* Book content */}
        <div className="space-y-4 md:space-y-8">
          <img
            src={book.cover}
            className="rounded max-h-[20rem] w-full object-cover"
            alt={`Cover of ${book.title}`}
          />
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
            {book.title}
          </h2>

          <p className="mt-4 text-gray-700">{book.description}</p>

          {/* Additional book info */}
          <div className="pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-500">Book ID: {book.id}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookPage;
