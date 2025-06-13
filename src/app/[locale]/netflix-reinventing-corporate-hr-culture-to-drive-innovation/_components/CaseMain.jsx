"use client";
import React, { useState, useEffect } from "react";
import "@/styles/cases.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const CaseMain = () => {
    const t = useTranslations("netflixReinventing.main");

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
                        className="case-main__title"
                    >
                        {t("0.title")}
                    </motion.h2>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.3}
                        className="case-main__text"
                    >
                        {t("0.text")}
                        <br />
                        <br />
                        {t("0.text2")} <b>{t("0.subtitle")}</b>
                        <ul>
                            <li>
                                <b>{t("0.list.0.title")}</b> –{" "}
                                {t("0.list.0.text")}
                            </li>
                            <li>
                                <b>{t("0.list.1.title")}</b> –{" "}
                                {t("0.list.1.text")}
                            </li>
                            <li>
                                <b>{t("0.list.2.title")}</b> –{" "}
                                {t("0.list.2.text")}
                            </li>
                            <li>
                                <b>{t("0.list.3.title")}</b> –{" "}
                                {t("0.list.3.text")}
                            </li>
                        </ul>
                        {t("0.text3")}
                    </motion.div>
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.3}
                        className="case-main__title"
                    >
                        {t("1.title")}
                    </motion.h2>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.3}
                        className="case-main__text"
                    >
                        {t("1.text")}
                        <br />
                        <br />
                        {t("1.text2")}
                        <ul>
                            <li>
                                <b>{t("1.list.0.text1")}</b>{" "}
                                <b>{t("1.list.0.text2")}</b>{" "}
                                <b>{t("1.list.0.text3")}</b>
                            </li>
                            <li>
                                <b>{t("1.list.1.text1")}</b>{" "}
                                <b>{t("1.list.1.text2")}</b>{" "}
                                <b>{t("1.list.1.text3")}</b>
                            </li>
                            <li>
                                <b>{t("1.list.2.text1")}</b>{" "}
                                <b>{t("1.list.2.text2")}</b>{" "}
                                <b>{t("1.list.2.text3")}</b>
                            </li>
                            <li>
                                {t("1.list.3.text1")}{" "}
                                <b>{t("1.list.3.text2")}</b>
                            </li>
                        </ul>
                        {t("1.text3")}
                    </motion.div>
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.3}
                        className="case-main__title"
                    >
                        {t("2.title")}
                    </motion.h2>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.3}
                        className="case-main__text"
                    >
                        {t("2.text")}
                        <br />
                        <br />
                        {t("2.text2")}
                    </motion.div>
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.3}
                        className="case-main__title"
                    >
                        {t("3.title")}
                    </motion.h2>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.3}
                        className="case-main__text"
                    >
                        {t("3.text")}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CaseMain;
