import { ReviewCard } from "../ReviewCard";

import uppsala from '../../images/uppsala-biking.jpg';
import floss from '../../images/floss-picks.jpeg';
import '../../App.css';

export function Reviews() {
  
  let reviews = []; // replace by assigning 'reviews' to GET all-reviews-array from PostgreSQL  

  return (
    <div className="bg-gray-200 h-[calc(100vh-5rem)] w-full overflow-auto">
        <div className='main-content flex flex-col flex-wrap items-center p-10 gap-10'>
            <p className="text-2xl font-semibold">Reviews</p>
            <p className="text-lg w-1/2 text-center">A collection of reviews from the TravelSweden community on Swedish nature, history/culture, design innovation, nearby cities, and everything in between.</p>
            
            <a href="/pages/NewReview" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-sky-700 rounded-lg hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-sky-800 dark:hover:bg-sky-700 dark:focus:ring-blue-800">
                Write Review
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 ml-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </a>
            <div id="review-cards" className="flex flex-wrap gap-10">  

                <ReviewCard 
                    id={false}
                    uid={false}
                    title={"Uppsala Biking Tour"}
                    rating={5}
                    description={"With bike rentals available and dedicated cycle lanes almost everywhere, Uppsala is perfect for biking."}
                    image={uppsala}
                />
                <ReviewCard 
                    id={false}
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