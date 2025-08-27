import uppsala from '../images/uppsala-biking.jpg';
import floss from '../images/floss-picks.jpeg';
import { ReviewCard } from '../components/ReviewCard';

export function Reviews() {
  
  let reviews = []; // replace by assigning 'reviews' to GET all-reviews-array from PostgreSQL 
  
  

  return (
    <div className="bg-gray-200 h-[calc(100vh-5rem)] w-full overflow-auto">
        <div className='flex flex-col flex-wrap items-center md:mr-36 p-10 gap-10'>
            <p className="text-3xl font-semibold">Reviews</p>
            <p className="text-xl w-1/2 text-center">A collection of reviews from the TravelSweden community on Swedish nature, history/culture, design innovation, nearby cities, and everything in between.</p>
            
            <a href="/pages/NewReview" className="inline-flex items-center px-3 py-2 text-lg font-medium 
            text-center text-white bg-sky-700 rounded-lg hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-sky-800 dark:hover:bg-sky-700 dark:focus:ring-blue-800">
                Write Review
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 ml-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </a>
            <div id="review-cards" className="flex flex-wrap gap-10">  

                <ReviewCard 
                    id={"Veronica Maggio"}
                    uid={false}
                    title={"Uppsala Biking Tour"}
                    rating={5}
                    description={"With bike rentals available and dedicated cycle lanes almost everywhere, Uppsala is perfect for biking."}
                    image={uppsala}
                />
                <ReviewCard 
                    id={"Håkan Hellström"}
                    uid={false}
                    title={"Interesting Floss Picks"}
                    rating={4}
                    description={"Overpriced but has pros: easy access to molars, mint- and charcoal-infused, double-stranded."}
                    image={floss}
                />

                {reviews.map((review) => (
                    <ReviewCard 
                        id={false}
                        uid={false}
                        title={"Interesting Floss Picks"}
                        rating={4}
                        description={"Overpriced but has pros: easy access to molars, mint- and charcoal-infused, double-stranded."}
                        image={floss}
                    />
                ))}
            </div>
        </div>
    </div>
  );
}

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
        <div className='flex flex-col flex-wrap items-center md:mr-36 p-10 gap-10'>
          <div className="text-3xl font-semibold">
            New Review
          </div>
          <div className="w-96 p-8 bg-gray-200 border border-gray-200 rounded-lg text-lg
          shadow dark:bg-gray-800 dark:border-gray-700">
            
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
                <textarea className="h-44 w-full p-2 rounded-md" name="description"></textarea>
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
  