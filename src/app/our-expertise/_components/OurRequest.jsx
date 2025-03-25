"use client";
import React, { useState, useEffect } from "react";
import "@/styles/services.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";

const OurRequest = () => {

    return (
        <section className="services-request">
            <div className="services-request__container _container">
                <div className="services-request__body">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.2}
                        className="services-request__title">Request Our <br /> Full Pricing Details</motion.h2>
                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.3}
                        className="services-request__text">Get a detailed breakdown of our Employee Engagement & Well-being services and discover the best strategies to enhance workplace satisfaction and retention.</motion.p>
                    <Link href="/faq" className="services-request__link">
                        Go to FAQ
                        <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.8015 10.7918L3.16536 10.7918L3.16536 9.20845L12.8015 9.20845L8.55503 4.96195L9.67445 3.84253L15.832 10.0001L9.67445 16.1577L8.55503 15.0383L12.8015 10.7918Z" fill="white" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default OurRequest;