import BreakingNews from "../components/BreakingNews";
import Disasters from "../components/Disasters";
import Food from "../components/Food";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HeroHeader from "../components/HeroHeader";
import LatestNews from "../components/LatestNews";
import Lifestyle from "../components/Lifestyle";
import Navbar from "../components/Navbar";
import Politics from "../components/Politics";
import Society from "../components/Society";
import Subscription from "../components/Subscription";

const HomePage = () => {
  return (
    <>
      <HeroHeader />
      <Navbar />
      <Hero />
      <BreakingNews bgColor="#04594D" />
      <LatestNews />
      <Politics />
      <Disasters />
      <BreakingNews bgColor="#04594D" />
      <Society />
      <Lifestyle />
      <Subscription />
      <Food />
      <Footer />
    </>
  );
};
export default HomePage;
