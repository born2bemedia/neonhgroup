"use client";
import React, { useState, useEffect } from "react";
import "@/styles/our.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const OurWhat = () => {

    return (
        <section className="out-what">
            <div className="out-what__container _container">
                <div className="out-what__body">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.2}
                        className="out-what__title">What Sets <br /> Our Expertise Apart</motion.h2>
                    <div className="out-what__items">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="out-what__item">
                            <h3 className="out-what__label">360° HR Coverage</h3>
                            <p className="out-what__text">We offer a complete service portfolio across all HR domains:</p>
                            <ul className="out-what__list">
                                <li className="out-what__li">Talent acquisition, planning, and performance management</li>
                                <li className="out-what__li">Payroll, outsourcing, compliance, and legal frameworks</li>
                                <li className="out-what__li">Employee engagement, leadership, and industry-specific strategies</li>
                            </ul>
                            <img src="/images/our/our-what-01.jpg" alt="image" className="out-what__image" />
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.4}
                            className="out-what__item">
                            <h3 className="out-what__label">Data-Driven Decision Making</h3>
                            <p className="out-what__text">Every recommendation is backed by insight:</p>
                            <ul className="out-what__list">
                                <li className="out-what__li">Quantitative performance benchmarks</li>
                                <li className="out-what__li">Our workforce audits identify an average of 17 structural inefficiencies per client</li>
                                <li className="out-what__li">Clients see a 22–35% improvement in employee retention within the first 6 months of engagement</li>
                            </ul>
                            <img src="/images/our/our-what-02.jpg" alt="image" className="out-what__image" />
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="out-what__item">
                            <h3 className="out-what__label">Scalable for Any Business Model</h3>
                            <p className="out-what__text">Whether you're hiring your first employee or managing cross-border teams, our solutions scale with your operations. We specialize in:</p>
                            <ul className="out-what__list">
                                <li className="out-what__li">Multi-location HR harmonization</li>
                                <li className="out-what__li">Remote and hybrid workforce models</li>
                                <li className="out-what__li">High-volume recruitment and onboarding</li>
                                <li className="out-what__li">Crisis and compliance response</li>
                            </ul>
                            <img src="/images/our/our-what-03.jpg" alt="image" className="out-what__image" />
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.4}
                            className="out-what__item">
                            <h3 className="out-what__label">Expert-Led Delivery</h3>
                            <p className="out-what__text">Our team includes specialists in the following human resources domains:</p>
                            <ul className="out-what__list">
                                <li className="out-what__li">Employment law and international compliance</li>
                                <li className="out-what__li">HR technology and automation</li>
                                <li className="out-what__li">Organizational psychology and leadership assessment</li>
                                <li className="out-what__li">Workforce analytics and restructuring</li>
                            </ul>
                            <img src="/images/our/our-what-04.jpg" alt="image" className="out-what__image" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurWhat;