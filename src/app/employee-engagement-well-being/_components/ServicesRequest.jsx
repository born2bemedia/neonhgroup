"use client";
import React, { useState, useEffect } from "react";
import "@/styles/services.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";

const ServicesRequest = () => {

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
                        className="services-request__title">Want to Know More About <br /> How We Work?</motion.h2>
                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.3}
                        className="services-request__text">Visit our FAQ section for quick answers to common questions about our services, process, and approach.</motion.p>
                    <Link href="/Neon_hr_group_price_list.pdf" target="_blank" download className="services-request__link">
                        Download Full Price List
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 16L7 11L8.4 9.55L11 12.15V4H13V12.15L15.6 9.55L17 11L12 16ZM4 20V15H6V18H18V15H20V20H4Z" fill="white" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ServicesRequest;