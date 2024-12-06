function Home() {
  return (
    <div class="home bg-stockholm bg-auto gap-10 p-10">
      <div id="reviews">
        <a href="#" class="block opacity-90 max-w-xs p-7 bg-sky-700 border border-gray-300 rounded-2xl shadow hover:bg-sky-800 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h6 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Reviews</h6>
          <p class="font-normal text-white dark:text-gray-400">User-averaged reviews of various travel destinations.</p>
        
          <a href="#" class="inline-flex items-center mt-5 px-3 py-2 text-sm font-medium text-center text-white bg-blue-800 rounded-lg hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 mr-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              Add review
          </a>
        </a>
      </div>
      <div id="journal">
        <a href="#" class="block opacity-90 max-w-sm p-7 bg-sky-700 border border-gray-300 rounded-2xl shadow hover:bg-sky-800 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h6 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
            Journal
          </h6>
          <p class="font-normal text-white dark:text-gray-400">Your personal travel journal.</p>
          <a href="#" class="inline-flex items-center mt-5 px-3 py-2 text-sm font-medium text-center text-white bg-blue-800 rounded-lg hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 mr-1">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            Create entry
          </a>
        </a>
      </div>
      <div id="weather">
        <a href="#" class="block opacity-90 max-w-sm p-7 bg-sky-700 border border-gray-300 rounded-2xl shadow hover:bg-sky-800 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h6 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Weather Today</h6>
          <p class="font-normal text-white dark:text-gray-400">Stockholm</p>
          <p class="font-normal text-white dark:text-gray-400">Gothenburg</p>
          <p class="font-normal text-white dark:text-gray-400">Malmö</p>
          <p class="font-normal text-white dark:text-gray-400">Uppsala</p>
          <p class="font-normal text-white dark:text-gray-400">Helsingborg</p>
          <p class="font-normal text-white dark:text-gray-400">Linköping</p>
        </a>
      </div>
      <div id="transit-planner">
        <a href="#" class="block opacity-90 max-w-sm p-7 bg-sky-700 border border-gray-300 rounded-2xl shadow hover:bg-sky-800 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h6 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
            Transit Planner
          </h6>
          <p class="font-normal text-white dark:text-gray-400">The best route to your destination using Google Maps.</p>
          <a href="#" class="inline-flex items-center mt-5 px-3 py-2 text-sm font-medium text-center text-white bg-blue-800 rounded-lg hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Find route
          </a>
        </a>
      </div>
    </div>
  );
}

export default Home;