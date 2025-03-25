"use client";
import React, { useState, useEffect } from "react";
import "@/styles/cases.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const CaseHero = () => {

    return (
        <section className="case-hero _one">
            <div className="case-hero__container _container">
                <div className="case-hero__body">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.2}
                        className="case-hero__label">One key talent. One HR decision. A complete business turnaround.</motion.h2>
                    <motion.h1
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.3}
                        className="case-hero__title">
                        Apple Case Study: Strategic Hiring That <br />
                        Transformed a Company
                    </motion.h1>
                </div>
            </div>
        </section>
    );
};

export default CaseHero;