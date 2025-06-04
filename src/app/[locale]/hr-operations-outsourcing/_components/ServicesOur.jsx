"use client";
import React, { useState, useEffect } from "react";
import "@/styles/services.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const ServicesOur = () => {
    const t = useTranslations("hrOperationsOutsourcing.our");

    return (
        <section className="services-app">
            <div className="services-app__container _container">
                <div className="services-app__body">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.2}
                        className="services-app__title"
                    >
                        {t("title.0")} <br /> {t("title.1")}
                    </motion.h2>
                    <div className="services-app__items">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.1}
                            className="services-app__item"
                        >
                            <div className="services-app__col-01">
                                <h3 className="services-app__label">
                                    {t("items.0.title")}
                                </h3>
                                <p className="services-app__text">
                                    {t("items.0.text")}
                                </p>
                            </div>
                            <div className="services-app__col-02">
                                <img
                                    src="/images/services/our-app-01.jpg"
                                    alt="image"
                                />
                            </div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.2}
                            className="services-app__item"
                        >
                            <div className="services-app__col-01">
                                <h3 className="services-app__label">
                                    {t("items.1.title")}
                                </h3>
                                <p className="services-app__text">
                                    {t("items.1.text")}
                                </p>
                            </div>
                            <div className="services-app__col-02">
                                <img
                                    src="/images/services/our-app-02.jpg"
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
                            className="services-app__item"
                        >
                            <div className="services-app__col-01">
                                <h3 className="services-app__label">
                                    {t("items.2.title")}
                                </h3>
                                <p className="services-app__text">
                                    {t("items.2.text")}
                                </p>
                            </div>
                            <div className="services-app__col-02">
                                <img
                                    src="/images/services/our-app-03.jpg"
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
                            className="services-app__item"
                        >
                            <div className="services-app__col-01">
                                <h3 className="services-app__label">
                                    {t("items.3.title")}
                                </h3>
                                <p className="services-app__text">
                                    {t("items.3.text")}
                                </p>
                            </div>
                            <div className="services-app__col-02">
                                <img
                                    src="/images/services/our-app-04.jpg"
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
