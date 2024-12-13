import Flag from "../../images/sweden-flag.png";
import { SignUp } from './SignUp';

export function SignIn() {
  return (
    <div className="bg-gray-350 h-screen w-full">
      <div className='main-content flex flex-col flex-wrap items-center p-10 gap-10'>
    
        <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <img class="mx-auto h-10 w-auto"  src={Flag} alt="sweden-flag" />
            <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
              Sign in to your account
              </h2>
          </div>

          <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6" action="#" method="POST">
              <div>
                <label for="email" class="block text-sm/6 font-medium text-gray-900">
                  Email address
                  </label>
                <div class="mt-2">
                  <input type="email" name="email" id="email" autocomplete="email" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-sky-700 sm:text-sm/6">
                  </input>
                </div>
              </div>

              <div>
                <div class="flex items-center justify-between">
                  <label for="password" class="block text-sm/6 font-medium text-gray-900">
                    Password
                    </label>
                </div>
                <div class="mt-2">
                  <input type="password" name="password" id="password" autocomplete="current-password" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-sky-700 sm:text-sm/6">
                  </input>
                </div>
              </div>

              <div>
                <button type="submit" class="flex w-full justify-center rounded-md bg-sky-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700">
                  Sign in
                  </button>
              </div>
            </form>

            <p class="mt-10 text-center text-sm/6 text-gray-500">
              <a href="./signup" class="ml-2 font-semibold text-sky-700 hover:text-sky-800">
                Create Account
                </a>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}