import { Link } from "react-router-dom";
import { MdMenu, MdOutlineClose } from "react-icons/md";

const Header = () => {
  return (
    <header className="bg-emerald-500">
      <nav className="flex justify-between items-center p-4 md:px-8 md:py-6">
        <div className="flex gap-2 items-center cursor-pointer">
          <img className="w-6 md:w-8" src="/application_logo.png" alt="logo" />

          <h2 className="font-bold md:text-xl">Quiz App</h2>
        </div>



        <ul className="hidden md:flex gap-4 md:gap-8 font-medium md:text-xl">
          <Link to="/">
            <a href="">
              <li className="hover:bg-emerald-600 rounded-md px-2 ease-in-out">
                Home
              </li>
            </a>
          </Link>
          <Link to="/test">
            <a href="">
              <li className="hover:bg-emerald-600 rounded-md px-2 ease-in-out">
                Test
              </li>
            </a>
          </Link>

          <Link to="/contact">
            <a href="">
              <li className="hover:bg-emerald-600 rounded-md px-2 ease-in-out ">
                Contact
              </li>
            </a>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
