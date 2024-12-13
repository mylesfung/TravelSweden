import '../../App.css';
import uppsala from '../../images/uppsala-biking.jpg';
import floss from '../../images/floss-picks.jpeg';

import { ReviewCard } from "./ReviewCard";

export function Reviews() {

  /**
   * Each review has:
   *    review_id
   *    uid
   *    rating
   *    description
   *    image (optional)  
   * 
   * Var: store current user's reviews
   * 
   * Func: render stored user reviews
   * 
   *  
   */


  return (
    <div className="bg-gray-200 h-screen w-full">
        <div className='main-content flex flex-col flex-wrap items-center p-10 gap-10'>
            <div className="text-2xl font-semibold">
            Reviews
            </div>
            <p className="text-lg w-1/2 text-center">A collection of reviews from the TravelSweden community on Swedish nature, history/culture, design innovation, nearby cities, and everything in between.</p>
            <div className="text-xl">
            <a href="/pages/NewReview" className="inline-flex items-center mt-5 px-3 py-2 text-sm font-medium text-center text-white bg-sky-700 rounded-lg hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-sky-800 dark:hover:bg-sky-700 dark:focus:ring-blue-800">
                    Write Review
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
            </a>
            </div>



            <div className="flex flex-wrap gap-10">
                <div className="max-w-xs h-fit bg-gray-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="rounded" src={uppsala} alt="sweden-image" />
                    </a>
                    <div className="p-8">
                        <a href="#">
                            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Uppsala Biking Tour</h5>
                        </a>
                        <a>
                            Rating: 5/5
                        </a>
                        <hr></hr>
                        <br></br>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">With bike rentals available and dedicated cycle lanes almost everywhere, Uppsala is perfect for biking.</p>
                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-sky-700 rounded-lg hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-sky-800 dark:hover:bg-sky-700 dark:focus:ring-blue-800">
                            Read more
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                </div>
                
                <div className="max-w-xs h-fit bg-gray-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="rounded" src={floss} alt="sweden-image" />
                    </a>
                    <div className="p-8">
                        <a href="#">
                            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Interesting Floss Picks</h5>
                        </a>
                        <a>
                            Rating: 4/5
                        </a>
                        <hr></hr>
                        <br></br>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Overpriced but has pros: easy access to molars, mint- and charcoal-infused, double-stranded.</p>
                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-sky-700 rounded-lg hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-sky-800 dark:hover:bg-sky-700 dark:focus:ring-blue-800">
                            Read more
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                </div>

                <ReviewCard />

                <ReviewCard />
                
            </div>
        </div>

    </div>
  );
}