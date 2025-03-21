"use client";
import React, { useState, useEffect } from "react";
import "@/styles/solutions.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import OrderButton from "@/components/OrderButton";
import MarkDark from "@/icons/other/MarkDark";

const SolutionsDesign = () => {

    return (
        <section className="solutions-design">
            <div className="solutions-design__container _container">
                <div className="solutions-design__body">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.1}
                        className="solutions-design__title">Designed to Tackle <br /> Specific Business <br /> Challenges</motion.h2>
                    <div className="solutions-design__items">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.2}
                            className="solutions-design__item">
                            <img src="/images/services/solutions-icon-01.svg" alt="icon" className="solutions-design__icon"></img>
                            <h3 className="solutions-design__package">Initial HR Setup</h3>
                            <p className="solutions-design__text">
                                For new businesses establishing HR foundations
                                <br />
                                <br />
                                We set up fully structured HR processes, ensuring compliance, efficiency, and smooth operations from day one.
                            </p>
                            <ul className="solutions-design__list">
                                <li className="solutions-design__li">
                                    <MarkDark />
                                    HR Policy Development & Implementation
                                </li>
                                <li className="solutions-design__li">
                                    <MarkDark />
                                    Employment Documentation & Contract Management
                                </li>
                                <li className="solutions-design__li">
                                    <MarkDark />
                                    Recruitment & Hiring Services
                                </li>
                                <li className="solutions-design__li">
                                    <MarkDark />
                                    Payroll Processing & Administration
                                </li>
                                <li className="solutions-design__li">
                                    <MarkDark />
                                    Workforce Planning & Talent Mapping
                                </li>
                            </ul>
                            <div className="solutions-design__price">
                                <div className="from">/from</div>
                                <div className="price">€12 000</div>
                            </div>
                            <OrderButton
                                className={"solutions-design__link"}
                                text={"Request Now"}
                                service={"Initial HR Setup"}
                            />
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="solutions-design__item">
                            <img src="/images/services/solutions-icon-02.svg" alt="icon" className="solutions-design__icon"></img>
                            <h3 className="solutions-design__package">HR Optimization & Compliance</h3>
                            <p className="solutions-design__text">
                                For companies refining HR efficiency and ensuring legal alignment
                                <br />
                                <br />
                                We analyze, audit, and refine HR processes, ensuring legal compliance, efficiency, and workforce productivity.
                            </p>
                            <ul className="solutions-design__list">
                                <li className="solutions-design__li">
                                    <MarkDark />
                                    HR Audits & Risk Management
                                </li>
                                <li className="solutions-design__li">
                                    <MarkDark />
                                    Labor Law Compliance & Advisory
                                </li>
                                <li className="solutions-design__li">
                                    <MarkDark />
                                    Performance Reviews & 360° Feedback
                                </li>
                                <li className="solutions-design__li">
                                    <MarkDark />
                                    Compensation & Benefits Structuring
                                </li>
                                <li className="solutions-design__li">
                                    <MarkDark />
                                    HR Technology & Automation Consulting
                                </li>
                            </ul>
                            <div className="solutions-design__price">
                                <div className="from">/from</div>
                                <div className="price">€15 000</div>
                            </div>
                            <OrderButton
                                className={"solutions-design__link"}
                                text={"Request Now"}
                                service={"HR Optimization & Compliance"}
                            />
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.4}
                            className="solutions-design__item">
                            <img src="/images/services/solutions-icon-03.svg" alt="icon" className="solutions-design__icon"></img>
                            <h3 className="solutions-design__package">Crisis & Workforce Risk Management</h3>
                            <p className="solutions-design__text">
                                For businesses handling restructuring, disputes, or workforce risks
                                <br />
                                <br />
                                We provide expert HR strategies for companies facing workforce restructuring, disputes, or compliance risks.
                            </p>
                            <ul className="solutions-design__list">
                                <li className="solutions-design__li">
                                    <MarkDark />
                                    Workplace Investigations & Dispute Resolution
                                </li>
                                <li className="solutions-design__li">
                                    <MarkDark />
                                    Full HR Outsourcing
                                </li>
                                <li className="solutions-design__li">
                                    <MarkDark />
                                    Legal & Compliance Advisory
                                </li>
                                <li className="solutions-design__li">
                                    <MarkDark />
                                    Leadership Development & Succession Planning
                                </li>
                                <li className="solutions-design__li">
                                    <MarkDark />
                                    Flexible Work Arrangements & Policies
                                </li>
                            </ul>
                            <div className="solutions-design__price">
                                <div className="from">/from</div>
                                <div className="price">€18 000</div>
                            </div>
                            <OrderButton
                                className={"solutions-design__link"}
                                text={"Request Now"}
                                service={"Crisis & Workforce Risk Management"}
                            />
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.2}
                            className="solutions-design__item">
                            <img src="/images/services/solutions-icon-04.svg" alt="icon" className="solutions-design__icon"></img>
                            <h3 className="solutions-design__package">High-Volume & Urgent Hiring Solutions</h3>
                            <p className="solutions-design__text">
                                For companies expanding or filling urgent talent gaps
                                <br />
                                <br />
                                We deploy scalable, rapid hiring strategies to meet workforce expansion needs efficiently.
                            </p>
                            <ul className="solutions-design__list">
                                <li className="solutions-design__li">
                                    <MarkDark />
                                    Mass Hiring & High-Volume Recruitment
                                </li>
                                <li className="solutions-design__li">
                                    <MarkDark />
                                    Recruitment Process Outsourcing
                                </li>
                                <li className="solutions-design__li">
                                    <MarkDark />
                                    Candidate Screening & Assessments
                                </li>
                                <li className="solutions-design__li">
                                    <MarkDark />
                                    Global Talent Acquisition & Relocation
                                </li>
                                <li className="solutions-design__li">
                                    <MarkDark />
                                    Employer Branding & Talent Attraction
                                </li>
                            </ul>
                            <div className="solutions-design__price">
                                <div className="from">/from</div>
                                <div className="price">€14 000</div>
                            </div>
                            <OrderButton
                                className={"solutions-design__link"}
                                text={"Request Now"}
                                service={"High-Volume & Urgent Hiring Solutions"}
                            />
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="solutions-design__item">
                            <img src="/images/services/solutions-icon-05.svg" alt="icon" className="solutions-design__icon"></img>
                            <h3 className="solutions-design__package">Leadership & Succession Planning</h3>
                            <p className="solutions-design__text">
                                For companies preparing for leadership transitions
                                <br />
                                <br />
                                We help businesses build strong leadership pipelines and ensure smooth succession planning.
                            </p>
                            <ul className="solutions-design__list">
                                <li className="solutions-design__li">
                                    <MarkDark />
                                    Executive Search & Headhunting
                                </li>
                                <li className="solutions-design__li">
                                    <MarkDark />
                                    Psychometric & Behavioral Assessments
                                </li>
                                <li className="solutions-design__li">
                                    <MarkDark />
                                    Executive & Career Coaching
                                </li>
                                <li className="solutions-design__li">
                                    <MarkDark />
                                    Performance Reviews & 360° Feedback
                                </li>
                                <li className="solutions-design__li">
                                    <MarkDark />
                                    Succession Planning & Leadership Development
                                </li>
                            </ul>
                            <div className="solutions-design__price">
                                <div className="from">/from</div>
                                <div className="price">€16 000</div>
                            </div>
                            <OrderButton
                                className={"solutions-design__link"}
                                text={"Request Now"}
                                service={"Leadership & Succession Planning"}
                            />
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="solutions-design__item">
                            <img src="/images/services/solutions-icon-06.svg" alt="icon" className="solutions-design__icon"></img>
                            <h3 className="solutions-design__package">HR Digital Transformation & Automation</h3>
                            <p className="solutions-design__text">
                                For companies modernizing HR operations
                                <br />
                                <br />
                                We integrate cutting-edge HR technology to automate workflows and enhance data-driven decision-making.
                            </p>
                            <ul className="solutions-design__list">
                                <li className="solutions-design__li">
                                    <MarkDark />
                                    HR Technology & Automation Consulting
                                </li>
                                <li className="solutions-design__li">
                                    <MarkDark />
                                    Remote Work & Virtual HR Solutions
                                </li>
                                <li className="solutions-design__li">
                                    <MarkDark />
                                    Payroll Processing & Administration
                                </li>
                                <li className="solutions-design__li">
                                    <MarkDark />
                                    HR Analytics & Data-Driven Insights
                                </li>
                                <li className="solutions-design__li">
                                    <MarkDark />
                                    Workforce Planning & Talent Mapping
                                </li>
                            </ul>
                            <div className="solutions-design__price">
                                <div className="from">/from</div>
                                <div className="price">€20 000</div>
                            </div>
                            <OrderButton
                                className={"solutions-design__link"}
                                text={"Request Now"}
                                service={"HR Digital Transformation & Automation"}
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SolutionsDesign;