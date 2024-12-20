import { Link, Outlet } from 'react-router';
import { Sidebar } from "./Sidebar";
import Flag from "../images/sweden-flag.png";

export function Layout() {
  return (
    <div className="layout text-sky-950 bg-gray-100">
      <div className="navbar border-b-4 border-double border-sky-800">
        <div className="flex gap-3">
          <div className="size-7">
            <img src={Flag} alt="sweden-flag" />
          </div>
          <div>
            <Link to="/" id="title">TravelSweden</Link>
          </div>
        </div>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div id="sign-in">
        <div>
          <Link to="/pages/signin">Sign In</Link>
        </div>
        <div>
          <Link to="/pages/signin">
            <svg id="user-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="35px" height="35px">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
          </Link>
        </div>
      </div>
      </div>
      <div className="flex">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}
