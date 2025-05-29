"use client";
import React, { useState, useEffect } from "react";
import "@/styles/home/home.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";

const HomeFrom = () => {
    const t = useTranslations("home.from");

    return (
        <section className="home-from">
            <div className="home-from__container _container">
                <div className="home-from__body">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.1}
                        className="home-from__title"
                    >
                        {t("title.0")} <br /> {t("title.1")} <br />{" "}
                        {t("title.2")}
                    </motion.h2>
                    <div className="home-from__items">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.1}
                            className="home-from__item"
                        >
                            <div className="home-from__icon">
                                <img
                                    src="/images/home/icon-01.svg"
                                    alt="icon"
                                />
                            </div>
                            <h3 className="home-from__label">
                                {t("items.0.title")}
                            </h3>
                            <p className="home-from__text">
                                {t("items.0.text")}
                            </p>
                            <Link
                                href="/recruitment-hiring-services"
                                className="home-from__link"
                            >
                                {t("items.0.link")}
                            </Link>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.2}
                            className="home-from__item"
                        >
                            <div className="home-from__icon">
                                <img
                                    src="/images/home/icon-02.svg"
                                    alt="icon"
                                />
                            </div>
                            <h3 className="home-from__label">
                                {t("items.1.title")}
                            </h3>
                            <p className="home-from__text">
                                {t("items.1.text")}
                            </p>
                            <Link
                                href="/hr-consulting-strategy"
                                className="home-from__link"
                            >
                                {t("items.1.link")}
                            </Link>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.2}
                            className="home-from__item"
                        >
                            <div className="home-from__icon">
                                <img
                                    src="/images/home/icon-03.svg"
                                    alt="icon"
                                />
                            </div>
                            <h3 className="home-from__label">
                                {t("items.2.title")}
                            </h3>
                            <p className="home-from__text">
                                {t("items.2.text")}
                            </p>
                            <Link
                                href="/employee-assessment-development"
                                className="home-from__link"
                            >
                                {t("items.2.link")}
                            </Link>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="home-from__item"
                        >
                            <div className="home-from__icon">
                                <img
                                    src="/images/home/icon-04.svg"
                                    alt="icon"
                                />
                            </div>
                            <h3 className="home-from__label">
                                {t("items.3.title")}
                            </h3>
                            <p className="home-from__text">
                                {t("items.3.text")}
                            </p>
                            <Link
                                href="/hr-operations-outsourcing"
                                className="home-from__link"
                            >
                                {t("items.3.link")}
                            </Link>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.4}
                            className="home-from__item"
                        >
                            <div className="home-from__icon">
                                <img
                                    src="/images/home/icon-05.svg"
                                    alt="icon"
                                />
                            </div>
                            <h3 className="home-from__label">
                                {t("items.4.title.0")} <br />{" "}
                                {t("items.4.title.1")}
                            </h3>
                            <p className="home-from__text">
                                {t("items.4.text")}
                            </p>
                            <Link
                                href="/legal-compliance-services"
                                className="home-from__link"
                            >
                                {t("items.4.link")}
                            </Link>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.2}
                            className="home-from__item"
                        >
                            <div className="home-from__icon">
                                <img
                                    src="/images/home/icon-06.svg"
                                    alt="icon"
                                />
                            </div>
                            <h3 className="home-from__label">
                                {t("items.5.title")}
                            </h3>
                            <p className="home-from__text">
                                {t("items.5.text")}
                            </p>
                            <Link
                                href="/employee-engagement-well-being"
                                className="home-from__link"
                            >
                                {t("items.5.link")}
                            </Link>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="home-from__item"
                        >
                            <div className="home-from__icon">
                                <img
                                    src="/images/home/icon-07.svg"
                                    alt="icon"
                                />
                            </div>
                            <h3 className="home-from__label">
                                {t("items.6.title")}
                            </h3>
                            <p className="home-from__text">
                                {t("items.6.text")}
                            </p>
                            <Link href="/solutions" className="home-from__link">
                                {t("items.6.link")}
                            </Link>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.4}
                            className="home-from__item"
                        >
                            <div className="home-from__icon">
                                <img
                                    src="/images/home/icon-08.svg"
                                    alt="icon"
                                />
                            </div>
                            <h3 className="home-from__label">
                                {t("items.7.title")}
                            </h3>
                            <p className="home-from__text">
                                {t("items.7.text")}
                            </p>
                            <Link
                                href="/industry-specific-hr-services"
                                className="home-from__link"
                            >
                                {t("items.7.link")}
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeFrom;
