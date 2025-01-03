import { Link } from "react-router-dom";
import navLogo from "../../assets/images/logo.png";

function AdminNavbar() {
  return (
    <nav className="bg-black">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
       
        <Link
          to="/admin"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src={navLogo}
            className="h-10 w-auto sm:h-12 md:h-14"
            alt="Custom Logo"
          />
          <span className="self-center text-2xl font-semibold text-white">
            WatchVault
          </span>
        </Link>

        {/* Navigation Links */}
        <ul className="flex flex-row font-bold space-x-8 rtl:space-x-reverse text-base text-white">
        <li>
            <Link to="/home" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/manageItems" className="hover:underline">
              Manage Items
            </Link>
          </li>
          <li>
            <Link to="/manageCustomer" className="hover:underline">
              Manage Customer
            </Link>
          </li>
          <li>
            <Link to="/viewOrders" className="hover:underline">
              View Orders
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default AdminNavbar;

