import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { RiShoppingCartFill } from "react-icons/ri";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => Swal.fire(error));
  };
  const NavItems = (
    <>
      <li className=" hover:text-[#ffa500] ">
        <NavLink to="/">HOME</NavLink>
      </li>
      <li className=" hover:text-[#ffa500] ">
        <NavLink to="/menu">OUR MENU</NavLink>
      </li>
      <li className=" hover:text-[#ffa500] ">
        <NavLink to="/order/salad">ORDER FOOD</NavLink>
      </li>
      <li className=" hover:text-[#ffa500] ">
        <NavLink to="/secret">SECRET</NavLink>
      </li>
      <li className="  ">
        <Link to="/dashboard/cart">
          <button className="btn cart-btn btn-sm text-white btn-outline hover:text-[#ffa500]  text-xl ">
            <RiShoppingCartFill />
            <div className="badge badge-secondary">+{cart?.length}</div>
          </button>
        </Link>
      </li>

      {user ? (
        <>
          <button onClick={handleLogOut} className="btn btn-ghost btn-sm">
            LOG OUT
          </button>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">LOG IN</Link>
          </li>
        </>
      )}
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
              className="space-y-2  nav_link menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black bg-opacity-80 rounded-box w-52"
            >
              {NavItems}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">KHANA PINA</a>
        </div>

        <div className="navbar-end">
          <div className="navbar-center  hidden lg:flex">
            <ul className="items-center justify-between nav_link menu-sm gap-2 menu-horizontal px-1">
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
