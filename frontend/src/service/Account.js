import Flag from "../images/skånska-flaggan.png";
import { useState, useEffect, useContext } from 'react';
import { AccountContext } from "../AccountContext";
import { resolvePath, useNavigate } from "react-router"; 
import { EditReviewCard } from "../components/ReviewCard";
// Login/CreateAccount cards from https://v1.tailwindcss.com/components/cards

export function CreateAccount() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function createUser(e) {
    e.preventDefault(); 

    try {
      //console.log("BEFORE FETCH");
      const response = await fetch("http://localhost:8080/api/service/account/create", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ username, password })
      })
      //console.log("AFTER FETCH");
      if (response.ok) {
        navigate("/service/sign-in");
      } 
    } catch (err) {
      console.error("Failed to create account: " + err);
    }
  }

  return (
    <div className="bg-gray-350 h-[calc(100vh-6.25rem)] w-full">
      <div className='flex flex-wrap flex-col items-center px-6 py-12 lg:px-8 md:mr-40 p-10 gap-10'>
          <div className="sm:mx-auto sm:max-w-sm">
            <img className="mx-auto w-auto size-16 rounded-sm"  src={Flag} alt="sweden-flag" />
            <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
              Create a new account
              </h2>
          </div>

          <div className="mt-5 w-96">
            <form className="space-y-3">
              <div>
                <label htmlFor="email" className="block text-md font-medium text-gray-900">
                  Username
                  </label>
                <div className="mt-2">
                  <input type="text" name="username" value={username} 
                  onChange={e => setUsername(e.target.value)} autocomplete="current-username" 
                  required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 
                  outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline 
                  focus:outline-2 focus:-outline-offset-2 focus:outline-blue-900 sm:text-md">
                  </input>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-md font-medium text-gray-900">
                    Password
                    </label>
                </div>
                <div className="mt-2">
                  <input type="password" name="password" value={password} 
                  onChange={e => setPassword(e.target.value)} autocomplete="current-password" 
                  required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline 
                  outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline 
                  focus:outline-2 focus:-outline-offset-2 focus:outline-blue-900 sm:text-md">
                  </input>
                </div>
              </div>

              <br></br>

              <div className="flex justify-center">
                <button className="flex w-full justify-center rounded-md bg-blue-900 
                px-3 py-1.5 text-md font-semibold text-white shadow-sm hover:bg-blue-900 
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
                focus-visible:outline-blue-900" type="button" 
                onClick={createUser}>Create account</button>
              </div>
            </form>
            <p className="mt-10 text-center text-md text-gray-500">
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
  const navigate = useNavigate();
  const { account, setAccount } = useContext(AccountContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function authenticate(e) {
    e.preventDefault();

    const data = new URLSearchParams();
    data.append("username", username);
    data.append("password", password);

    try {
      await fetch("http://localhost:8080/spring-security-login", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: data.toString()
      })
    } catch (err) {
      // Triggered because broswer JS raises CORS error (can't see CORS handling in backend SecurityConfig)
      // The server-side authentication worked - successful POST
      console.error("browser JS raises backend-handled CORS issue: " + err);
    }
    try {
      const response = await fetch("http://localhost:8080/api/service/account/current", {
        method: "GET",
        credentials: "include"
      });
      if (response.ok) {
        const data = await response.json();
        // update AccountContext
        setAccount(data);
        navigate("/");

      } else {
        throw new Error(`GET current login failed: ${response.status}`);
      }
    } catch (err) {
      console.error("Failed to fetch new logged-in user: " + err);
    }
  }

  return (
    <div className="bg-gray-350 h-[calc(100vh-6.25rem)] w-full">
      <div className='flex flex-wrap flex-col items-center px-6 py-12 lg:px-8 md:mr-40 p-10 gap-10'>
          <div className="sm:mx-auto sm:max-w-sm">
            <img className="mx-auto w-auto size-16 rounded-sm"  src={Flag} alt="sweden-flag" />
            <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
              Sign in to your account
              </h2>
          </div>

          <div className="mt-5 w-96">
            <form onSubmit={authenticate} className="space-y-3">
              <div>
                <label htmlFor="email" className="block text-md font-medium text-gray-900">
                  Username
                  </label>
                <div className="mt-2">
                  <input type="text" name="username" onChange={e => setUsername(e.target.value)} 
                  id="username" autocomplete="email" required className="block w-full rounded-md 
                  bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 
                  outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 
                  focus:-outline-offset-2 focus:outline-blue-900 sm:text-md">
                  </input>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-md font-medium text-gray-900">
                    Password
                    </label>
                </div>
                <div className="mt-2">
                  <input type="password" name="password" onChange={e => setPassword(e.target.value)} 
                  id="password" autocomplete="current-password" required className="block w-full 
                  rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 
                  -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline 
                  focus:outline-2 focus:-outline-offset-2 focus:outline-blue-900 sm:text-md">
                  </input>
                </div>
              </div>

              <br></br>

              <div>
                <input 
                  className="flex w-full justify-center rounded-md bg-blue-900 
                px-3 py-1.5 text-md font-semibold text-white shadow-sm hover:bg-blue-900 
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
                focus-visible:outline-blue-900" 
                  type="submit" 
                  value="Sign in">                      
                </input>
              </div>
            </form>

            <p className="mt-10 text-center text-md text-gray-500">
              <a href="./create-account" className="ml-2 font-semibold text-blue-900 hover:text-blue-950">
                Create an account
                </a>
            </p>
          </div>
        </div>
    </div>
  );
}

export function MyAccount() {

  const navigate = useNavigate();
  const { account, setAccount } = useContext(AccountContext);

  async function handleLogout() {
    try {
      await fetch("http://localhost:8080/spring-security-logout", {
        method: "POST",
        credentials: "include",
      });
    } catch (err) {
      // fetch() fails due to browser issue -  cannot detect CORS backend WebConfig configuration and blocks request
      console.error("Failed to POST logout: " + err);
    }
    setAccount({ "username": "Anonymous" });
    navigate("/")
  }

  async function deleteAccount() {
    try {
      // Delete account first
      await fetch(`http://localhost:8080/api/service/account?username=${account.username}`, {
        method: "DELETE",
        credentials: "include",
      });
    } catch (err) {
      console.error("fetch DELETE failed: " + err);
    }
    // Log out
    await handleLogout();
  }

  return (
      <div className="bg-gray-300 h-[calc(100vh-6.25rem)] w-full overflow-auto">
          <div className='flex flex-col flex-wrap items-center p-10'>
              <div className='flex flex-col items-center w-3/4 gap-8 md:mr-28'>
                  <p className="text-3xl font-semibold">Account Information</p>
                  <p className="text-xl">Username: {account.username}</p>
                  <div className="flex flex-col gap-3 mt-4">
                      <button onClick={handleLogout} className="w-60 justify-center inline-flex items-center px-3 py-2 text-md 
                    text-blue-950 font-bold rounded bg-gray-400 hover:bg-gray-500 dark:hover:bg-blue-900 dark:focus:ring-blue-800">
                        Log out
                    </button>
                      <a href="/service/my-reviews" className="w-60 justify-center inline-flex px-4 py-3 text-md 
                    text-center text-white bg-blue-900 rounded hover:bg-blue-950 focus:ring-4 focus:outline-none 
                    focus:ring-blue-300 dark:bg-blue-950 dark:hover:bg-blue-900 dark:focus:ring-blue-800">
                        My Stories
                    </a>
                    <a href="/service/edit-account" className="w-60 justify-center inline-flex items-center px-3 py-2 text-md 
                    text-center text-white bg-blue-900 rounded hover:bg-blue-950 focus:ring-4 focus:outline-none 
                    focus:ring-blue-300 dark:bg-blue-950 dark:hover:bg-blue-900 dark:focus:ring-blue-800">
                        Edit username/password
                    </a>
                    <button onClick={deleteAccount} className="w-60 justify-center inline-flex items-center px-3 py-2 text-md 
                    text-center text-white bg-red-800 rounded hover:bg-red-900 focus:ring-4 focus:outline-none 
                    focus:ring-blue-300 dark:bg-blue-950 dark:hover:bg-red-900 dark:focus:ring-blue-800">
                        Delete account <br></br>
                        (warning: cannot be undone!)
                    </button>
                  </div>
                  <br></br>
              </div>

          
          </div>
      </div>
    );
}

export function EditAccount() {
  const { account, setAccount } = useContext(AccountContext);
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function submitEdits(e) {
    e.preventDefault();
    // PUT (new username, new password) to backend
    navigate("/static/maintenance")


    
    


  }

  return (
      <div className="bg-gray-300 h-[calc(100vh-6.25rem)] w-full">
        <div className='flex flex-col flex-wrap items-center md:mr-36 p-10 gap-10'>
          <div className="text-3xl font-semibold">
            Edit Account Information
          </div>
          <div className="max-w-md p-10 bg-gray-200 border border-gray-200 rounded-lg text-md
          shadow dark:bg-gray-800 dark:border-blue-950">
            
            <form method="post" onSubmit={submitEdits}>
              <label htmlFor="title">
                New username:
                <input className="w-full p-2 rounded-md"
                 type="text" value={username} name="username"
                 onChange={e => setUsername(e.target.value)}></input>
              </label>
              <br></br>
              <br></br>
              <label htmlFor="title">
                New password:
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
              <a href="/service/my-account" className="ml-2 rounded-md p-3 rounded-lg hover:bg-gray-300">Cancel</a>
            </form>
          </div>
        </div>
      </div>
    );
  }