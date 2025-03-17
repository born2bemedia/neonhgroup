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
                <h1 className="services-hero__title">HR Consulting & Strategy</h1>
                <p className="services-hero__text">Optimized HR. Smarter Workforce. Stronger Business.</p>
                <Link href="#" className="services-hero__link">Book a Consultation</Link>
            </div>
        </div>
        <div className="services-hero__image"><img src="/images/services/img-03.jpg" alt="image" /></div>
    </section>
  );
};

export default ServicesHero;