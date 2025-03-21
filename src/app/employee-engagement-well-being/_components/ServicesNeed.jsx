"use client";
import React, { useState, useEffect } from "react";
import "@/styles/services.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";

const ServicesNeed = () => {

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
                            custom={0.2}
                            className="services-need__title">Need Employee <br /> Engagement & <br /> Well-being <br /> Support?</motion.h2>
                        <p className="services-need__text">Our HR specialists are ready to help. Get a personalized consultation to improve retention, enhance workplace culture, and boost employee satisfaction.</p>
                        <Link href="#" className="services-need__link">Contact Us</Link>
                    </div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.3}
                        className="services-need__col-02"><img src="/images/services/img-12.png" alt="image" /></motion.div>
                </div>
            </div>
        </section>
    );
};

export default ServicesNeed;