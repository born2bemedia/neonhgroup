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
                    <h2 className="services-request__title">Request Our <br /> Full Pricing Details</h2>
                    <p className="services-request__text">Get a detailed breakdown of our Employee Assessment & Development services and find the best solution for your workforce needs.</p>
                    <Link href="#" download className="services-request__link">
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