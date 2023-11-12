import { Link } from "react-router-dom";

const Navbar = () => {
  const NavItems = (
    <>
      <li>
        <Link to="/">HOME</Link>
      </li>
      <li>
        <Link to="*">CONTACT US</Link>
      </li>
      <li>
        <Link to="*">DASHBOARD</Link>
      </li>
      <li>
        <Link to="/menu">OUR MENU</Link>
      </li>
      <li>
        <Link to="/order/salad">ORDER FOOD</Link>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar bg-black text-white bg-opacity-50 max-w-screen-xl fixed z-40">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black bg-opacity-80 rounded-box w-52"
            >
              {NavItems}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">KHANA PINA</a>
        </div>

        <div className="navbar-end">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-sm gap-2 menu-horizontal px-1">
              {NavItems}
            </ul>
          </div>
          <a className="btn btn-neutral">GET STARTED</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
