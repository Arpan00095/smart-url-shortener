import {
  FaCheckCircle,
  FaServer,
  FaDatabase,
  FaLink,
  FaQrcode,
} from "react-icons/fa";


const SystemStatus = () => {
  const systems = [
    {
      name: "Website",
      description: "LinkNova web application",
      icon: <FaServer />,
      status: "Operational",
    },
    {
      name: "API Services",
      description: "URL creation and management APIs",
      icon: <FaLink />,
      status: "Operational",
    },
    {
      name: "Database",
      description: "User data and link storage",
      icon: <FaDatabase />,
      status: "Operational",
    },
    {
      name: "QR Generator",
      description: "QR code generation service",
      icon: <FaQrcode />,
      status: "Operational",
    },
  ];


  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">


      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">

        <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-5" />

        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
          System <span className="text-blue-600">Status</span>
        </h1>


        <p className="mt-5 text-lg text-slate-600 dark:text-slate-400">
          All LinkNova services are currently running normally.
        </p>


        <div className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-green-100 text-green-700 font-semibold">
          <FaCheckCircle />
          All Systems Operational
        </div>

      </section>




      {/* Status Cards */}
      <section className="max-w-5xl mx-auto px-6 pb-20">


        <div className="space-y-5">


          {systems.map((system, index) => (

            <div
              key={index}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-lg flex items-center justify-between"
            >


              <div className="flex items-center gap-5">


                <div className="text-blue-600 text-3xl">
                  {system.icon}
                </div>


                <div>

                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    {system.name}
                  </h3>


                  <p className="text-slate-600 dark:text-slate-400">
                    {system.description}
                  </p>

                </div>


              </div>



              <span className="flex items-center gap-2 text-green-600 font-semibold">

                <FaCheckCircle />

                {system.status}

              </span>


            </div>

          ))}


        </div>



        <p className="text-center mt-10 text-sm text-slate-500">
          Last updated: July 2026
        </p>


      </section>


    </div>
  );
};


export default SystemStatus;