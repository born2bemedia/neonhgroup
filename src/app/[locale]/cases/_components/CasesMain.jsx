"use client";
import React, { useState, useEffect } from "react";
import "@/styles/cases.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";

const CasesMain = () => {

    return (
        <section className="cases-main">
            <section className="cases-main__container _container">
                <div className="cases-main__body">
                    <div className="cases-main__items">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.2}
                            className="cases-main__item">
                            <img src="/images/cases/case-01.jpg" alt="image" className="cases-main__image" />
                            <div className="cases-main__content">
                                <h2 className="cases-main__title">Apple: The Game-Changing Talent Hire That Revolutionized the Brand</h2>
                                <div className="cases-main__text">
                                    <b>The HR Move</b>
                                    <span>Steve Jobs rehires Tim Cook in 1998 to optimize Apple’s supply chain.</span>
                                    <b>Key Takeaway</b>
                                    <span>The right talent at the right time can redefine a company’s trajectory.</span>
                                    <b>The Impact</b>
                                    <span>Before Cook joined Apple, the company was losing market share, struggling with inefficient operations, and facing financial instability. Cook, an expert in supply chain management, streamlined Apple’s operations, cut costs, and improved product delivery efficiency. His strategic workforce management turned Apple into one of the most valuable companies in history.</span>
                                </div>
                                <Link href="/apple-the-game-changing-talent-hire-that-revolutionized-the-brand" className="cases-main__link">Read the Case</Link>
                            </div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="cases-main__item">
                            <img src="/images/cases/case-02.jpg" alt="image" className="cases-main__image" />
                            <div className="cases-main__content">
                                <h2 className="cases-main__title">Netflix: Reinventing Corporate HR Culture to Drive Innovation</h2>
                                <div className="cases-main__text">
                                    <b>The HR Move</b>
                                    <span>Netflix introduces its "Freedom & Responsibility" HR culture, breaking traditional corporate structures.</span>
                                    <b>Key Takeaway</b>
                                    <span>HR isn’t just about rules—it’s about creating an environment where top talent thrives.</span>
                                    <b>The Impact</b>
                                    <span>Netflix built an agile, innovation-driven workforce by removing rigid policies, giving employees decision-making power, and focusing on results rather than processes. This revolutionary HR strategy allowed Netflix to outperform competitors, scale globally, and become the world's leading streaming platform.</span>
                                </div>
                                <Link href="/netflix-reinventing-corporate-hr-culture-to-drive-innovation" className="cases-main__link">Read the Case</Link>
                            </div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.4}
                            className="cases-main__item">
                            <img src="/images/cases/case-03.jpg" alt="image" className="cases-main__image" />
                            <div className="cases-main__content">
                                <h2 className="cases-main__title">Starbucks: Employee Engagement as a Competitive Advantage</h2>
                                <div className="cases-main__text">
                                    <b>The HR Move</b>
                                    <span>Starbucks introduced stock ownership, tuition support, and competitive employee benefits to transform its workforce.</span>
                                    <b>Key Takeaway</b>
                                    <span>When employees are valued, they drive brand success.</span>
                                    <b>The Impact</b>
                                    <span>In the early 2000s, Starbucks struggled with high turnover and inconsistent service quality. By investing in employee satisfaction, training, and benefits, Starbucks built one of the most engaged workforces in the industry. This resulted in higher retention, better customer experience, and sustained business growth.</span>
                                </div>
                                <Link href="/starbucks-employee-engagement-as-a-competitive-advantage" className="cases-main__link">Read the Case</Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default CasesMain;