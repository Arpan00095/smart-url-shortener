import {
  FaLink,
  FaChartLine,
  FaQrcode,
  FaShieldAlt,
  FaRocket,
  FaUsers
} from "react-icons/fa";


const About = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">


      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">

        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
          About <span className="text-blue-600">LinkNova</span>
        </h1>

        <p className="mt-5 max-w-3xl mx-auto text-lg text-slate-600 dark:text-slate-400">
          LinkNova is a modern URL management platform designed to help
          individuals and businesses create, manage, and analyze short links
          with powerful tools.
        </p>

      </section>



      {/* About Content */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">


        <div>

          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-5">
            Simplifying Link Management
          </h2>


          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
            LinkNova helps you transform long URLs into clean, shareable links
            while providing detailed insights about your audience.
          </p>


          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            From custom aliases and password protected URLs to QR generation
            and analytics tracking, LinkNova provides everything you need to
            manage your digital links professionally.
          </p>


        </div>



        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl border border-slate-200 dark:border-slate-800">


          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            Our Mission
          </h3>


          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Our mission is to make link sharing smarter, faster, and more
            secure by providing powerful tools that help users understand
            their audience and improve their online presence.
          </p>


        </div>


      </section>




      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-20">


        <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-10">
          Why Choose LinkNova?
        </h2>



        <div className="grid md:grid-cols-3 gap-6">



          <FeatureCard
            icon={<FaLink />}
            title="Smart URL Shortening"
            text="Create short, memorable, and professional links instantly."
          />



          <FeatureCard
            icon={<FaChartLine />}
            title="Advanced Analytics"
            text="Track clicks, locations, devices, and audience behavior."
          />



          <FeatureCard
            icon={<FaQrcode />}
            title="Custom QR Codes"
            text="Generate QR codes for easy sharing and marketing."
          />



          <FeatureCard
            icon={<FaShieldAlt />}
            title="Secure Links"
            text="Protect your links with passwords and security controls."
          />



          <FeatureCard
            icon={<FaRocket />}
            title="Fast Performance"
            text="Experience quick redirects and reliable service."
          />



          <FeatureCard
            icon={<FaUsers />}
            title="Built For Everyone"
            text="Perfect for creators, businesses, and teams."
          />


        </div>


      </section>




      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 pb-20">


        <div className="bg-blue-600 rounded-3xl p-10 text-center">


          <h2 className="text-3xl font-bold text-white">
            Ready to manage your links smarter?
          </h2>


          <p className="mt-4 text-blue-100">
            Join LinkNova and take control of your digital links today.
          </p>


        </div>


      </section>


    </div>
  );
};




const FeatureCard = ({ icon, title, text }) => {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-800">


      <div className="text-blue-600 text-3xl mb-4">
        {icon}
      </div>


      <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
        {title}
      </h3>


      <p className="text-slate-600 dark:text-slate-400">
        {text}
      </p>


    </div>
  );
};



export default About;