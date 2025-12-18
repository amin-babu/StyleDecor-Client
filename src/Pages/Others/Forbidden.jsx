import { Link } from "react-router";
import { FaLock } from "react-icons/fa";

const Forbidden = () => {
  return (
    <div className="h-[90vh] flex items-center justify-center bg-base-200 px-4">
      <div className="text-center bg-white p-10 rounded-2xl shadow-xl max-w-md">
        
        <div className="flex justify-center mb-4">
          <FaLock className="text-6xl text-error" />
        </div>

        <h1 className="text-5xl font-bold text-error mb-2">403</h1>

        <h2 className="text-2xl font-semibold mb-4">
          Forbidden
        </h2>

        <p className="text-gray-600 mb-6">
          Oops! <br />
          You don’t have permission to access this page.
        </p>

        <Link to="/" className="btn btn-primary rounded-full px-6">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default Forbidden;
