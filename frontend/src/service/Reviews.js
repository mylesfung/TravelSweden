import { PublicReviewCard, PrivateReviewCard } from '../components/ReviewCard';
import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../UserContext';

export function AllReviews() {

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function getReviews() {
      try {
        const response = await fetch('http://localhost:8080/api/service/reviews');
        const data = await response.json();
        setReviews(data);
      } catch (err) {
        console.error("Error fetching reviews: ", err);
      }
    }
    getReviews();
  }, []) // empty dependency array [] ensures this only runs once on component mount (= once per page load)

  return (
    <div className="bg-gray-200 h-[calc(100vh-6.25rem)] w-full overflow-auto">
        <div className='flex flex-col flex-wrap items-center p-10 gap-10'>
            <div className='flex flex-col items-center w-3/4 align-center gap-10 md:mr-28'>
                <p className="text-3xl font-semibold">Reviews</p>
                <p className="text-lg w-1/2 text-center">A collection of user reviews of 
                 cities, towns, history, culture, nature, design innovation, and more.</p>
                <a href="/service/new-review" className="inline-flex items-center px-4 py-3 text-lg font-medium 
                text-center text-white bg-blue-900 rounded-lg hover:bg-blue-950 focus:ring-4 focus:outline-none 
                focus:ring-blue-300 dark:bg-blue-950 dark:hover:bg-blue-900 dark:focus:ring-blue-800">
                    New Review
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </a>
            </div>

            <div id="review-cards" className="flex flex-wrap gap-10 items-center justify-center">  
                {reviews.map((review, index) => (
                  <PublicReviewCard
                        key={index}
                        username={review.username}
                        title={review.title}
                        rating={review.rating}
                        description={review.description}
                        image={review.imageURL}
                    />
                ))}
            </div>
        </div>
    </div>
  );
}

export function NewReview() {

    const [username, setUsername] = useState("");
    const [title, setTitle] = useState("");
    const [rating, setRating] = useState(1);
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);

    const currentUser = useContext(UserContext);
    // setUsername(currentUser?.username);    triggers infinite re-render loop
    
    async function handleSubmit(e) {
      // e : 'SyntheticEvent' object automatically passed in by broswer upon event listener trigger
      e.preventDefault(); // stop auto-page reload before async form submission completes

      setUsername(currentUser.username);

      const formData = new FormData();
      formData.append('username', username); 
      formData.append('title', title);
      formData.append('rating', rating);
      formData.append('description', description);
      formData.append('image', image);

      try {
        const response = await fetch('http://localhost:8080/api/service/reviews', { 
          method: "POST", 
          body: formData
        });
        const status = await response.json();
        console.log(status);
      } catch (err) {
        console.error("Error posting new review: ", err);
      }

      setUsername("");
      setTitle("");
      setRating(1);
      setDescription("");
      setImage(null);
    }
  
    return (
      <div className="bg-gray-300 h-[calc(100vh-6.25rem)] w-full">
        <div className='flex flex-col flex-wrap items-center md:mr-36 p-10 gap-10'>
          <div className="text-3xl font-semibold">
            New Review
          </div>
          <div className="max-w-md p-10 bg-gray-200 border border-gray-200 rounded-lg text-md
          shadow dark:bg-gray-800 dark:border-blue-950">
            
            <form method="post" onSubmit={handleSubmit}>
              <label htmlFor="title">
                Title of review:
                <input className="w-full p-2 rounded-md"
                 type="text" value={title} name="title"
                 onChange={e => setTitle(e.target.value)}></input>
              </label>
              <br></br>
              <br></br>
  
              <label htmlFor="rating">
                Rating out of 5:
                <select className="p-1 ml-2 rounded-md" value={rating} name="rating"
                onChange={e => setRating(e.target.value)}>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </select>
              </label>
              <br></br>
              <br></br>
  
              <label htmlFor="description">
                Description (optional):
                <textarea className="h-44 w-full p-2 rounded-md" 
                type="text" value={description} name="description"
                onChange={e => setDescription(e.target.value)}></textarea>
              </label>
              <br></br>
              <br></br>
  
              <label htmlFor="image">
                Image upload (optional):
                <input type="file" name="image"
                onChange={e => setImage(e.target.files[0])}></input>  
              </label>
              <br></br>
              <br></br>
              <br></br>
           
              <input 
                className="rounded-md p-2 text-white bg-blue-900 rounded-lg hover:bg-blue-950" 
                type="submit" 
                value="Submit Review">                      
              </input>
              <a href="/service/reviews" className="ml-2 rounded-md p-3 rounded-lg hover:bg-gray-300">Cancel</a>
            </form>
          </div>
        </div>
      </div>
    );
  }

  export function MyReviews() {

    const [myReviews, setMyReviews] = useState([]);

    useEffect(() => {
      async function getMyReviews() {
        try {
          const response = await fetch(`http://localhost:8080/api/service/reviews`);
          const data = await response.json();
          setMyReviews(data);
        } catch (err) {
          console.error("Error fetching reviews for username X ", err);
        }
      }
      getMyReviews();
    }, [])

    return (
      <div className="bg-gray-300 h-[calc(100vh-6.25rem)] w-full overflow-auto">
          <div className='flex flex-col flex-wrap items-center p-10 gap-10'>
              <div className='flex flex-col items-center w-3/4 align-center gap-10 md:mr-28'>
                  <p className="text-3xl font-semibold">My Reviews</p>
                  <a href="/service/new-review" className="inline-flex items-center px-4 py-3 text-lg font-medium 
                  text-center text-white bg-blue-900 rounded-lg hover:bg-blue-950 focus:ring-4 focus:outline-none 
                  focus:ring-blue-300 dark:bg-blue-950 dark:hover:bg-blue-900 dark:focus:ring-blue-800">
                      New Review
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 ml-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                  </a>
              </div>

              <div id="review-cards" className="flex flex-wrap gap-10 items-center justify-center">  
                  {myReviews.map((review, index) => (
                    <PrivateReviewCard
                          key={index}
                          username={review.username}
                          title={review.title}
                          rating={review.rating}
                          description={review.description}
                          image={review.imageURL}
                      />
                  ))}
              </div>
          </div>
      </div>
    );
  }

  export function EditReview() {

    // Prefill form with existing GET review data fetched from backend
    // OR pass in current state from MyReviews page (?)

    const [Username, setUsername] = useState("");
    const [title, setTitle] = useState("");
    const [rating, setRating] = useState(1);
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);

    async function handleSubmit(e) {
      e.preventDefault();

      // POST edits to Postgres
    }

    return (
      <div className="bg-gray-300 h-[calc(100vh-6.25rem)] w-full">
        <div className='flex flex-col flex-wrap items-center md:mr-36 p-10 gap-10'>
          <div className="text-3xl font-semibold">
            Edit Review
          </div>
          <div className="max-w-md p-10 bg-gray-200 border border-gray-200 rounded-lg text-md
          shadow dark:bg-gray-800 dark:border-blue-950">
            
            <form method="post" onSubmit={handleSubmit}>
              <label htmlFor="title">
                Title of review:
                <input className="w-full p-2 rounded-md"
                 type="text" value={title} name="title"
                 onChange={e => setTitle(e.target.value)}></input>
              </label>
              <br></br>
              <br></br>
  
              <label htmlFor="rating">
                Rating out of 5:
                <select className="p-1 ml-2 rounded-md" value={rating} name="rating"
                onChange={e => setRating(e.target.value)}>
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
                Description (optional):
                <textarea className="h-44 w-full p-2 rounded-md" 
                type="text" value={description} name="description"
                onChange={e => setDescription(e.target.value)}></textarea>
              </label>
              <br></br>
              <br></br>
  
              <label htmlFor="image">
                Image upload (optional):
                <input type="file" name="image"
                onChange={e => setImage(e.target.files[0])}></input>  
              </label>
              <br></br>
              <br></br>
              <br></br>
           
              <input 
                className="rounded-md p-2 text-white bg-blue-900 rounded-lg hover:bg-blue-950" 
                type="submit" 
                value="Submit Edits">                      
              </input>
              <a href="/service/my-reviews" className="ml-2 rounded-md p-3 rounded-lg hover:bg-gray-300">Back</a>
            </form>
          </div>
        </div>
      </div>
    );
  }
  