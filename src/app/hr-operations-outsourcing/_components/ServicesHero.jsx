"use client";
import React, { useState, useEffect } from "react";
import "@/styles/services.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";

const ServicesHero = () => {

  return (
    <section className="services-hero">
      <div className="services-hero__container _container">
        <div className="services-hero__body">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0.2}
            className="services-hero__title">Employee <br /> Assessment & Development</motion.h1>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0.3}
            className="services-hero__text">Streamline. Optimize. Scale. Efficient HR solutions tailored for your business.</motion.p>
          <Link href="#" className="services-hero__link">Book a Consultation</Link>
        </div>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        custom={0.4}
        className="services-hero__image"><img src="/images/services/img-07.jpg" alt="image" /></motion.div>
    </section>
  );
};

export default ServicesHero;