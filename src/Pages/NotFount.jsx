import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 bg-gray-50">
      <h1 className="text-6xl md:text-7xl font-bold text-indigo-600 mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
        Page Not Found
      </h2>
      <p className="text-gray-600 mb-6 max-w-md">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-block bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
