import { FaEnvelope, FaComments, FaHeadset } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">

        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
          Contact <span className="text-blue-600">LinkNova</span>
        </h1>

        <p className="mt-5 max-w-2xl mx-auto text-slate-600 dark:text-slate-400 text-lg">
          Have questions, feedback, or need support? Our team is here to help
          you build and manage your links better.
        </p>

      </section>


      {/* Contact Cards */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">


        {/* Email Support */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-800">

          <FaEnvelope className="text-blue-600 mb-4 text-3xl" />

          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
            Email Support
          </h3>

          <p className="mt-2 text-slate-600 dark:text-slate-400">
            support@linknova.com
          </p>

        </div>



        {/* General Queries */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-800">

          <FaComments className="text-purple-600 mb-4 text-3xl" />

          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
            General Queries
          </h3>

          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Ask us anything about LinkNova.
          </p>

        </div>



        {/* Technical Support */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-800">

          <FaHeadset className="text-green-600 mb-4 text-3xl" />

          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
            Technical Support
          </h3>

          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Need help? Our team will assist you.
          </p>

        </div>


      </section>



      {/* Contact Form */}
      <section className="max-w-4xl mx-auto px-6 py-20">

        <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl p-8 border border-slate-200 dark:border-slate-800">


          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            Send us a Message
          </h2>



          <form className="space-y-5">


            <div className="grid md:grid-cols-2 gap-5">


              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-5 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
              />



              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-5 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
              />


            </div>



            <input
              type="text"
              placeholder="Subject"
              className="w-full px-5 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
            />



            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full px-5 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />



            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
            >
              Send Message
            </button>


          </form>


        </div>

      </section>


    </div>
  );
};


export default Contact;