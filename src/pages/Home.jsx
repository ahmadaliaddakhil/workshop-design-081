import React from "react";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import About from "../components/About/About";
import Pricing from "../components/Pricing/Pricing";
import Testimonials from "../components/Testimonials/Testimonials";
import Contact from "../components/Contact/Contact";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Pricing />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
