import { ReviewCard, EditReviewCard } from '../components/ReviewCard';
import { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router';
import { AccountContext } from '../AccountContext';

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
  }, []); // empty dependency array [] ensures this only runs once on component mount (page render)

  return (
    <div className="bg-gray-200 h-[calc(100vh-6.25rem)] w-full overflow-auto">
        <div className='flex flex-col flex-wrap items-center p-10 gap-10'>
            <div className='flex flex-col items-center w-3/4 align-center gap-10 md:mr-28'>
                <p className="text-3xl font-semibold">Travel Stories</p>
                <p className="text-lg w-1/2 text-center">A collection of user stories of unique happenings across
                 cities, towns, history, culture, nature, design innovation, and more.</p>
                <a href="/service/new-review" className="inline-flex items-center px-4 py-3 text-lg font-medium 
                text-center text-white bg-blue-900 rounded-lg hover:bg-blue-950 focus:ring-4 focus:outline-none 
                focus:ring-blue-300 dark:bg-blue-950 dark:hover:bg-blue-900 dark:focus:ring-blue-800">
                    New Story
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </a>
            </div>

            <div id="review-cards" className="flex flex-wrap gap-10 items-center justify-center">  
                {reviews.map((review, index) => (
                  <ReviewCard
                        key={index}
                        id={review.id}
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

export function MyReviews() {

  const { account, setAccount } = useContext(AccountContext);
  const [myReviews, setMyReviews] = useState([]);

  useEffect(() => {
    async function getMyReviews() {
      if (account.username === "Anonymous") return;

      try {
        const response = await fetch(`http://localhost:8080/api/service/reviews/user?username=${account.username}`, {
          method: "GET",
          credentials: "include"
        });
        const data = await response.json();
        setMyReviews(data);
      } catch (err) {
        console.error("Error fetching reviews: ", err);
      }
    }
    getMyReviews();
  }, [account, myReviews])  // Re-render on new account, adding/deleting reviews

  return (
    <div className="bg-gray-300 h-[calc(100vh-6.25rem)] w-full overflow-auto">
        <div className='flex flex-col flex-wrap items-center p-10 gap-10'>
            <div className='flex flex-col items-center w-3/4 align-center gap-10 md:mr-28'>
                <p className="text-3xl font-semibold">My Stories</p>
                <div className='flex gap-2'>
                  <a href="/service/reviews" className="inline-flex items-center px-4 py-3 text-lg font-medium 
                text-center text-white bg-blue-900 rounded-lg hover:bg-blue-950 focus:ring-4 focus:outline-none 
                focus:ring-blue-300 dark:bg-blue-950 dark:hover:bg-blue-900 dark:focus:ring-blue-800">
                    All Stories
                </a>
                  <a href="/service/new-review" className="inline-flex items-center px-4 py-3 text-lg font-medium 
                text-center text-white bg-blue-900 rounded-lg hover:bg-blue-950 focus:ring-4 focus:outline-none 
                focus:ring-blue-300 dark:bg-blue-950 dark:hover:bg-blue-900 dark:focus:ring-blue-800">
                    New Story
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </a>
                <a href="/service/my-account" className="text-lg text-blue-950 px-5 py-3 rounded-lg hover:bg-gray-400">Back</a>
                </div>
                
                
            </div>

            <div id="review-cards" className="flex flex-wrap gap-10 items-center justify-center">  
                {myReviews.map((review, index) => (
                  <EditReviewCard
                        key={index}
                        id={review.id}
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
  const navigate = useNavigate();
  const { account, setAccount } = useContext(AccountContext);

  const [username, setUsername] = useState("");
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(1);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  
  async function submitReview(e) {
    // e : 'SyntheticEvent' object automatically passed in by broswer 
    e.preventDefault(); // prevent page auto-reload before form submits

    const formData = new FormData();
    formData.append('username', account.username); 
    formData.append('title', title);
    formData.append('rating', rating);
    formData.append('description', description);
    formData.append('image', image);

    try {
      const response = await fetch('http://localhost:8080/api/service/reviews', { 
        method: "POST", 
        credentials: "include",
        body: formData
      });
      if (response.ok) {
        navigate("/service/reviews");
      }
    } catch (err) {
      console.error("Error posting new review: ", err);
    }
  }

  return (
    <div className="bg-gray-300 h-[calc(100vh-6.25rem)] w-full">
      <div className='flex flex-col flex-wrap items-center md:mr-36 p-10 gap-10'>
        <div className="text-3xl font-semibold">
          New Story
        </div>
        <div className="max-w-md p-10 bg-gray-200 border border-gray-200 rounded-lg text-md
        shadow dark:bg-gray-800 dark:border-blue-950">
          
          <form>
            <label htmlFor="title">
              Title of story:
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
              Description:
              <textarea className="h-44 w-full p-2 rounded-md" 
              type="text" value={description} name="description"
              onChange={e => setDescription(e.target.value)}></textarea>
            </label>
            <br></br>
            <br></br>

            <label htmlFor="image">
              Image upload (.jpg/.png images accepted):
              <input type="file" name="image"
              onChange={e => setImage(e.target.files[0])}></input>  
            </label>
            <br></br>
            <br></br>
            <br></br>
          
            <button className="rounded-md p-2 text-white bg-blue-900 rounded-lg hover:bg-blue-950" type="button" 
            onClick={submitReview}>Submit</button>
            <a href="/service/reviews" className="ml-2 rounded-md p-3 rounded-lg hover:bg-gray-300">Cancel</a>
          </form>
        </div>
      </div>
    </div>
  );
}

// useParams() extracts params from React component 
export function EditReview() {
  const navigate = useNavigate();
  const { review_id } = useParams();

  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(1);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  async function submitEdits(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('id', review_id);
    formData.append('title', title);
    formData.append('rating', rating);
    formData.append('description', description);
    if (image) {formData.append('image', image);}

    try {
      const response = await fetch("http://localhost:8080/api/service/reviews", { 
        method: "PUT", 
        credentials: "include",
        body: formData
      });
      if (response.ok) {
        navigate("/service/my-reviews");
      }
    } catch (err) {
      console.error("Error posting new review: ", err);
    }
  }

  return (
    <div className="bg-gray-300 h-[calc(100vh-6.25rem)] w-full">
      <div className='flex flex-col flex-wrap items-center md:mr-36 p-10 gap-10'>
        <div className="text-3xl font-semibold">
          Edit Story
        </div>
        <div className="max-w-md p-10 bg-gray-200 border border-gray-200 rounded-lg text-md
        shadow dark:bg-gray-800 dark:border-blue-950">
          
          <form method="post" onSubmit={submitEdits}>
            <label htmlFor="title">
              Title of story:
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
              Description:
              <textarea className="h-44 w-full p-2 rounded-md" 
              type="text" value={description} name="description"
              onChange={e => setDescription(e.target.value)}></textarea>
            </label>
            <br></br>
            <br></br>

            <label htmlFor="image">
              Image upload (.jpg/.png images accepted):
              <input type="file" name="image"
              onChange={e => setImage(e.target.files[0])}></input>  
            </label>
            <br></br>
            <br></br>
            <br></br>
          
            <input 
              className="rounded-md p-2 text-white bg-blue-900 rounded-lg hover:bg-blue-950" 
              type="submit" 
              value="Submit">                      
            </input>
            <a href="/service/my-reviews" className="ml-2 rounded-md p-3 rounded-lg hover:bg-gray-300">Back</a>
          </form>
        </div>
      </div>
    </div>
  );
}

// deleteReview is a plain JS function
export function deleteReview(review_id) {

  async function execute() {
    try {
      const response = await fetch(`http://localhost:8080/api/service/reviews?id=${review_id}`, {
        method: "DELETE",
        credentials: "include"
      })
    } catch (err) {
      console.error("Failed to delete review: " + err);
    }
  }
  execute();
}
