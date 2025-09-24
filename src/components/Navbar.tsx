import { Link } from "react-router";
import logo from "@/assets/logo.svg";

const Navbar = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        <div className="md:flex md:items-center md:gap-12">
          <Link className="block " to="/">
            <span className="sr-only">Home</span>
            <div className="flex items-center gap-2">
              <img src={logo} alt="logo" className="h-12 w-auto" />
              {/* make span text gradient */}
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-500  to-indigo-400 inline-block text-transparent bg-clip-text">
                BookS
              </span>
            </div>
          </Link>
        </div>

        <div className="block ">
          <nav aria-label="Global">
            <ul className="flex items-center gap-6 text-lg">
              <li>
                <Link
                  className=" transition hover:border-b-2 hover:border-indigo-600 ease-in-out"
                  to="/"
                >
                  <span className="bg-gradient-to-r from-blue-600 via-purple-500  to-indigo-400 inline-block text-transparent bg-clip-text">
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  className=" transition hover:border-b-2 hover:border-indigo-600 ease-in-out"
                  to="/books"
                >
                  <span className="bg-gradient-to-r from-blue-600 via-purple-500  to-indigo-400 inline-block text-transparent bg-clip-text">
                    Books
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
