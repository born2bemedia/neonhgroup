"use client";
import React, { useState, useEffect } from "react";
import "@/styles/cases.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";

const FaqNeed = () => {

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
                            className="case-need__title">Still Have <br /> Questions?</motion.h2>
                        <motion.p
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="case-need__text">Our team is here to help. Get in touch and we’ll provide the <br /> answers you need.</motion.p>
                        <Link href="/contacts" className="case-need__link">Contact Us</Link>
                    </div>
                    <div className="case-need__col-02">
                        <img src="/images/faq-01.png" alt="image" className="case-need__image" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqNeed;