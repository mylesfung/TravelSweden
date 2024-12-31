import flag from '../../images/sweden-flag.png';
import uppsala from '../../images/uppsala-biking.jpg';
import floss from '../../images/floss-picks.jpeg';

function ReviewCard({ id = false, uid = false, title, rating, description, image = flag }) {
    return (
        <div className="max-w-xs h-fit bg-gray-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="rounded mx-auto" src={image} alt="sweden-flag" />
            </a>
            <div className="p-8">
                <a href="#">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                </a>
                <p>
                    Author: {id}
                </p>
                <p>
                    Rating: {rating}/5
                </p>
                <hr></hr>
                <br></br>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-sky-700 rounded-lg hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-sky-800 dark:hover:bg-sky-700 dark:focus:ring-blue-800">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>
    )
}

export function Reviews() {
  
  let reviews = []; // replace by assigning 'reviews' to GET all-reviews-array from PostgreSQL  

  return (
    <div className="bg-gray-200 h-[calc(100vh-5rem)] w-full overflow-auto">
        <div className='w-fit flex flex-col flex-wrap items-center p-10 gap-10'>
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