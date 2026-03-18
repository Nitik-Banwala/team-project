import "./index.css";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Hero from "./components/Hero";
import HeroSlider from "./components/HeroSlider";
import PupiloTopic from "./components/PupiloTopic";
import Families from "./components/Families";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <HeroSlider />
      <PupiloTopic />
      <Families />
      {/* <Footer /> */}
    </>
  );
}

export default App;
