"use client";
import React, { useState, useEffect } from "react";
import "@/styles/services.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const ServicesOur = () => {

    return (
        <section className="services-app">
            <div className="services-app__container _container">
                <div className="services-app__body">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.2}
                        className="services-app__title">Our Approach to HR <br /> Operations & Outsourcing </motion.h2>
                    <div className="services-app__items">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.1}
                            className="services-app__item">
                            <div className="services-app__col-01">
                                <h3 className="services-app__label">Fully Integrated HR Management</h3>
                                <p className="services-app__text">We provide end-to-end HR solutions, from payroll and compliance to employee onboarding and records management. No fragmented processes—just seamless, centralized HR operations.</p>
                            </div>
                            <div className="services-app__col-02"><img src="/images/services/our-app-01.jpg" alt="image" /></div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.2}
                            className="services-app__item">
                            <div className="services-app__col-01">
                                <h3 className="services-app__label">Scalable & Custom-Tailored Outsourcing</h3>
                                <p className="services-app__text">Your HR needs evolve, and so do our solutions. Whether you require partial outsourcing, complete HR department management, or project-based support, we adapt to your business model, ensuring flexibility without compromise.</p>
                            </div>
                            <div className="services-app__col-02"><img src="/images/services/our-app-02.jpg" alt="image" /></div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="services-app__item">
                            <div className="services-app__col-01">
                                <h3 className="services-app__label">Advanced HR Automation & Technology</h3>
                                <p className="services-app__text">We leverage HR software, AI-powered analytics, and digital workforce solutions to streamline operations, eliminate inefficiencies, and reduce administrative workload—saving time and costs.</p>
                            </div>
                            <div className="services-app__col-02"><img src="/images/services/our-app-03.jpg" alt="image" /></div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.4}
                            className="services-app__item">
                            <div className="services-app__col-01">
                                <h3 className="services-app__label">Compliance-First Approach with Risk Mitigation</h3>
                                <p className="services-app__text">We ensure full legal compliance, risk management, and labor law alignment, helping businesses avoid fines, lawsuits, and operational disruptions. HR isn’t a liability with us—it’s a secure, optimized function that drives business stability.
                                </p>
                            </div>
                            <div className="services-app__col-02"><img src="/images/services/our-app-04.jpg" alt="image" /></div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesOur;