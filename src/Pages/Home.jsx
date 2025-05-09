import React from "react";
import SubscriptionBox from "../Components/SubscriptionBox";
import HeroSlider from "../Components/HeroSlider";
import ServiceHeader from "../Components/ServiceHeader";
import HeroSection from "../Components/HeroSection";
import OurService from "../Components/OurService";

const Home = () => {
  return (
    <main className="">
      <div className="h-screen">
        <HeroSlider />
      </div>
      <div className="w-4/5 mx-auto">
        <SubscriptionBox />
        <HeroSection />
        <OurService />
      </div>
    </main>
  );
};

export default Home;
