import { Link } from "react-router";
import logo from "@/assets/logo.svg";

const Navbar = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        <div className="md:flex md:items-center md:gap-12">
          <Link className="block text-teal-600" to="/">
            <span className="sr-only">Home</span>
            <div className="flex items-center gap-2">
              <img src={logo} alt="logo" className="h-12 w-auto" />
              <span className="text-2xl font-bold">Logo</span>
            </div>
          </Link>
        </div>

        <div className="hidden md:block ">
          <nav aria-label="Global">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <Link
                  className="text-gray-500 transition hover:text-gray-500/75"
                  to="/"
                >
                  {" "}
                  Home{" "}
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-500 transition hover:text-gray-500/75"
                  to="/books"
                >
                  {" "}
                  Books{" "}
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
