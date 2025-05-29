"use client";
import React, { useState, useEffect } from "react";
import "@/styles/services.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";

const SolutionsNeed = () => {

    return (
        <section className="services-need">
            <div className="services-need__container _container">
                <div className="services-need__body">
                    <div className="services-need__col-01">
                        <motion.h2
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.1}
                            className="services-need__title">Need a Tailored HR <br /> Solution?</motion.h2>
                        <motion.p
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.2}
                            className="services-need__text">Our HR experts are ready to assist. Get a personalized consultation to find the right HR strategy, optimization plan, or workforce solution for your business.</motion.p>
                        <Link href="/contacts" className="services-need__link">Contact Us</Link>
                    </div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.3}
                        className="services-need__col-02"><img src="/images/services/img-15.png" alt="image" /></motion.div>
                </div>
            </div>
        </section>
    );
};

export default SolutionsNeed;