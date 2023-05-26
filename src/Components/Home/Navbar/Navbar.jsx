/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import Container from "../../../Container/Container";


const Navbar = () => {
    const items = (
      <>
        <li>
          <Link to='/' className="text-xl text-white">Home</Link>
        </li>
        <li>
          <Link className="text-xl text-white">About</Link>
        </li>
        <li>
          <Link className="text-xl text-white">Appointment</Link>
        </li>
        <li>
          <Link className="text-xl text-white" to='/login'>Login</Link>
        </li>
      </>
    );
    return (
      <Container>
        <div className="navbar  mt-8 fixed z-10 max-w-screen-xl">
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
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
               {items}
              </ul>
            </div>
            <Link className="btn btn-ghost normal-case text-xl">
              <span className="text-amber-500 font-bold text-3xl">DOC</span>{" "}
              HOUSE
            </Link>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {items}
            </ul>
          </div>
          
        </div>
      </Container>
    );
};

export default Navbar;