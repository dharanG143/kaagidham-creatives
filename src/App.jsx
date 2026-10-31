
import { MotionConfig } from "framer-motion";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import ClaritySession from "./sections/ClaritySession";
import WhyKaagidham from "./sections/WhyKaagidham";
import Approach from "./sections/Approach";
import Ideas from "./sections/Ideas";
import Start from "./sections/Start";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-cream">
        <Header />
        <main>
          <Hero />
          <ClaritySession />
          <WhyKaagidham />
          <Approach />
          <Ideas />
          <Start />
          <Contact />
          <Footer />
        </main>
      </div>
    </MotionConfig>
  );
}

export default App;
