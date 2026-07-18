import { FaChevronRight } from "react-icons/fa";

const ToolCards = ({ tools, activeTool, setActiveTool }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

      {tools.map((tool) => (

        <div
          key={tool.id}
          onClick={() => setActiveTool(tool.id)}
          className={`group cursor-pointer rounded-2xl border p-5 transition-all duration-300 ${
            activeTool === tool.id
              ? "border-blue-600 bg-blue-50 dark:bg-slate-800 shadow-xl"
              : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:border-blue-500 hover:shadow-xl"
          }`}
        >

          <div className="mb-4">
            {tool.icon}
          </div>

          <h4 className="text-xl font-bold text-slate-800 dark:text-white">
            {tool.title}
          </h4>

          <p className="text-slate-500 dark:text-slate-400 mt-2">
            {tool.description}
          </p>

          <div className="flex items-center mt-5 text-blue-600 dark:text-blue-400 font-semibold">
            Open Tool

            <FaChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </div>

        </div>

      ))}

    </div>
  );
};

export default ToolCards;