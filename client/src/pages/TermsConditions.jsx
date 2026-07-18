const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">


      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">


        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
          Terms & <span className="text-blue-600">Conditions</span>
        </h1>


        <p className="mt-5 text-lg text-slate-600 dark:text-slate-400">
          Please read these terms carefully before using LinkNova services.
        </p>


        <p className="mt-3 text-sm text-slate-500 dark:text-slate-500">
          Last Updated: July 2026
        </p>


      </section>




      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 pb-20">


        <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl p-8 md:p-10 border border-slate-200 dark:border-slate-800 space-y-8">


          <TermsSection
            title="1. Acceptance of Terms"
            text="By accessing or using LinkNova, you agree to follow these Terms & Conditions. If you do not agree with any part of these terms, please discontinue using our services."
          />



          <TermsSection
            title="2. User Accounts"
            text="Users are responsible for maintaining the security of their accounts and providing accurate information during registration."
          />



          <TermsSection
            title="3. URL Usage Rules"
            text="Users must not create links that contain illegal, harmful, abusive, or misleading content. LinkNova reserves the right to remove violating links."
          />



          <TermsSection
            title="4. Prohibited Activities"
            text="You may not use LinkNova for spam, phishing, malware distribution, fraud, or any activity that violates applicable laws."
          />



          <TermsSection
            title="5. Link Management"
            text="Users are responsible for the URLs they create and share using LinkNova features including custom aliases and protected links."
          />



          <TermsSection
            title="6. Service Availability"
            text="We work to keep LinkNova reliable, but we cannot guarantee uninterrupted availability at all times."
          />



          <TermsSection
            title="7. Account Termination"
            text="We may suspend or terminate accounts that violate these terms or misuse the platform."
          />



          <TermsSection
            title="8. Limitation of Liability"
            text="LinkNova is not responsible for losses caused by misuse of the service, third-party websites, or user-generated content."
          />



          <TermsSection
            title="9. Changes to Terms"
            text="We may update these Terms & Conditions from time to time. Continued use of LinkNova after updates means you accept the revised terms."
          />



          <TermsSection
            title="10. Contact Us"
            text="For any questions regarding these Terms & Conditions, please contact our support team through the Contact page."
          />


        </div>


      </section>


    </div>
  );
};





const TermsSection = ({ title, text }) => {
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




export default TermsConditions;