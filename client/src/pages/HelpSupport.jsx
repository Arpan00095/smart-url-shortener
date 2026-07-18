import { useState } from "react";
import { FaChevronDown, FaHeadset } from "react-icons/fa";


const HelpSupport = () => {

  const [openIndex, setOpenIndex] = useState(null);


  const faqs = [
    {
      question: "What is LinkNova?",
      answer:
        "LinkNova is a professional URL management platform that helps you create short links, track analytics, generate QR codes, and manage your digital links easily."
    },
    {
      question: "How can I shorten a URL?",
      answer:
        "Simply login to your LinkNova dashboard, enter your long URL, and click the shorten button to create a short link."
    },
    {
      question: "Can I create custom aliases?",
      answer:
        "Yes, LinkNova allows you to create custom aliases so your short links become more memorable and professional."
    },
    {
      question: "What analytics does LinkNova provide?",
      answer:
        "You can track clicks, devices, locations, and other visitor insights through the analytics dashboard."
    },
    {
      question: "Can I generate QR Codes?",
      answer:
        "Yes, you can generate QR codes for your short URLs and share them anywhere."
    },
    {
      question: "Are my links secure?",
      answer:
        "Yes, LinkNova supports password protected URLs and security features to keep your links safe."
    },
    {
      question: "How can I contact support?",
      answer:
        "You can contact our support team through the Contact page for assistance."
    }
  ];



  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">


      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">


        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
          Help & <span className="text-blue-600">Support</span>
        </h1>


        <p className="mt-5 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">
          Find answers to common questions or get help with LinkNova features.
        </p>


      </section>




      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 pb-20">


        <div className="space-y-4">


          {faqs.map((faq, index) => (

            <div
              key={index}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden"
            >


              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex justify-between items-center p-6 text-left"
              >

                <span className="font-semibold text-slate-900 dark:text-white">
                  {faq.question}
                </span>


                <FaChevronDown
                  className={`text-blue-600 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />

              </button>




              {openIndex === index && (

                <div className="px-6 pb-6 text-slate-600 dark:text-slate-400">

                  {faq.answer}

                </div>

              )}


            </div>

          ))}


        </div>


      </section>




      {/* Support CTA */}
      <section className="max-w-5xl mx-auto px-6 pb-20">


        <div className="bg-blue-600 rounded-3xl p-10 text-center">


          <FaHeadset className="text-white text-4xl mx-auto mb-5" />


          <h2 className="text-3xl font-bold text-white">
            Need More Help?
          </h2>


          <p className="mt-3 text-blue-100">
            Our support team is ready to assist you with any questions.
          </p>


          <a
            href="/contact"
            className="inline-block mt-6 bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-slate-100 transition"
          >
            Contact Support
          </a>


        </div>


      </section>


    </div>
  );
};


export default HelpSupport;