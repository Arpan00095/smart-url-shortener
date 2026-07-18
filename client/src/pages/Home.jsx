import Navbar from "../components/common/Navbar";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import Analytics from "../components/home/Analytics";
import Testimonials from "../components/home/Testimonials";
import Pricing from "../components/home/Pricing";
import FAQ from "../components/home/FAQ";
import CTA from "../components/home/CTA";
import Footer from "../components/common/Footer";

const Home = () => {
  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen transition-colors duration-300">
      <Navbar />
      <Hero />
      <Features />
      <Analytics />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};
export default Home;