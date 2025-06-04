"use client";
import React, { useState, useEffect } from "react";
import "@/styles/services.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const ServicesOur = () => {
    const t = useTranslations("legalComplianceServices.our");

    return (
        <section className="services-oper">
            <div className="services-oper__container _container">
                <div className="services-oper__body">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.1}
                        className="services-oper__title"
                    >
                        {t("title.0")} <br /> {t("title.1")}
                    </motion.h2>
                    <div className="services-oper__items">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.2}
                            className="services-oper__item"
                        >
                            <div className="services-oper__col-01">
                                <h3 className="services-oper__label">
                                    {t("items.0.title")}
                                </h3>
                                <p className="services-oper__text">
                                    {t("items.0.text")}
                                </p>
                            </div>
                            <div className="services-oper__col-02">
                                <img
                                    src="/images/services/services-oper-01.jpg"
                                    alt="image"
                                />
                            </div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="services-oper__item"
                        >
                            <div className="services-oper__col-01">
                                <h3 className="services-oper__label">
                                    {t("items.1.title")}
                                </h3>
                                <p className="services-oper__text">
                                    {t("items.1.text")}
                                </p>
                            </div>
                            <div className="services-oper__col-02">
                                <img
                                    src="/images/services/services-oper-02.jpg"
                                    alt="image"
                                />
                            </div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="services-oper__item"
                        >
                            <div className="services-oper__col-01">
                                <h3 className="services-oper__label">
                                    {t("items.2.title")}
                                </h3>
                                <p className="services-oper__text">
                                    {t("items.2.text")}
                                </p>
                            </div>
                            <div className="services-oper__col-02">
                                <img
                                    src="/images/services/services-oper-03.jpg"
                                    alt="image"
                                />
                            </div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.4}
                            className="services-oper__item"
                        >
                            <div className="services-oper__col-01">
                                <h3 className="services-oper__label">
                                    {t("items.3.title")}
                                </h3>
                                <p className="services-oper__text">
                                    {t("items.3.text")}
                                </p>
                            </div>
                            <div className="services-oper__col-02">
                                <img
                                    src="/images/services/services-oper-04.jpg"
                                    alt="image"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesOur;
