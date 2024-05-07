// pages/index.js

import Navbar from "../app/components/navbar";
import HeroSection from "../app/components/herosection";
import Footer from "../app/components/footer";
import HomePage from "../app/components/homepage";

export default function Home() {
  return (
    <div className=" bg-black ">
      <Navbar />
      <HeroSection />
      <HomePage />
      <Footer />
    </div>
  );
}
