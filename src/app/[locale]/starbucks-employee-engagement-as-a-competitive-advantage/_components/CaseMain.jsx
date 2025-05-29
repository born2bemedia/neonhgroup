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
                        className="case-main__title">The HR Decision</motion.h2>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.3}
                        className="case-main__text">
                        In the early 2000s, Starbucks faced a significant operational challenge: high employee turnover, declining service quality, and inconsistent customer experience across its rapidly expanding global store network.
                        <br />
                        <br />
                        At a time when most companies in the food and beverage industry viewed frontline workers as easily replaceable, Starbucks made a bold HR decision—it chose to invest deeply in its people.
                        <br />
                        <br />
                        The company introduced:
                        <ul>
                            <li>Stock ownership (Bean Stock) for part-time and full-time employees</li>
                            <li>Comprehensive health insurance, including for part-time workers</li>
                            <li>Tuition reimbursement programs to support employee development</li>
                            <li>Internal training and career growth initiatives</li>
                            <li>A culture that emphasized respect, dignity, and employee voice</li>
                        </ul>
                        This wasn’t just a benefit upgrade—it was a philosophical shift in how HR viewed the workforce. Starbucks chose to treat its baristas not as transactional labor but as long-term brand ambassadors.
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
                        The results were dramatic and far-reaching:
                        <ul>
                            <li>Turnover rates dropped, reducing the cost of hiring and training.</li>
                            <li>Employee satisfaction increased, leading to better service consistency.</li>
                            <li>Customer loyalty improved as store experiences became more personal and reliable.</li>
                            <li>The workforce became more aligned with Starbucks’ mission and values, creating a strong internal culture that extended to the brand’s identity.</li>
                            <li>Starbucks positioned itself as a progressive employer, strengthening its public reputation and talent pipeline</li>
                        </ul>
                        Importantly, this HR transformation came before it became a trend in retail and hospitality. Starbucks was a pioneer—and it paid off.
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
                        The decision to center employee engagement helped Starbucks scale without losing its brand quality or customer experience standards. This was key to maintaining profitability through periods of aggressive expansion, economic downturns, and shifting consumer expectations. <br />
                        The company that was once struggling to retain staff is now regarded globally as a benchmark for people-first business practices—and that came from a single HR decision to reframe how employees are valued.
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
                        When employees are empowered, engaged, and invested in—their performance becomes your competitive edge. HR isn’t a cost center—it’s a growth enabler.
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CaseMain;