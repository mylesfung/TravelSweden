export function Maintenance() {
  return (
    <div className="flex flex-col p-10 text-center h-[calc(100vh-6.25rem)] w-screen bg-gray-200">
      <h3 className="text-4xl font-bold text-gray-800 mb-4">Check back later</h3>
      <p className="text-lg text-gray-600 mb-8">Hello, this section is currently undergoing maintenance. 
        Please check back later.</p>
      <a href="/" className="text-blue-500 hover:underline">Return to Home</a>
    </div>
  );
}

export function AccountRequired() {
  return (
    <div className="flex flex-col p-10 text-center h-[calc(100vh-6.25rem)] w-screen bg-gray-200">
      <h3 className="text-4xl font-bold text-gray-800 mb-4">Account Required</h3>
      <p className="text-lg text-gray-600 mb-8">You must be signed in to access this section. 
        Please 
        <a href="/services/sign-in" className="text-blue-500 hover:underline"> sign in </a> 
        or 
        <a href="/services/create-account" className="text-blue-500 hover:underline"> create an account. </a>
        </p>
      <a href="/" className="text-blue-500 hover:underline">Return to Home</a>
    </div>
  );
}