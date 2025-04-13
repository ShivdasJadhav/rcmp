import { Link } from "react-router-dom";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-4">
      <AlertCircle className="text-red-500 w-16 h-16 mb-4" />
      <h1 className="text-4xl font-bold text-gray-800">404 - Page Not Found</h1>
      <p className="text-gray-600 mt-2 text-lg">Oops! The page you are looking for does not exist.</p>
      <Link
        to="/"
        className="mt-6 px-6 py-2 bg-blue-600 text-white text-lg font-medium rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        Go Home
      </Link>
    </div>
  );
}
