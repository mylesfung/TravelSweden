import "../../App.css";

function Text(title, description) {

    /**
     * Extract title and description text from args and return in html
     */

    return (
      <div class="flex flex-col flex-wrap items-center text-center w-full h-screen bg-stockholm p-10 gap-10">
        <a id="text-box" class="block h-full p-7 bg-gray-100 border border-gray-300 rounded-sm shadow">
          <h6 id="title-text" class="mb-2 text-2xl font-bold tracking-tight text-sky-950 dark:text-white">
            
          </h6>
          <hr></hr>
          <br></br>
          <p id="body-text" class="font-normal text-sky-950 dark:text-gray-400">
            
          </p>
        </a>
      </div>
    );
  }
  
  export default Text;