"use client";
import React, { useState, useEffect } from "react";
import "@/styles/services.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";

const ServicesOur = () => {

    return (
        <section className="services-our">
            <div className="services-our__container _container">
                <div className="services-our__body">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.2}
                        className="services-our__title">Our Approach to <br /> Employee Assessment & <br /> Development</motion.h2>
                    <div className="services-our__items">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.2}
                            className="services-our__item">
                            <div className="services-our__col-01">
                                <h3 className="services-our__label">Data-Driven Talent Evaluation</h3>
                                <p className="services-our__text">We use AI-powered assessment tools, real-world simulations, and competency-based testing to deliver objective, measurable insights into employee skills and potential.</p>
                            </div>
                            <div className="services-our__col-02"><img src="/images/services/our-service-01.jpg" alt="image" /></div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="services-our__item">
                            <div className="services-our__col-01">
                                <h3 className="services-our__label">Behavioral & Leadership Profiling</h3>
                                <p className="services-our__text">Our psychometric evaluations, cognitive ability tests, and behavioral analytics help identify high-potential leaders, team dynamics, and areas for growth in your workforce.</p>
                            </div>
                            <div className="services-our__col-02"><img src="/images/services/our-service-02.jpg" alt="image" /></div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.4}
                            className="services-our__item">
                            <div className="services-our__col-01">
                                <h3 className="services-our__label">Personalized Growth Plans</h3>
                                <p className="services-our__text">We design personalized employee development plans based on assessment results, ensuring targeted training, leadership coaching, and upskilling initiatives align with business goals.</p>
                            </div>
                            <div className="services-our__col-02"><img src="/images/services/our-service-03.jpg" alt="image" /></div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.5}
                            className="services-our__item">
                            <div className="services-our__col-01">
                                <h3 className="services-our__label">Industry-Specific Benchmarking</h3>
                                <p className="services-our__text">We compare your employees’ performance against industry standards and competitor benchmarks, providing clear growth strategies and workforce optimization plans.
                                </p>
                            </div>
                            <div className="services-our__col-02"><img src="/images/services/our-service-04.jpg" alt="image" /></div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesOur;