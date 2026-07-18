const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">

        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
          Privacy <span className="text-blue-600">Policy</span>
        </h1>

        <p className="mt-5 text-slate-600 dark:text-slate-400 text-lg">
          Your privacy and data security are important to us.
        </p>

        <p className="mt-3 text-sm text-slate-500 dark:text-slate-500">
          Last Updated: July 2026
        </p>

      </section>



      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 pb-20">


        <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl p-8 md:p-10 border border-slate-200 dark:border-slate-800 space-y-8">


          <PolicySection
            title="1. Introduction"
            text="Welcome to LinkNova. This Privacy Policy explains how we collect, use, and protect your information when you use our URL management platform."
          />



          <PolicySection
            title="2. Information We Collect"
            text="We may collect account information such as your name, email address, profile details, created URLs, and usage information required to provide our services."
          />



          <PolicySection
            title="3. How We Use Your Information"
            text="We use collected information to provide services, improve platform performance, maintain security, analyze usage, and communicate important updates."
          />



          <PolicySection
            title="4. URL Data and Analytics"
            text="LinkNova may collect link performance data including clicks, device information, and general location data to provide analytics features."
          />



          <PolicySection
            title="5. Cookies"
            text="We may use cookies and similar technologies to improve user experience, maintain sessions, and understand platform usage."
          />



          <PolicySection
            title="6. Data Security"
            text="We implement reasonable security measures to protect your personal information from unauthorized access, modification, or disclosure."
          />



          <PolicySection
            title="7. Third Party Services"
            text="We may use trusted third-party services for authentication, database management, analytics, and hosting purposes."
          />



          <PolicySection
            title="8. Account Deletion"
            text="Users may request account deletion. Upon verification, we will process deletion requests according to applicable requirements."
          />



          <PolicySection
            title="9. Contact Us"
            text="If you have questions regarding this Privacy Policy, please contact our support team through the Contact page."
          />


        </div>


      </section>


    </div>
  );
};




const PolicySection = ({ title, text }) => {
  return (
    <div>

      <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">
        {title}
      </h2>

      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
        {text}
      </p>

    </div>
  );
};



export default PrivacyPolicy;