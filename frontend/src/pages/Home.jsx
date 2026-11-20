import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedAuthors from "../components/FeaturedAuthors";
import FeaturedBooks from "../components/FeaturedBooks";
import LatestPoems from "../components/LatestPoems";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturedAuthors />
      <FeaturedBooks />
      <LatestPoems />
      <Footer />
    </div>
  );
}

export default Home;