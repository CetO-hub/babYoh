import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import babyHero from "../assets/img/baby_hero.jpg";
import babyHeroMobile from "../assets/img/baby_hero_handy.png";

const Welcome = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Navigation />
      <div className="row hero">
        <div className="hero__image-container">
          <img
            src={isMobile ? babyHeroMobile : babyHero}
            data-testid="hero-image"
          />
        </div>
      </div>
    </>
  );
};

export default Welcome;
