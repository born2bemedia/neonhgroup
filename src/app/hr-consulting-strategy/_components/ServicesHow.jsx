"use client";
import React, { useState, useEffect } from "react";
import "@/styles/services.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const ServicesHow = () => {

    return (
        <section className="services-how">
            <div className="services-how__container _container">
                <div className="services-how__body">
                    <h2 className="services-how__title">How HR <br /> Consulting & Strategy <br /> Optimizes Your Business</h2>
                    <div className="services-how__items">
                        <div className="services-how__item">
                            <img src="/images/services/img-how-01.jpg" alt="image" className="services-how__image" />
                            <div className="services-how__wrapper">
                                <h3 className="services-how__label">Cut Costs & Improve Efficiency</h3>
                                <p className="services-how__text">We streamline HR operations, optimize payroll, and automate processes to reduce expenses and boost productivity.</p>
                            </div>
                        </div>
                        <div className="services-how__item">
                            <img src="/images/services/img-how-02.jpg" alt="image" className="services-how__image" />
                            <div className="services-how__wrapper">
                                <h3 className="services-how__label">Ensure Compliance & Minimize Risks</h3>
                                <p className="services-how__text">Our policies and legal frameworks protect your business from compliance issues, fines, and disputes.</p>
                            </div>
                        </div>
                        <div className="services-how__item">
                            <img src="/images/services/img-how-03.jpg" alt="image" className="services-how__image" />
                            <div className="services-how__wrapper">
                                <h3 className="services-how__label">Enhance Workforce Performance</h3>
                                <p className="services-how__text">We develop goal-driven KPIs, performance systems, and leadership programs to maximize employee potential.</p>
                            </div>
                        </div>
                        <div className="services-how__item">
                            <img src="/images/services/img-how-04.jpg" alt="image" className="services-how__image" />
                            <div className="services-how__wrapper">
                                <h3 className="services-how__label">Plan for Growth with Workforce Strategy</h3>
                                <p className="services-how__text">Talent mapping and succession planning ensure you have the right people for the expansion of the business in your or new markets.</p>
                            </div>
                        </div>
                        <div className="services-how__item">
                            <img src="/images/services/img-how-05.jpg" alt="image" className="services-how__image" />
                            <div className="services-how__wrapper">
                                <h3 className="services-how__label">Digitize & Automate HR Processes</h3>
                                <p className="services-how__text">We implement modern HR tools for faster, data-driven decision-making and reduced administrative burden.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesHow;