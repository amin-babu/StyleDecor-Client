import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="h-[70vh] pt-16 flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        {/* Illustration */}
        <div className="mb-6">
          <h1 className="text-7xl font-extrabold text-primary">404</h1>
        </div>

        <h2 className="text-2xl font-semibold mb-2">
          Page Not Found
        </h2>

        <p className="text-gray-500 mb-6">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        <div className="flex justify-center gap-3">
          <Link to="/" className="btn btn-primary">
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="btn btn-outline"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
