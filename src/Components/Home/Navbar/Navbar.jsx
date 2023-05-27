/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import Container from "../../../Container/Container";
import bannerImg from "../../../assets/Group 34991.png";

const Navbar = () => {
    const items = (
      <>
        <li>
          <Link to='/' className="text-xl text-white border p-2 rounded-lg bg-slate-600">Home</Link>
        </li>
        <li>
          <Link className="text-xl text-white border p-2 rounded-lg bg-slate-600">About</Link>
        </li>
        <li>
          <Link className="text-xl text-white border p-2 rounded-lg bg-slate-600">Appointment</Link>
        </li>
        <li>
          <Link className="text-xl text-white border p-2 rounded-lg bg-slate-600" to='/login'>Login</Link>
        </li>
      </>
    );
    return (
      <Container>
        <div
          className="navbar   fixed z-10 max-w-[1400px] "
          
        >
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
            <p className="border p-2 rounded-lg bg-slate-600 normal-case text-xl text-white">
              <span className="text-amber-500 font-bold text-3xl">DOC</span>{" "}
              HOUSE
            </p>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1 flex gap-8">{items}</ul>
          </div>
        </div>
      </Container>
    );
};

export default Navbar;