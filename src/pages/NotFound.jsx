import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center">
        <FaExclamationTriangle className="text-yellow-500 text-6xl mx-auto mb-5" />

        <h1 className="text-7xl font-bold text-blue-600">
          404
        </h1>

        <h2 className="text-2xl font-semibold text-gray-800 mt-3">
          Page Not Found
        </h2>

        <p className="text-gray-500 mt-3">
          The page you are looking for does not exist.
        </p>

        <Link
          to="/dashboard"
          className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default NotFound;