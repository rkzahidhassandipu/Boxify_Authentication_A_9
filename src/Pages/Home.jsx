import React from "react";
import SubscriptionBox from "../Components/SubscriptionBox";
import HeroSlider from "../Components/HeroSlider";
import ServiceHeader from "../Components/ServiceHeader";
import HeroSection from "../Components/HeroSection";
import OurService from "../Components/OurService";
import { Helmet } from "react-helmet";
import PageTitle from "../Components/PageTitle";

const Home = () => {
  return (
    <main className="">
      <PageTitle title={"Home page"} />
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
