import '../../App.css';

function JournalWidget() {
  return (
    <div id="journal">
        <a href="#" class="block opacity-90 max-w-sm p-7 bg-sky-700 border border-gray-300 rounded-sm shadow">
          <h6 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
            Journal
          </h6>
          <p class="font-normal text-white dark:text-gray-400">Your personal travel journal.</p>
          <a href="/pages/ReviewsPage" class="inline-flex items-center mt-5 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Create Entry
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 ml-1">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
          </a>
        </a>
    </div>
  );
}

export default JournalWidget;