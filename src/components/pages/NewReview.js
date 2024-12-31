export function NewReview() {
  /**
   * Each review has:
   *    Number  review_id
   *    Number  uid
   *    String  title
   *    Number  rating
   *    String  description
   *    File    image (optional)  
   */


  function submitReview(e) {
    // e : 'event object' automatically passed in by broswer
    //      upon event listener trigger (onSubmit)
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    // POST to PostgreSQL w/ logged-in user's review_id & uid 
    fetch('cool-api.com', { method: form.method, body: formData });   
  }

  return (
    <div className="bg-gray-300 h-[calc(100vh-5rem)] w-full">
      <div className='flex flex-col flex-wrap items-center p-10 gap-10'>
        <div className="text-2xl font-semibold">
          New Review
        </div>
        <div className="w-96 p-8 bg-gray-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          
          <form method="post" onSubmit={submitReview}>
            <label htmlFor="title">
              Title of review:
              <input className="w-full p-2 rounded-md" name="title"></input>
            </label>
            <br></br>
            <br></br>

            <label htmlFor="rating">
              Rating out of five:
              <select className="p-1 ml-2 rounded-md" name="rating">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </label>
            <br></br>
            <br></br>

            <label htmlFor="description">
              Description:
              <input className="h-24 w-full p-2 rounded-md" name="description"></input>
            </label>
            <br></br>
            <br></br>

            <label htmlFor="image">
              Image upload (optional):
              <input type="file" name="image"></input>
            </label>
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
