"use client";
import React, { useState, useEffect } from "react";
import "@/styles/home/home.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";

const HomeSee = () => {

  return (
    <section className="home-see">
        <div className="home-see__container _container">
            <div className="home-see__body">
                <h2 className="home-see__title">See HR Solutions in Action</h2>
                <p className="home-see__text">Discover how expert HR strategies drive real business success. <br /> Have Questions? Find quick answers to common HR challenges.</p>
                <div className="home-see__buttons">
                    <Link href="#" className="home-see__link">Explore Market Cases</Link>
                    <Link href="#" className="home-see__link">Visit Our FAQ</Link>
                </div>
            </div>
        </div>
    </section>
  );
};

export default HomeSee;