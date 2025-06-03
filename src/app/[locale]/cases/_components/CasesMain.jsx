"use client";
import React, { useState, useEffect } from "react";
import "@/styles/cases.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";

const CasesMain = () => {
    const t = useTranslations("cases.main");

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
                            className="cases-main__item"
                        >
                            <img
                                src="/images/cases/case-01.jpg"
                                alt="image"
                                className="cases-main__image"
                            />
                            <div className="cases-main__content">
                                <h2 className="cases-main__title">
                                    {t("0.title")}
                                </h2>
                                <div className="cases-main__text">
                                    <b>{t("0.text.0")}</b>
                                    <span>{t("0.text.1")}</span>
                                    <b>{t("0.text.2")}</b>
                                    <span>{t("0.text.3")}</span>
                                    <b>{t("0.text.4")}</b>
                                    <span>{t("0.text.5")}</span>
                                </div>
                                <Link
                                    href="/apple-the-game-changing-talent-hire-that-revolutionized-the-brand"
                                    className="cases-main__link"
                                >
                                    {t("read")}
                                </Link>
                            </div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="cases-main__item"
                        >
                            <img
                                src="/images/cases/case-02.jpg"
                                alt="image"
                                className="cases-main__image"
                            />
                            <div className="cases-main__content">
                                <h2 className="cases-main__title">
                                    {t("1.title")}
                                </h2>
                                <div className="cases-main__text">
                                    <b>{t("1.text.0")}</b>
                                    <span>{t("1.text.1")}</span>
                                    <b>{t("1.text.2")}</b>
                                    <span>{t("1.text.3")}</span>
                                    <b>{t("1.text.4")}</b>
                                    <span>{t("1.text.5")}</span>
                                </div>
                                <Link
                                    href="/netflix-reinventing-corporate-hr-culture-to-drive-innovation"
                                    className="cases-main__link"
                                >
                                    {t("read")}
                                </Link>
                            </div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.4}
                            className="cases-main__item"
                        >
                            <img
                                src="/images/cases/case-03.jpg"
                                alt="image"
                                className="cases-main__image"
                            />
                            <div className="cases-main__content">
                                <h2 className="cases-main__title">
                                    {t("2.title")}
                                </h2>
                                <div className="cases-main__text">
                                    <b>{t("2.text.0")}</b>
                                    <span>{t("2.text.1")}</span>
                                    <b>{t("2.text.2")}</b>
                                    <span>{t("2.text.3")}</span>
                                    <b>{t("2.text.4")}</b>
                                    <span>{t("2.text.5")}</span>
                                </div>
                                <Link
                                    href="/starbucks-employee-engagement-as-a-competitive-advantage"
                                    className="cases-main__link"
                                >
                                    {t("read")}
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default CasesMain;
