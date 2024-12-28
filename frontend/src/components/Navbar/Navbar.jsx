import { Link } from "react-router-dom";
import logo from "../../assets/images/mainLogo.png";

function Navbar() {
  return (
    <nav className="bg-black">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        {/* Logo Section */}
        <Link
          to="/home"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src={logo}
            className="h-15 w-auto sm:h-12 md:h-14"
            alt="Custom Logo"
          />
          <span className="self-center text-2xl font-semibold text-white">
            WatchVault
          </span>
        </Link>

        {/* Navigation Links */}
        <ul className="flex flex-row  space-x-8 rtl:space-x-reverse text-base text-white">
          <li>
            <Link to="/home" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/categories" className="hover:underline">
              Categories
            </Link>
          </li>
          <li>
            <Link to="/aboutUs" className="hover:underline">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/admin" className="hover:underline">
              Admin
            </Link>
          </li>
          <li>
            <Link to="/login" className="hover:underline">
              Login
            </Link>
          </li>
          <li>
            <Link to="/register" className="hover:underline">
              Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
