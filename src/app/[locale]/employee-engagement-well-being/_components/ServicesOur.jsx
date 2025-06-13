"use client";
import React, { useState, useEffect } from "react";
import "@/styles/services.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const ServicesOur = () => {
    const t = useTranslations("employeeEngagementWellBeing.our");

    return (
        <section className="services-well">
            <div className="services-well__container _container">
                <div className="services-well__body">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.2}
                        className="services-well__title"
                    >
                        {t("title.0")} <br /> {t("title.1")}
                    </motion.h2>
                    <div className="services-well__items">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="services-well__item"
                        >
                            <div className="services-well__col-01">
                                <h3 className="services-well__label">
                                    {t("items.0.title")}
                                </h3>
                                <p className="services-well__text">
                                    {t("items.0.text")}
                                </p>
                            </div>
                            <div className="services-well__col-02">
                                <img
                                    src="/images/services/services-well-01.jpg"
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
                            className="services-well__item"
                        >
                            <div className="services-well__col-01">
                                <h3 className="services-well__label">
                                    {t("items.1.title")}
                                </h3>
                                <p className="services-well__text">
                                    {t("items.1.text")}
                                </p>
                            </div>
                            <div className="services-well__col-02">
                                <img
                                    src="/images/services/services-well-02.jpg"
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
                            className="services-well__item"
                        >
                            <div className="services-well__col-01">
                                <h3 className="services-well__label">
                                    {t("items.2.title")}
                                </h3>
                                <p className="services-well__text">
                                    {t("items.2.text")}
                                </p>
                            </div>
                            <div className="services-well__col-02">
                                <img
                                    src="/images/services/services-well-03.jpg"
                                    alt="image"
                                />
                            </div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.5}
                            className="services-well__item"
                        >
                            <div className="services-well__col-01">
                                <h3 className="services-well__label">
                                    {t("items.3.title")}
                                </h3>
                                <p className="services-well__text">
                                    {t("items.3.text")}
                                </p>
                            </div>
                            <div className="services-well__col-02">
                                <img
                                    src="/images/services/services-well-04.jpg"
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
