export function PublicReviewCard({ username, title, rating, description, image }) {
    return (
        <div className="max-w-xs h-fit bg-gray-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a>
                {image && <img className="rounded mx-auto" src={`http://localhost:8080${encodeURI(image)}`} alt="review-image" />}
            </a>
            <div className="p-8 text-lg">
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
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
                <a href="../pages/Maintenance" className="inline-flex items-center px-3 py-2 font-medium 
                text-center text-white bg-sky-700 rounded-lg hover:bg-cyan-800 focus:ring-4 
                focus:outline-none focus:ring-blue-300 dark:bg-sky-800 dark:hover:bg-sky-700 
                dark:focus:ring-blue-800">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>
    )
}

export function PrivateReviewCard({ username, title, rating, description, image }) {

    return (
        <div className="max-w-xs h-fit bg-gray-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a>
                {image && <img className="rounded mx-auto" src={`http://localhost:8080${encodeURI(image)}`} alt="review-image" />}
            </a>
            <div className="p-8 text-lg">
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
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
                <a href="../services/edit-review" className="inline-flex items-center px-3 py-2 font-medium 
                text-center text-white bg-sky-700 rounded-lg hover:bg-cyan-800 focus:ring-4 
                focus:outline-none focus:ring-blue-300 dark:bg-sky-800 dark:hover:bg-sky-700 
                dark:focus:ring-blue-800">
                    Edit review
                </a>
                <a className="inline-flex items-center ml-2 px-3 py-2 font-medium 
                text-center text-white bg-red-800 rounded-lg hover:bg-red-900 focus:ring-4 
                focus:outline-none focus:ring-blue-300 dark:bg-sky-800 dark:hover:bg-sky-700 
                dark:focus:ring-blue-800">
                    Delete review
                </a>
            </div>
        </div>
    )
}