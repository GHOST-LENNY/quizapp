import { Link } from "react-router-dom";
import { MdMenu, MdOutlineClose } from "react-icons/md";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <header className="bg-emerald-500">
      <nav className="flex justify-between items-center px-4 py-6 md:px-8 md:py-6">
        <div className="flex gap-2 items-center cursor-pointer">
          <img className="w-6 md:w-8" src="/application_logo.png" alt="logo" />

          <h2 className="font-bold md:text-xl">Quiz App</h2>
        </div>

        <button
          className="inline-flex md:hidden items-center justify-center hover:shadow-md 
          hover:bg-gray-500 rounded-md hover:bg-opacity-40 transition-all duration-300 "
          onClick={handleMenu}
        >
          <span className="sr-only"> Open Main Menu </span>
          {!open ? (
            <MdMenu className="text-2xl md:text-[28px]" />
          ) : (
            <MdOutlineClose className="text-2xl md:text-[28px]" />
          )}
        </button>

        <ul className="hidden md:flex gap-4 md:gap-8 font-medium md:text-xl">
          <Link to="/">
            <li className="hover:bg-emerald-600 rounded-md px-2 ease-in-out">
              Home
            </li>
          </Link>
          <Link to="/test">
            <li className="hover:bg-emerald-600 rounded-md px-2 ease-in-out">
              Test
            </li>
          </Link>

          <Link to="/contact">
            <li className="hover:bg-emerald-600 rounded-md px-2 ease-in-out ">
              Contact
            </li>
          </Link>
        </ul>
      </nav>

      {open && (
        <div className="flex flex-col md:hidden bg-emerald-500 rounded px-2 pb-2 ">
          <ul className="font-medium text-sm">
            <Link to="/">
              <li className="hover:bg-emerald-600 rounded-md p-2 ease-in-out">
                Home
              </li>
            </Link>
            <Link to="/test">
              <li className="hover:bg-emerald-600 rounded-md p-2 ease-in-out">
                Test
              </li>
            </Link>

            <Link to="/contact">
              <li className="hover:bg-emerald-600 rounded-md p-2 ease-in-out ">
                Contact
              </li>
            </Link>
            <Link to="/signup">Signup</Link>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
