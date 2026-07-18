import { Link } from "react-router-dom";
import { FaHome, FaArrowLeft } from "react-icons/fa";


const NotFound = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center px-6 transition-colors duration-300">


      <div className="text-center max-w-xl">


        {/* 404 Number */}
        <h1 className="text-[120px] md:text-[160px] font-extrabold text-blue-600 leading-none">
          404
        </h1>



        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-4">
          Page Not Found
        </h2>



        {/* Description */}
        <p className="mt-5 text-lg text-slate-600 dark:text-slate-400">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>



        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">


          <Link
            to="/"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
          >
            <FaHome />
            Go Home
          </Link>



          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            <FaArrowLeft />
            Go Back
          </button>


        </div>



        {/* Branding */}
        <p className="mt-10 text-sm text-slate-500 dark:text-slate-500">
          Powered by <span className="text-blue-600 font-semibold">LinkNova</span>
        </p>


      </div>


    </div>
  );
};


export default NotFound;