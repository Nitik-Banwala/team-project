import "./index.css";
import Footer from "./components/common/Footer";
import Hero from "./components/Hero";
import HeroSlider from "./components/HeroSlider";
import PupiloTopic from "./components/PupiloTopic";
import Innovators from "./components/Innovators";
import Families from "./components/Families";
import Blogs from "./components/Blogs";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <HeroSlider />
      <PupiloTopic />
      <Innovators/>
      <Families />
       <Blogs/>
      <Footer />
    </>
  );
}

export default App;
