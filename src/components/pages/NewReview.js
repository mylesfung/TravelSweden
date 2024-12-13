import "../../App.css"

export function NewReview() {
  return (
    <div className="bg-gray-300 h-screen w-full">
      <div className='main-content flex flex-col flex-wrap items-center p-10 gap-10'>
            <div className="text-2xl font-semibold">
              New Review
            </div>
            <div className="w-96 p-8 bg-gray-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <form>
                <label for="review-title">Title of review:</label>
                <input className="w-full p-2 rounded-md" type="text" title="review-title"></input>
                <br></br>
                <br></br>

                <label className="mr-5" for="review-rating">Rating out of five:</label>
                <select className="p-1 rounded-md" name="review-rating">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
                <br></br>
                <br></br>

                <label for="review-desc">Description:</label>
                <input className="h-24 w-full p-2 rounded-md" type="text" title="review-desc"></input>
                <br></br>
                <br></br>

                <label for="review-img">Image upload (optional):</label>
                <input type="file" title="review-img"></input>
                <br></br>
                <br></br>
                <br></br>

                <input 
                  className="rounded-md p-2 text-white bg-sky-700 rounded-lg hover:bg-cyan-800" 
                  type="submit" 
                  value="Submit Review">                      
                </input>
                <a href="/pages/Reviews" className="ml-2 rounded-md p-2 rounded-lg">Cancel</a>
              </form>
            </div>
      </div>
    </div>
  );
}
