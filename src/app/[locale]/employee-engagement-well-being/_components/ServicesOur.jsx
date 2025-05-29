"use client";
import React, { useState, useEffect } from "react";
import "@/styles/services.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const ServicesOur = () => {

    return (
        <section className="services-well">
            <div className="services-well__container _container">
                <div className="services-well__body">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.2}
                        className="services-well__title">Employee Engagement & <br /> Well-being</motion.h2>
                    <div className="services-well__items">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="services-well__item">
                            <div className="services-well__col-01">
                                <h3 className="services-well__label">Boost Productivity & Performance</h3>
                                <p className="services-well__text">Engaged and healthy employees work smarter, innovate faster, and drive business success.</p>
                            </div>
                            <div className="services-well__col-02"><img src="/images/services/services-well-01.jpg" alt="image" /></div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="services-well__item">
                            <div className="services-well__col-01">
                                <h3 className="services-well__label">Reduce Turnover & Hiring Costs</h3>
                                <p className="services-well__text">A strong well-being strategy keeps top talent, lowers attrition, and saves on recruitment expenses.</p>
                            </div>
                            <div className="services-well__col-02"><img src="/images/services/services-well-02.jpg" alt="image" /></div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.4}
                            className="services-well__item">
                            <div className="services-well__col-01">
                                <h3 className="services-well__label">Enhance Workplace Culture & Reputation</h3>
                                <p className="services-well__text">Companies prioritizing employee well-being attract better talent and build a strong employer brand.</p>
                            </div>
                            <div className="services-well__col-02"><img src="/images/services/services-well-03.jpg" alt="image" /></div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.5}
                            className="services-well__item">
                            <div className="services-well__col-01">
                                <h3 className="services-well__label">Prevent Burnout & Reduce Absenteeism</h3>
                                <p className="services-well__text">A well-supported workforce means fewer sick days, lower stress levels, and a healthier work environment.</p>
                            </div>
                            <div className="services-well__col-02"><img src="/images/services/services-well-04.jpg" alt="image" /></div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesOur;