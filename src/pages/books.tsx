import BookCard from "@/components/BookCard";
import { BooksProvider } from "../context/books-context";
import AddBookSheet from "@/components/AddBookSheet";

function BooksPage() {
  return (
    // <BooksProvider>
    <section className="lg:grid lg:h-screen ">
      <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Books
            <strong className="text-indigo-600"> List </strong>
          </h1>
          <div className="mt-8">
            <AddBookSheet />
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <BookCard
            book={{
              id: "1",
              title: "Book 1",
              description: "Book 1 description",
              cover: "https://picsum.photos/200/300",
            }}
          />
        </div>
      </div>
    </section>
    // </BooksProvider>
  );
}

export default BooksPage;
