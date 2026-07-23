import { FaFolderOpen } from "react-icons/fa";

const ProtectedFolders = () => {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-lg p-8">

      <div className="flex items-center gap-3 mb-4">
        <FaFolderOpen className="text-3xl text-blue-600" />

        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          Protected Folders
        </h2>
      </div>

      <p className="text-slate-600 dark:text-slate-400">
        Manage all your password protected folders from one place.
      </p>

      <div className="mt-10 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-2xl py-20 text-center">

        <FaFolderOpen className="mx-auto text-6xl text-slate-300 dark:text-slate-700 mb-5" />

        <h3 className="text-2xl font-semibold text-slate-700 dark:text-white">
          No Protected Folders Yet
        </h3>

        <p className="mt-3 text-slate-500 dark:text-slate-400">
          Create your first password protected folder to see it here.
        </p>

      </div>

    </div>
  );
};

export default ProtectedFolders;