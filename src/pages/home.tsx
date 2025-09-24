import { useBookContext } from "@/context/BookContext";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router";

function HomePage() {
  const { state, fetchBooks } = useBookContext();

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-indigo-50 to-white opacity-80"></div>
        <div className="container relative z-10 mx-auto px-4 py-20 sm:px-6 lg:flex lg:h-[80vh] lg:items-center lg:px-8">
          <div className="max-w-2xl lg:w-1/2">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              {/* <span className="font-bold block bg-gradient-to-r from-blue-600 via-purple-500  to-indigo-400 text-transparent bg-clip-text">
                Discover Stories
              </span> */}
              <span className="block">Discover Stories</span>
              <span className="font-bold block bg-gradient-to-r from-blue-600 via-purple-500  to-indigo-400 text-transparent bg-clip-text">
                That Inspire
              </span>
              {/* <span className="block text-indigo-600">That Inspire</span> */}
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Explore thought-provoking articles, personal stories, and expert
              insights that will expand your horizons and spark your
              imagination.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/books"
                className="inline-flex items-center rounded-md bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm transition-all hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Explore Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              {/* <Link
                to="#featured"
                className="inline-flex items-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Featured Posts
              </Link> */}
            </div>
          </div>
          <div className="mt-10 lg:mt-0 lg:w-1/2">
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="/img/girl-forest.jpg"
                  alt="Person reading in nature"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Books Section */}
      <section id="featured" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl tracking-tight sm:text-4xl">
              <span className="font-bold bg-gradient-to-r from-blue-600 via-purple-500  to-indigo-400 inline-block text-transparent bg-clip-text">
                Featured Books
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-500">
              Discover our most popular and thought-provoking books
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* first 3 books */}
            {state.books.slice(0, 3).map((book) => (
              <div
                key={book.id}
                className="group overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* <div className="absolute top-4 right-4 rounded-full bg-white px-3 py-1 text-xs font-medium text-indigo-600 shadow-sm">
                    {book.category}
                  </div> */}
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-indigo-600">
                    {book.title}
                  </h3>
                  <p className="mb-4 text-gray-600">{book.description}</p>
                  <div className="flex items-center justify-between">
                    {/* <div className="flex items-center text-sm text-gray-500">
                      <Clock className="mr-1 h-4 w-4" />
                      <span>{book.readTime}</span>
                    </div> */}
                    <Link
                      to={`/books/${book.id}`}
                      className="flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-700"
                    >
                      Read more
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/books"
              className="inline-flex items-center rounded-md border border-indigo-600 bg-white px-6 py-3 text-base font-medium text-indigo-600 shadow-sm transition-all hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section
      <section className="bg-indigo-600 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Stay Updated
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-indigo-100">
              Subscribe to our newsletter to receive the latest articles and
              updates directly in your inbox.
            </p>
            <form className="mt-8 sm:flex sm:max-w-md sm:mx-auto">
              <div className="min-w-0 flex-1">
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="block w-full rounded-md border-0 px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
                />
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <button
                  type="submit"
                  className="block w-full rounded-md bg-white px-4 py-3 font-medium text-indigo-600 shadow hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 sm:text-sm"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default HomePage;
