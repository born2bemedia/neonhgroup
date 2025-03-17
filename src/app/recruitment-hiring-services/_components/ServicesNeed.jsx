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
                        <h2 className="services-need__title">Need Hiring Support?</h2>
                        <p className="services-need__text">Our recruitment experts are ready to assist. Get a tailored hiring strategy to build the workforce your business needs.</p>
                        <Link href="#" className="services-need__link">Contact Us</Link>
                    </div>
                    <div className="services-need__col-02"><img src="/images/services/img-02.png" alt="image" /></div>
                </div>
            </div>
        </section>
    );
};

export default ServicesNeed;