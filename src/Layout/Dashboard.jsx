import { NavLink, Outlet } from "react-router-dom";
import { RiShoppingCartFill } from "react-icons/ri";
import {
  FaCalendar,
  FaFolderOpen,
  FaHome,
  FaList,
  FaStar,
} from "react-icons/fa";
import { BiDish } from "react-icons/bi";
import { BiFoodMenu } from "react-icons/bi";

const Dashboard = () => {
  return (
    <div className="flex">
      {/* dashboard sidebar */}
      <div className="w-64 min-h-screen  bg-orange-400">
        <ul className="dashboard-nav menu font-bold text-lg space-y-2  text-white">
          <li>
            <NavLink to="/dashboard/userHome">
              <FaHome /> User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              <FaCalendar /> Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              <RiShoppingCartFill /> My Cart
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
              <FaStar /> Add Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/bookings">
              <FaList /> My Bookings
            </NavLink>
          </li>
        </ul>
        <div className="divider"></div>
        <ul className="dashboard-nav menu font-bold text-lg space-y-2  text-white">
          <li className="  ">
            <NavLink to="/">
              <FaHome /> HOME
            </NavLink>
          </li>
          <li className="  ">
            <NavLink to="/menu">
              <BiFoodMenu /> OUR MENU
            </NavLink>
          </li>
          <li className="  ">
            <NavLink to="/order/salad">
              <BiDish />ORDER FOOD
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
