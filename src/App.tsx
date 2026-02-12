import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Methodology from "./components/Methodology";
import DashboardPreview from "./components/DashboardPreview";
import About from "./components/About";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-navy-900 text-slate-300">
      <Navbar />
      <Hero />
      <Features />
      <Methodology />
      <DashboardPreview />
      <About />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
