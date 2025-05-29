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
                        custom={0.1}
                        className="services-our__title">Our Approach to <br /> Workforce Formation</motion.h2>
                    <div className="services-our__items">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.2}
                            className="services-our__item">
                            <div className="services-our__col-01">
                                <h3 className="services-our__label">Precision Talent Matching</h3>
                                <p className="services-our__text">We don’t just fill positions—we find the right candidates who align with your business goals, culture, and long-term vision.</p>
                            </div>
                            <div className="services-our__col-02"><img src="/images/services/services-our-01.jpg" alt="image" /></div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="services-our__item">
                            <div className="services-our__col-01">
                                <h3 className="services-our__label">Speed & Efficiency</h3>
                                <p className="services-our__text">With optimized processes and advanced sourcing techniques, we reduce hiring time while ensuring quality recruitment.</p>
                            </div>
                            <div className="services-our__col-02"><img src="/images/services/services-our-02.jpg" alt="image" /></div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="services-our__item">
                            <div className="services-our__col-01">
                                <h3 className="services-our__label">Global Reach, Local Expertise</h3>
                                <p className="services-our__text">From executive search to international recruitment, we connect businesses with top professionals worldwide while understanding local market dynamics.</p>
                            </div>
                            <div className="services-our__col-02"><img src="/images/services/services-our-03.jpg" alt="image" /></div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.4}
                            className="services-our__item">
                            <div className="services-our__col-01">
                                <h3 className="services-our__label">Flexible & Scalable Solutions</h3>
                                <p className="services-our__text">Whether you need one key hire or a full workforce expansion, our tailored recruitment services adapt to your business needs.</p>
                            </div>
                            <div className="services-our__col-02"><img src="/images/services/services-our-04.jpg" alt="image" /></div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesOur;