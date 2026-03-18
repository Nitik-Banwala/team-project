import "./index.css";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Hero from "./components/Hero";
import HeroSlider from "./components/HeroSlider";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <HeroSlider />
      <Footer />
    </>
  );
}

export default App;
