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
            custom={0.2}
            className="services-hero__title">Employee <br /> Assessment & Development</motion.h1>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0.3}
            className="services-hero__text">Evaluate Talent. Develop Potential. Drive Performance.</motion.p>
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
        className="services-hero__image"><img src="/images/services/img-05.jpg" alt="image" /></motion.div>
    </section>
  );
};

export default ServicesHero;