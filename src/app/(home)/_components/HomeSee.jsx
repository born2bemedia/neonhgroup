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
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0.2}
            className="home-see__title">See HR Solutions in Action</motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0.3}
            className="home-see__text">Discover how expert HR strategies drive real business success. <br /> Have Questions? Find quick answers to common HR challenges.</motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0.4}
            className="home-see__buttons">
            <Link href="/cases" className="home-see__link">Explore Market Cases</Link>
            <Link href="/faq" className="home-see__link">Visit Our FAQ</Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeSee;