"use client";
import React, { useState, useEffect } from "react";
import "@/styles/cases.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const CasesHero = () => {

    return (
        <section className="cases-hero">
            <div className="cases-hero__container _container">
                <div className="cases-hero__body">
                    <motion.h1
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.2}
                        className="cases-hero__title">
                        <span>HR Success Stories</span> <br />
                        Real Cases, Real Impact
                    </motion.h1>
                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.3}
                        className="cases-hero__text">Strategic HR moves that transformed businesses.</motion.p>
                </div>
            </div>
        </section>
    );
};

export default CasesHero;