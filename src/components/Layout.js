import { Link, Outlet } from 'react-router';
import { Sidebar } from "./Sidebar";
import { Navbar } from './Navbar';

export function Layout() {
  return (
    <div className="layout text-sky-950 bg-gray-100">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}
