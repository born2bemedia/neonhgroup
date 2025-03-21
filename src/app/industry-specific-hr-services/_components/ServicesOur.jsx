"use client";
import React, { useState, useEffect } from "react";
import "@/styles/services.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const ServicesOur = () => {

    return (
        <section className="services-why">
            <div className="services-why__container _container">
                <div className="services-why__body">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.2}
                        className="services-why__title">Why Industry-Specific HR <br /> Solutions Are Critical for <br /> Business Growth</motion.h2>
                    <div className="services-why__items">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.1}
                            className="services-why__item">
                            <div className="services-why__col-01">
                                <h3 className="services-why__label">Right Talent for the Right Industry</h3>
                                <p className="services-why__text">Generic hiring doesn’t work—specialized HR ensures your workforce has the exact skills and expertise needed to drive success in your sector.</p>
                            </div>
                            <div className="services-why__col-02"><img src="/images/services/services-why-01.jpg" alt="image" /></div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.2}
                            className="services-why__item">
                            <div className="services-why__col-01">
                                <h3 className="services-why__label">Compliance & Risk Management</h3>
                                <p className="services-why__text">Each industry has unique labor laws. Industry-specific HR strategies keep you compliant and reduce legal risks and operational disruptions.</p>
                            </div>
                            <div className="services-why__col-02"><img src="/images/services/services-why-02.jpg" alt="image" /></div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="services-why__item">
                            <div className="services-why__col-01">
                                <h3 className="services-why__label">Scalable Workforce Solutions</h3>
                                <p className="services-why__text">Whether expanding locally or globally, tailored HR services ensure seamless scaling with workforce strategies built for your industry’s demands.</p>
                            </div>
                            <div className="services-why__col-02"><img src="/images/services/services-why-03.jpg" alt="image" /></div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.4}
                            className="services-why__item">
                            <div className="services-why__col-01">
                                <h3 className="services-why__label">Higher Productivity & Competitive Edge</h3>
                                <p className="services-why__text">HR solutions aligned with industry best practices enhance efficiency, reduce turnover, and create a workforce that drives innovation and growth.</p>
                            </div>
                            <div className="services-why__col-02"><img src="/images/services/services-why-04.jpg" alt="image" /></div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesOur;