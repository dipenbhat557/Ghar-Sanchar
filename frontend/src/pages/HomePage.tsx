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
import RecentUpdates from "../components/RecentUpdates";
import Society from "../components/Society";
import Subscription from "../components/Subscription";

const HomePage = () => {
  return (
    <>
      <HeroHeader />
      <Navbar />
      <Hero />
      <BreakingNews />
      <LatestNews />
      <Politics />
      <RecentUpdates />
      <Disasters />
      <BreakingNews />
      <Society />
      <Lifestyle />
      <Subscription />
      <Food />
      <RecentUpdates />
      <Footer />
    </>
  );
};
export default HomePage;
