import { motion } from "framer-motion";

const StatsCard = ({ title, value, icon, color }) => {

  return (

    <motion.div

      whileHover={{
        y: -6,
        scale: 1.03,
      }}

      transition={{
        duration:0.25,
      }}

      className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 p-6"

    >

      <div className="flex justify-between items-center">


        <div>

          <p className="text-slate-500 dark:text-slate-400">
            {title}
          </p>


          <h2 className="text-3xl font-bold mt-3 text-slate-800 dark:text-white">
            {value}
          </h2>


        </div>



        <div
          className={`w-14 h-14 rounded-xl flex items-center justify-center text-white text-2xl ${color}`}
        >

          {icon}

        </div>


      </div>


    </motion.div>

  );

};


export default StatsCard;