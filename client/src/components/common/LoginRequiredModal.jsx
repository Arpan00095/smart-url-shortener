import { Link } from "react-router-dom";

const LoginRequiredModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div className="bg-white rounded-2xl shadow-2xl w-[90%] max-w-md p-8">

        <div className="text-5xl text-center mb-4">
          🔒
        </div>

        <h2 className="text-2xl font-bold text-center">
          Login Required
        </h2>

        <p className="text-gray-500 text-center mt-3">
          Please login or create an account to use LinkNova tools.
        </p>

        <div className="mt-8 flex flex-col gap-3">

          <Link
            to="/login"
            className="bg-blue-600 text-white py-3 rounded-xl text-center font-semibold hover:bg-blue-700"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="bg-purple-600 text-white py-3 rounded-xl text-center font-semibold hover:bg-purple-700"
          >
            Create Account
          </Link>

          <button
            onClick={onClose}
            className="border rounded-xl py-3 hover:bg-gray-100"
          >
            Cancel
          </button>

        </div>

      </div>

    </div>
  );
};

export default LoginRequiredModal;