export function Maintenance() {
  return (
    <div className="flex flex-col p-10 h-screen w-screen bg-gray-200">
      <h3 className="text-4xl font-bold text-gray-800 mb-4">Check back later</h3>
      <p className="text-lg text-gray-600 mb-8">Hello, this section is currently undergoing maintenance. Please check back later.</p>
      <a href="/" className="text-blue-500 hover:underline">Return to Home</a>
    </div>
  );
}