import Flag from "../../images/sweden-flag.png";

export function SignUp() {




  return (
    <div className="bg-gray-350 h-[calc(100vh-5rem)] w-full">
      <div className='flex flex-col flex-wrap items-center md:mr-40 p-10 gap-10'>
    
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img className="mx-auto h-10 w-auto"  src={Flag} alt="sweden-flag" />
            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
              Create new account
              </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                  Email address
                  </label>
                <div className="mt-2">
                  <input type="email" name="email" id="email" autocomplete="email" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-sky-700 sm:text-sm/6">
                  </input>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                    Password
                    </label>
                </div>
                <div className="mt-2">
                  <input type="password" name="password" id="password" autocomplete="current-password" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-sky-700 sm:text-sm/6">
                  </input>
                </div>
              </div>

              <div>
                <button type="submit" className="flex w-full justify-center rounded-md bg-sky-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700">
                  Create Account
                  </button>
              </div>
              
            </form>
            <p className="mt-10 text-center text-sm/6 text-gray-500">
                <a href="./signin" className="ml-2 font-semibold text-sky-700 hover:text-sky-800">
                  Back to sign-in
                  </a>
              </p>
          </div>
        </div>

      </div>
    </div>
  );
}