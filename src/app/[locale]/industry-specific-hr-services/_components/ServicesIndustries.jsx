"use client";
import React, { useState, useEffect } from "react";
import "@/styles/services.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const ServicesIndustries = () => {

    return (
        <section className="services-industries">
            <div className="services-industries__container _container">
                <div className="services-industries__body">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.1}
                        className="services-industries__title">Industries We Serve</motion.h2>
                    <div className="services-industries__items">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.1}
                            className="services-industries__item">
                            <img src="/images/services/service-icon-01.svg" alt="image" className="services-industries__icon" />
                            <h3 className="services-industries__label">Tech & IT</h3>
                            <p className="services-industries__text">Hiring the wrong tech talent can lead to costly delays and security risks. Our expert-driven approach ensures skilled developers and engineers who align with your business needs.</p>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.2}
                            className="services-industries__item">
                            <img src="/images/services/service-icon-02.svg" alt="image" className="services-industries__icon" />
                            <h3 className="services-industries__label">Finance & Banking</h3>
                            <p className="services-industries__text">The finance sector demands precision and regulatory compliance. We provide HR solutions that secure top financial professionals while ensuring risk-free hiring.</p>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="services-industries__item">
                            <img src="/images/services/service-icon-03.svg" alt="image" className="services-industries__icon" />
                            <h3 className="services-industries__label">Healthcare & Medical Staffing</h3>
                            <p className="services-industries__text">In healthcare, staff shortages and underqualified hires can be critical. Our solutions connect you with certified professionals to maintain high-quality patient care.</p>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.4}
                            className="services-industries__item">
                            <img src="/images/services/service-icon-04.svg" alt="image" className="services-industries__icon" />
                            <h3 className="services-industries__label">Manufacturing & Industrial Workforce</h3>
                            <p className="services-industries__text">Inefficient workforce management can halt production and increase costs. We ensure skilled labor supply and seamless workforce operations.</p>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.1}
                            className="services-industries__item">
                            <img src="/images/services/service-icon-05.svg" alt="image" className="services-industries__icon" />
                            <h3 className="services-industries__label">Retail & Hospitality</h3>
                            <p className="services-industries__text">High turnover in these industries reduces customer experience and operational efficiency. Our hiring solutions deliver reliable, service-driven professionals.</p>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.2}
                            className="services-industries__item">
                            <img src="/images/services/service-icon-06.svg" alt="image" className="services-industries__icon" />
                            <h3 className="services-industries__label">Creative & Marketing</h3>
                            <p className="services-industries__text">Generic hiring fails to find the right creative talent. We source highly skilled designers, marketers, and content creators to elevate your brand.</p>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="services-industries__item">
                            <img src="/images/services/service-icon-07.svg" alt="image" className="services-industries__icon" />
                            <h3 className="services-industries__label">Legal & Compliance</h3>
                            <p className="services-industries__text">Mishires in legal and compliance can expose your business to major risks. Our staffing ensures highly qualified legal and regulatory professionals.</p>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.4}
                            className="services-industries__item">
                            <img src="/images/services/service-icon-08.svg" alt="image" className="services-industries__icon" />
                            <h3 className="services-industries__label">Real Estate & Construction</h3>
                            <p className="services-industries__text">Delays and compliance issues can cost projects millions. We provide workforce planning solutions to ensure smooth and timely execution.</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesIndustries;