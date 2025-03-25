"use client";
import React, { useState, useEffect } from "react";
import "@/styles/cases.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const CaseHero = () => {

    return (
        <section className="case-hero _three">
            <div className="case-hero__container _container">
                <div className="case-hero__body">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.2}
                        className="case-hero__label">A people-first HR approach that transformed staff into brand ambassadors—and powered long-term growth.</motion.h2>
                    <motion.h1
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.3}
                        className="case-hero__title">
                        Starbucks Case Study: Employee <br /> Engagement That Fueled Global <br /> Expansion
                    </motion.h1>
                </div>
            </div>
        </section>
    );
};

export default CaseHero;