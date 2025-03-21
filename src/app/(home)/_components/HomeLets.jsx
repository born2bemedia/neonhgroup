"use client";
import React, { useState, useEffect } from "react";
import "@/styles/home/home.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import RequestForm from "@/components/RequestForm";

const HomeLets = () => {

    return (
        <section className="home-lets">
            <div className="home-lets__container _container">
                <div className="home-lets__body">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.2}
                        className="home-lets__title">Let’s Solve Your HR Challenge</motion.h2>
                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.3}
                        className="home-lets__text">Tell us what you need, and we’ll craft a tailored solution for your business.</motion.p>
                    <div className="home-lets__content">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.4}
                            className="home-lets__col-01">
                            <RequestForm />
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.5}
                            className="home-lets__col-02"><img src="/images/home/home-img-11.png" alt="image" /></motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeLets;