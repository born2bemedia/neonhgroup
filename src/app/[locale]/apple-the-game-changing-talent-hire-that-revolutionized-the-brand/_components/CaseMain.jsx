"use client";
import React, { useState, useEffect } from "react";
import "@/styles/cases.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const CaseMain = () => {

    return (
        <section className="case-main">
            <div className="case-main__container _container">
                <div className="case-main__body">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.2}
                        className="case-main__title">The HR Decision</motion.h2>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.3}
                        className="case-main__text">
                        1998, Apple was struggling—its product line was bloated, inventory was piling up, and operational inefficiencies were draining the company. That same year, Steve Jobs made a critical HR move: he hired Tim Cook as Senior Vice President of Worldwide Operations.
                        <br />
                        Cook wasn’t a flashy designer or visionary product leader—he was a logistics and operations expert. But that’s exactly what Apple needed. He came from Compaq and deeply understood supply chain management and scalable production models.
                    </motion.div>
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.3}
                        className="case-main__title">What Changed</motion.h2>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.3}
                        className="case-main__text">
                        Within months of joining, Cook overhauled Apple’s supply chain, implementing a lean, just-in-time inventory system, closing underperforming factories, and reducing the number of suppliers. He shifted Apple from a company trying to do everything to one that relied on strategic outsourcing and operational excellence.
                        <ul>
                            <li>Inventory turnover improved dramatically</li>
                            <li>Production costs were cut without sacrificing quality</li>
                            <li>Product delivery became faster and more reliable</li>
                            <li>The company became scalable without ballooning overhead</li>
                        </ul>
                        These operational improvements freed up resources for Apple to focus on design, innovation, and customer experience—what the world knows it for today.
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CaseMain;