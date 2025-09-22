import { BooksProvider } from "../context/books-context";

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
        </div>
      </div>
    </section>
    // </BooksProvider>
  );
}

export default BooksPage;
