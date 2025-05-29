"use client";
import React, { useState, useEffect } from "react";
import "@/styles/services.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import OrderButton from "@/components/OrderButton";

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
            custom={0.1}
            className="services-hero__title">Legal & Compliance Services</motion.h1>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0.2}
            className="services-hero__text">Stay Compliant. Minimize Risk. Protect Your Business with Expert HR Legal Solutions.</motion.p>
          <OrderButton
            className={"services-hero__link"}
            text={"Book a Consultation"}
            service={"Book a Consultation"}
          />
        </div>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        custom={0.3}
        className="services-hero__image"><img src="/images/services/img-09.jpg" alt="image" /></motion.div>
    </section>
  );
};

export default ServicesHero;