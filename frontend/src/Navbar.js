import Flag from "./images/skånska-flaggan.png";
import { Link, Outlet } from 'react-router';
import { useContext } from 'react';
import { AccountContext } from './AccountContext';
// svg icons from https://heroicons.com/

export function Navbar() {

    const account = useContext(AccountContext);

    //placeholder values
    const route = "/service/sign-in";
    const text = "Sign In";
    //const route =    null == "Anonymous" ? "/service/sign-in" : "/service/my-account";
    //const text =    null == "Anonymous" ? "Sign In" : "My Account";

    return (
        <div className="flex justify-between p-5 items-center border-b-4 border-double bg-gray-100 border-blue-950">
            <div className="flex gap-4 items-center">
                <div className="size-14 translate-y-1">
                    <img className="rounded-sm" src={Flag} alt="skånska-flaggan"/>
                </div>
                <div>
                    <Link to="/" className='text-2xl italic'>TravelSkåne</Link>
                </div>
            </div>
            <div>
                <Link to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" 
                    stroke="currentColor" 
                    class="size-10">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 
                        1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 
                        1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                </Link>
            </div>
            <div className='text-xl flex items-center gap-3'>
                <div>
                    <Link to={route}>{text}</Link>
                </div>
                <div>
                    <Link to="/service/sign-in">
                        <svg id="user-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                        strokeWidth={1.5} stroke="currentColor" 
                        class='size-10'>
                            <path strokeLinecap="round" strokeLinejoin="round" 
                            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 
                            2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 
                            8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
}