"use client";
import React, { useState, useEffect } from "react";
import "@/styles/services.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const ServicesOur = () => {

    return (
        <section className="services-oper">
            <div className="services-oper__container _container">
                <div className="services-oper__body">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.1}
                        className="services-oper__title">Our Approach to HR <br /> Operations & Outsourcing </motion.h2>
                    <div className="services-oper__items">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.2}
                            className="services-oper__item">
                            <div className="services-oper__col-01">
                                <h3 className="services-oper__label">Avoid Costly Fines & Legal Risks</h3>
                                <p className="services-oper__text">Non-compliance can lead to severe penalties, lawsuits, and reputational damage—we ensure your HR policies align with all regulations.</p>
                            </div>
                            <div className="services-oper__col-02"><img src="/images/services/services-oper-01.jpg" alt="image" /></div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="services-oper__item">
                            <div className="services-oper__col-01">
                                <h3 className="services-oper__label">Protect Your Workforce & Business Integrity</h3>
                                <p className="services-oper__text">Clear, legally sound HR frameworks safeguard employee rights, prevent disputes, and strengthen workplace trust.</p>
                            </div>
                            <div className="services-oper__col-02"><img src="/images/services/services-oper-02.jpg" alt="image" /></div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="services-oper__item">
                            <div className="services-oper__col-01">
                                <h3 className="services-oper__label">Enhance Operational Stability</h3>
                                <p className="services-oper__text">Compliance-driven HR processes reduce risks, improve workforce efficiency, and ensure smooth business operations.</p>
                            </div>
                            <div className="services-oper__col-02"><img src="/images/services/services-oper-03.jpg" alt="image" /></div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.4}
                            className="services-oper__item">
                            <div className="services-oper__col-01">
                                <h3 className="services-oper__label">Stay Ahead of Changing Regulations</h3>
                                <p className="services-oper__text">Labor laws evolve—our proactive legal strategies keep your business compliant and protected from future liabilities.</p>
                            </div>
                            <div className="services-oper__col-02"><img src="/images/services/services-oper-04.jpg" alt="image" /></div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesOur;