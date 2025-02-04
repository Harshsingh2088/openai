import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Benefits from "./sections/Benefits";
import Collaboration from "./sections/Collaboration";
import Roadmap from "./sections/Roadmap";
import Services from "./sections/Services";
import Pricing from "./sections/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppChat from "./components/WhatsAppChat";
import ExploreMorePage from "./pages-dummy/ExploreMorePage";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Benefits />
                {/* <Collaboration /> */}
                <Roadmap />
                {/* <Services /> */}
                <Pricing />
                <Contact />
              </>
            }
          />
          <Route path="/explore-more" element={<ExploreMorePage />} />
        </Routes>
        <Footer />
      </div>

      <div className="fixed bottom-1 right-2" style={{ zIndex: "6", left: "initial" }}>
        <WhatsAppChat />
      </div>
    </>
  );
};

export default App; 


