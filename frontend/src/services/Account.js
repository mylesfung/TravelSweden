import Flag from "../images/skånska-flaggan.png";
import { useState, useEffect } from 'react';
// Login/CreateAccount cards from https://v1.tailwindcss.com/components/cards

export function CreateAccount() {

  // POST (username, password) to backend and create new user



  return (
    <div className="bg-gray-350 h-[calc(100vh-6.25rem)] w-full">
      <div className='flex flex-wrap flex-col items-center px-6 py-12 lg:px-8 md:mr-40 p-10 gap-10'>
          <div className="sm:mx-auto sm:max-w-sm">
            <img className="mx-auto w-auto size-16 rounded-sm"  src={Flag} alt="sweden-flag" />
            <h2 className="mt-10 text-center text-3xl font-bold tracking-tight text-gray-900">
              Create a new account
              </h2>
          </div>

          <div className="mt-5 w-96">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-900">
                  Username
                  </label>
                <div className="mt-2">
                  <input type="email" name="email" id="email" autocomplete="email" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-900 sm:text-lg">
                  </input>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-lg font-medium text-gray-900">
                    Password
                    </label>
                </div>
                <div className="mt-2">
                  <input type="password" name="password" id="password" autocomplete="current-password" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-900 sm:text-lg">
                  </input>
                </div>
              </div>

              <br></br>

              <div className="flex justify-center">
                <button type="submit" className="flex w-96 justify-center rounded-md bg-blue-900 px-3 py-1.5 
                text-lg font-semibold text-white shadow-sm hover:bg-blue-900 focus-visible:outline 
                focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900">
                  Create account
                  </button>
              </div>
              
            </form>
            <p className="mt-10 text-center text-lg text-gray-500">
                <a href="./sign-in" className="ml-2 font-semibold text-blue-900 hover:text-blue-950">
                  Back to sign-in
                  </a>
              </p>
          </div>
        </div>
    </div>
  );
}

export function SignIn() {

  // POST user, set token in local storage, redirect to home page
  // Change 'Sign In' to 'My Account'




  return (
    <div className="bg-gray-350 h-[calc(100vh-6.25rem)] w-full">
      <div className='flex flex-wrap flex-col items-center px-6 py-12 lg:px-8 md:mr-40 p-10 gap-10'>
          <div className="sm:mx-auto sm:max-w-sm">
            <img className="mx-auto w-auto size-16 rounded-sm"  src={Flag} alt="sweden-flag" />
            <h2 className="mt-10 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your account
              </h2>
          </div>

          <div className="mt-5 w-96">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-900">
                  Username
                  </label>
                <div className="mt-2">
                  <input type="email" name="email" id="email" autocomplete="email" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-900 sm:text-lg">
                  </input>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-lg font-medium text-gray-900">
                    Password
                    </label>
                </div>
                <div className="mt-2">
                  <input type="password" name="password" id="password" autocomplete="current-password" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-900 sm:text-lg">
                  </input>
                </div>
              </div>

              <br></br>

              <div>
                <button type="submit" className="flex w-full justify-center rounded-md bg-blue-900 
                px-3 py-1.5 text-lg font-semibold text-white shadow-sm hover:bg-blue-900 
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
                focus-visible:outline-blue-900">
                  Sign in
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-lg text-gray-500">
              <a href="./create-account" className="ml-2 font-semibold text-blue-900 hover:text-blue-950">
                Create Account
                </a>
            </p>
          </div>
        </div>
    </div>
  );
}

export function MyAccount() {

  // functions to change username/password



  return (
      <div className="bg-gray-300 h-[calc(100vh-6.25rem)] w-full overflow-auto">
          <div className='flex flex-col flex-wrap items-center p-10 gap-10'>
              <div className='flex flex-col items-center w-3/4 align-center gap-10 md:mr-28'>
                  <p className="text-3xl font-semibold">My Account</p>
                  <p className="text-lg font-semibold">Username: </p>
                  <p className="text-lg font-semibold">Password: </p>
                  <a href="/services/edit-account" className="inline-flex items-center px-4 py-2 text-md 
                  text-center text-white bg-blue-900 rounded-lg hover:bg-blue-950 focus:ring-4 focus:outline-none 
                  focus:ring-blue-300 dark:bg-blue-950 dark:hover:bg-blue-900 dark:focus:ring-blue-800">
                      Edit username/password
                  </a>
                  <a href="/" className="inline-flex items-center px-4 py-2 text-md 
                  text-center text-white bg-red-800 rounded-lg hover:bg-blue-900 focus:ring-4 focus:outline-none 
                  focus:ring-blue-300 dark:bg-blue-950 dark:hover:bg-blue-900 dark:focus:ring-blue-800">
                      Delete account <br></br>
                      (warning: cannot be undone!)
                  </a>
              </div>

          
          </div>
      </div>
    );
}

export function EditAccount() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    // PUT (new username, new password) to backend


    // redirect to MyAccount page

  }

  return (
      <div className="bg-gray-300 h-[calc(100vh-6.25rem)] w-full">
        <div className='flex flex-col flex-wrap items-center md:mr-36 p-10 gap-10'>
          <div className="text-3xl font-semibold">
            Edit Account Information
          </div>
          <div className="max-w-md p-10 bg-gray-200 border border-gray-200 rounded-lg text-lg
          shadow dark:bg-gray-800 dark:border-blue-950">
            
            <form method="post" onSubmit={handleSubmit}>
              <label htmlFor="title">
                Username:
                <input className="w-full p-2 rounded-md"
                 type="text" value={username} name="username"
                 onChange={e => setUsername(e.target.value)}></input>
              </label>
              <br></br>
              <br></br>
              <label htmlFor="title">
                Password:
                <input className="w-full p-2 rounded-md"
                 type="text" value={password} name="password"
                 onChange={e => setPassword(e.target.value)}></input>
              </label>
              <br></br>
              <br></br>
  
              <input 
                className="rounded-md p-2 text-white bg-blue-900 rounded-lg hover:bg-blue-950" 
                type="submit" 
                value="Submit Edits">                      
              </input>
              <a href="/services/my-account" className="ml-2 rounded-md p-3 rounded-lg hover:bg-gray-300">Cancel</a>
            </form>
          </div>
        </div>
      </div>
    );
  }