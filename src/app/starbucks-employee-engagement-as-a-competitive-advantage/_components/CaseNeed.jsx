"use client";
import React, { useState, useEffect } from "react";
import "@/styles/cases.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";

const CaseNeed = () => {

    return (
        <section className="case-need">
            <div className="case-need__container _container">
                <div className="case-need__body">
                    <div className="case-need__col-01">
                        <motion.h2
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.2}
                            className="case-need__title">Need Expert <br /> Guidance?</motion.h2>
                        <motion.p
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="case-need__text">Our HR specialists are ready to help. Get a personalized consultation to find the right solutions for your business.</motion.p>
                        <Link href="/contacts" className="case-need__link">Contact Us</Link>
                    </div>
                    <div className="case-need__col-02">
                        <img src="/images/cases/img-01.png" alt="image" className="case-need__image" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CaseNeed;