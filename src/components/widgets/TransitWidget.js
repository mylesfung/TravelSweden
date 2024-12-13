function TransitWidget() {
    return (
        <div id="transit-planner">
            <a href="#" className="block opacity-95 max-w-sm p-7 bg-sky-700 border border-gray-300 rounded-sm shadow">
                <h6 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
                    Transit Planner
                </h6>
                <p className="font-normal text-white dark:text-gray-400">The best route to your destination using Google Maps.</p>
                <a href="#" className="inline-flex items-center mt-5 px-3 py-2 text-sm font-medium text-center text-white bg-sky-800 rounded-lg hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-sky-800 dark:hover:bg-sky-700 dark:focus:ring-blue-800">
                    Find route
                </a>
            </a>
        </div>
    )
}

export default TransitWidget;