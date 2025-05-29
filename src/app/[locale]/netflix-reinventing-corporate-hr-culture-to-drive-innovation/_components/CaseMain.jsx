"use client";
import React, { useState, useEffect } from "react";
import "@/styles/cases.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const CaseMain = () => {

    return (
        <section className="case-main">
            <div className="case-main__container _container">
                <div className="case-main__body">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.2}
                        className="case-main__title">The HR Move</motion.h2>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.3}
                        className="case-main__text">
                        In the early 2000s, Netflix transitioned from a DVD rental service into a digital media company. But to lead a digital revolution, the company needed an entirely different kind of workforce—one that was fast, agile, and highly autonomous.
                        <br />
                        <br />
                        Traditional corporate HR systems—with rigid policies, approval hierarchies, and standardized processes—weren't designed for innovation. That's when Netflix introduced its now-famous "Freedom & Responsibility" culture, a radical HR strategy that redefined how the company operated.
                        <b>The key shift wasn't just procedural—it was philosophical:</b>
                        <ul>
                            <li><b>No fixed vacation policies</b> – employees took time off as needed</li>
                            <li><b>No approvals for expenses</b> – act in the company's best interest</li>
                            <li><b>No micromanagement</b> – only accountability for results</li>
                            <li><b>Performance-focused retention</b> – top talent stayed, and average performers were respectfully let go</li>
                        </ul>
                        This culture change was more than a set of policies—it was a bold HR transformation that placed trust, autonomy, and high expectations at the core of the employee experience.
                    </motion.div>
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.3}
                        className="case-main__title">The Impact</motion.h2>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.3}
                        className="case-main__text">
                        Netflix's HR transformation unlocked a new kind of workforce performance. Employees were no longer bound by bureaucracy—they were empowered to act, innovate, and take ownership.
                        <br />
                        <br />
                        Here's what happened next:
                        <ul>
                            <li>The company <b>moved faster</b> than its competitors, making bold product and content decisions</li>
                            <li>Netflix attracted and retained <b>high-performing talent</b> from the tech and media industries</li>
                            <li>The flat, trust-based culture helped the company <b>scale globally</b> without collapsing under process-heavy corporate models</li>
                            <li>This HR approach fueled the transition from <b>DVD service to a $200+ billion global streaming leader</b></li>
                        </ul>
                        Once shared online, Netflix's internal HR document became one of the most influential business culture documents in history. Leaders from across industries began to study and replicate Netflix's approach.
                    </motion.div>
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.3}
                        className="case-main__title">The Business Result</motion.h2>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.3}
                        className="case-main__text">
                        Without that cultural shift, Netflix could not have become what it is today. Its business model depended on rapid innovation, quick pivots, and constant experimentation—none of which would have survived in a traditional HR framework.
                        <br />
                        <br />
                        What looked like an internal HR experiment became one of the most pivotal strategic moves in the company's history.
                    </motion.div>
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.3}
                        className="case-main__title">Key Takeaway for Your Business</motion.h2>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.3}
                        className="case-main__text">
                        Strategic HR isn't just about hiring and processes—it's about shaping the organization you want to become. A high-performance culture doesn't happen by accident. It's designed.
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CaseMain;