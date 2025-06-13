"use client";
import React, { useState, useEffect } from "react";
import "@/styles/home/home.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import Percent from "./Percent";
import { useTranslations } from "next-intl";

const HomeImpact = () => {
    const t = useTranslations("home.impact");

    return (
        <section className="home-impact">
            <div className="home-impact__container _container">
                <div className="home-impact__body">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.1}
                        className="home-impact__title"
                    >
                        {t("title.0")} <br /> {t("title.1")}
                    </motion.h2>
                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.2}
                        className="home-impact__text"
                    >
                        {t("text")}
                    </motion.p>
                    <Link href="/our-expertise" className="home-impact__link">
                        {t("link")}
                    </Link>
                    <div className="home-impact__items">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.2}
                            className="home-impact__item"
                        >
                            <div className="home-impact__number">
                                <Percent percentageMax={100} prefix="+" />
                            </div>
                            <h3 className="home-impact__label">
                                {t("items.0.title")}
                            </h3>
                            <p className="home-impact__desc">
                                {t("items.0.text")}
                            </p>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="home-impact__item"
                        >
                            <div className="home-impact__number">
                                <Percent percentageMax={10} prefix="+" />
                            </div>
                            <h3 className="home-impact__label">
                                {t("items.1.title")}
                            </h3>
                            <p className="home-impact__desc">
                                {t("items.1.text")}
                            </p>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.4}
                            className="home-impact__item"
                        >
                            <div className="home-impact__number">
                                <Percent percentageMax={24} prefix="" />
                            </div>
                            <h3 className="home-impact__label">
                                {t("items.2.title")}
                            </h3>
                            <p className="home-impact__desc">
                                {t("items.2.text")}
                            </p>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.2}
                            className="home-impact__item"
                        >
                            <div className="home-impact__number">
                                <Percent percentageMax={12} prefix="" />
                            </div>
                            <h3 className="home-impact__label">
                                {t("items.3.title")}
                            </h3>
                            <p className="home-impact__desc">
                                {t("items.3.text")}
                            </p>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="home-impact__item"
                        >
                            <div className="home-impact__number">
                                <Percent percentageMax={100} prefix="K+" />
                            </div>
                            <h3 className="home-impact__label">
                                {t("items.4.title")}
                            </h3>
                            <p className="home-impact__desc">
                                {t("items.4.text")}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeImpact;
