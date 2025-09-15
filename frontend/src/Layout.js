import { Link, Outlet } from 'react-router';
import { Sidebar } from "./Sidebar";
import { Navbar } from './Navbar';
import { AccountProvider } from './AccountContext';

export function Layout() {
  return (
    <div className="text-blue-950 bg-gray-100">
      <AccountProvider>
        <Navbar />
        <div className="flex">
          <Sidebar />
          <Outlet />
        </div>
      </AccountProvider>
    </div>
  );
}
