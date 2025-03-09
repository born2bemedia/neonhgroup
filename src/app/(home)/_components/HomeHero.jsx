"use client";
import React, { useState, useEffect } from "react";
import "@/styles/home/home.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";

const HomeHero = () => {

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const bgImage = isMobile
    ? "/images/home/home-img-02.png" /* Mobile */
    : "/images/home/home-img-01.png"; /* Desktop */

  return (
    <section className="home-hero">
      <div className="home-hero__container _container">
        <div className="home-hero__body">
          <div className="home-hero__col-01">
            <h1 className="home-hero__title">NEON HR GROUP</h1>
            <p className="home-hero__text">Scalable HR solutions to meet every workforce challenge.</p>
            <div className="home-hero__buttons">
              <Link href="#" className="home-hero__link">Explore Services</Link>
              <Link href="#" className="home-hero__link">Book a Consultation</Link>
            </div>
          </div>
          <div className="home-hero__col-02">
            <img src={bgImage} alt="image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;