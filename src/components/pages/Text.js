function Text(title, description) {

    /**
     * Extract title and description text from args and return in html
     */

    return (
      <div class="flex flex-col flex-wrap items-center text-center w-full h-screen bg-stockholm p-10 gap-10">
        <a href="#" class="block max-w-3xl h-full p-7 bg-gray-100 border border-gray-300 rounded-sm shadow">
          <h6 class="mb-2 text-2xl font-bold tracking-tight text-sky-950 dark:text-white">
            Lodging
          </h6>
          <p class="font-normal text-sky-950 dark:text-gray-400">
            Stay in a classic hotel, discover a new favourite or choose an accommodation by a specific hotel chain. Sweden has many great hotels in different price ranges.
          </p>
        </a>
      </div>
    );
  }
  
  export default Text;