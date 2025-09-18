import { deleteAccount } from "../service/Reviews";
import { useNavigate } from "react-router";

export function ReviewCard({ id, username, title, rating, description, image }) {
    return (
        <div className="max-w-xs h-fit bg-gray-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-blue-950">
            <a>
                {image && <img className="p-4 rounded mx-auto" src={`http://localhost:8080${image}`} alt="story-image" />}
            </a>
            <div className="p-8 text-md">
                <a>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight 
                    text-gray-900 dark:text-white">{title}</h5>
                </a>
                <p>
                    Author: {username}    
                </p>
                <p>
                    Rating: {rating}/5
                </p>
                <hr></hr>
                <br></br>
                <p className="mb-3 font-normal text-blue-950 dark:text-gray-400">{description}</p>
            </div>
        </div>
    )
}

export function EditReviewCard({ id, username, title, rating, description, image }) {
    const navigate = useNavigate();
    
    return (
        <div className="max-w-xs h-fit bg-gray-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-blue-950">
            <a>
                {image && <img className="rounded mx-auto" src={`http://localhost:8080${image}`} alt="story-image" />}
            </a>
            <div className="p-8 text-md">
                <a>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight 
                    text-gray-900 dark:text-white">{title}</h5>
                </a>
                <p>
                    Author: {username}    
                </p>
                <p>
                    Rating: {rating}/5
                </p>
                <hr></hr>
                <br></br>
                <p className="mb-3 font-normal text-blue-950 dark:text-gray-400">{description}</p>
                <button onClick={() => navigate(`/service/edit-review/${id}`)} className="inline-flex items-center px-5 py-2 font-medium 
                text-center text-white bg-blue-900 rounded-lg hover:bg-blue-950 focus:ring-4 
                focus:outline-none focus:ring-blue-300 dark:bg-blue-950 dark:hover:bg-blue-900 
                dark:focus:ring-blue-800">
                    Edit
                </button>
                <button onClick={() => deleteAccount(id)} className="inline-flex items-center ml-2 px-3 py-2 font-medium 
                text-center text-white bg-red-800 rounded-lg hover:bg-red-900 focus:ring-4 
                focus:outline-none focus:ring-blue-300 dark:bg-blue-950 dark:hover:bg-red-900 
                dark:focus:ring-blue-800">
                    Delete
                </button>
            </div>
        </div>
    )
}