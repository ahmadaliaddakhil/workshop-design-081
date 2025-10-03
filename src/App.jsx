import React from "react";
import CustomNavbar from "./components/navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Pricing from "./components/Pricing/Pricing";
import Clients from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <CustomNavbar />
      <Hero />
      <Services />
      <About />
      <Pricing />
      <Clients />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
