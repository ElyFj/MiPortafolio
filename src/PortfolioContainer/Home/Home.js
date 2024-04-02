import React, { useRef }from "react";

import Profile from "./Profile/Profile";
import Footer from "./Footer/Footer";
import "./Home.css";
import AboutMe from "../AboutMe/AboutMe";
import Resume from "../Resume/Resume";
import ContactMe from "../ContactMe/ContactMe";
 


export default function Home() {
  const ContactMeRef = useRef(null);

  const handleContratameClick = () => {
    // Desplazarse al componente ContactMe
    ContactMeRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="home-container">
      <Profile handleContratameClick={handleContratameClick}/>
      <AboutMe />
      <Resume/>
      <div ref={ContactMeRef}>
      <ContactMe/>
      </div>
      <Footer />
    </div>
  );
}
