"use client";
import React, { useState, useEffect } from "react";
import "@/styles/services.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const ServicesHow = () => {

    return (
        <section className="services-how">
            <div className="services-how__container _container">
                <div className="services-how__body">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.2}
                        className="services-how__title">How HR <br /> Consulting & Strategy <br /> Optimizes Your Business</motion.h2>
                    <div className="services-how__items">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.2}
                            className="services-how__item">
                            <img src="/images/services/img-how-01.jpg" alt="image" className="services-how__image" />
                            <div className="services-how__wrapper">
                                <h3 className="services-how__label">Cut Costs & Improve Efficiency</h3>
                                <p className="services-how__text">We streamline HR operations, optimize payroll, and automate processes to reduce expenses and boost productivity.</p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="services-how__item">
                            <img src="/images/services/img-how-02.jpg" alt="image" className="services-how__image" />
                            <div className="services-how__wrapper">
                                <h3 className="services-how__label">Ensure Compliance & Minimize Risks</h3>
                                <p className="services-how__text">Our policies and legal frameworks protect your business from compliance issues, fines, and disputes.</p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.4}
                            className="services-how__item">
                            <img src="/images/services/img-how-03.jpg" alt="image" className="services-how__image" />
                            <div className="services-how__wrapper">
                                <h3 className="services-how__label">Enhance Workforce Performance</h3>
                                <p className="services-how__text">We develop goal-driven KPIs, performance systems, and leadership programs to maximize employee potential.</p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.5}
                            className="services-how__item">
                            <img src="/images/services/img-how-04.jpg" alt="image" className="services-how__image" />
                            <div className="services-how__wrapper">
                                <h3 className="services-how__label">Plan for Growth with Workforce Strategy</h3>
                                <p className="services-how__text">Talent mapping and succession planning ensure you have the right people for the expansion of the business in your or new markets.</p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.6}
                            className="services-how__item">
                            <img src="/images/services/img-how-05.jpg" alt="image" className="services-how__image" />
                            <div className="services-how__wrapper">
                                <h3 className="services-how__label">Digitize & Automate HR Processes</h3>
                                <p className="services-how__text">We implement modern HR tools for faster, data-driven decision-making and reduced administrative burden.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesHow;