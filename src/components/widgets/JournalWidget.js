import '../../App.css';

export function JournalWidget() {
  return (
    <div id="journal">
        <a href="#" className="block opacity-95 max-w-sm p-7 bg-sky-700 border border-gray-300 rounded-sm shadow">
          <h6 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
            Journal
          </h6>
          <p className="font-normal text-white dark:text-gray-400">Your personal travel journal.</p>
          <a href="/pages/ReviewsPage" className="inline-flex items-center mt-5 px-3 py-2 text-sm font-medium text-center text-white bg-sky-800 rounded-lg hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-sky-800 dark:hover:bg-sky-700 dark:focus:ring-blue-800">
                Create Entry
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 ml-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
          </a>
        </a>
    </div>
  );
}
