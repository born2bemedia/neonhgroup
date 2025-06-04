"use client";
import React, { useState, useEffect } from "react";
import "@/styles/services.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const ServicesIndustries = () => {
    const t = useTranslations("industrySpecificHrServices.industries");

    return (
        <section className="services-industries">
            <div className="services-industries__container _container">
                <div className="services-industries__body">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.1}
                        className="services-industries__title"
                    >
                        {t("title")}
                    </motion.h2>
                    <div className="services-industries__items">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.1}
                            className="services-industries__item"
                        >
                            <img
                                src="/images/services/service-icon-01.svg"
                                alt="image"
                                className="services-industries__icon"
                            />
                            <h3 className="services-industries__label">
                                {t("items.0.title")}
                            </h3>
                            <p className="services-industries__text">
                                {t("items.0.text")}
                            </p>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.2}
                            className="services-industries__item"
                        >
                            <img
                                src="/images/services/service-icon-02.svg"
                                alt="image"
                                className="services-industries__icon"
                            />
                            <h3 className="services-industries__label">
                                {t("items.1.title")}
                            </h3>
                            <p className="services-industries__text">
                                {t("items.1.text")}
                            </p>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="services-industries__item"
                        >
                            <img
                                src="/images/services/service-icon-03.svg"
                                alt="image"
                                className="services-industries__icon"
                            />
                            <h3 className="services-industries__label">
                                {t("items.2.title")}
                            </h3>
                            <p className="services-industries__text">
                                {t("items.2.text")}
                            </p>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.4}
                            className="services-industries__item"
                        >
                            <img
                                src="/images/services/service-icon-04.svg"
                                alt="image"
                                className="services-industries__icon"
                            />
                            <h3 className="services-industries__label">
                                {t("items.3.title")}
                            </h3>
                            <p className="services-industries__text">
                                {t("items.3.text")}
                            </p>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.1}
                            className="services-industries__item"
                        >
                            <img
                                src="/images/services/service-icon-05.svg"
                                alt="image"
                                className="services-industries__icon"
                            />
                            <h3 className="services-industries__label">
                                {t("items.4.title")}
                            </h3>
                            <p className="services-industries__text">
                                {t("items.4.text")}
                            </p>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.2}
                            className="services-industries__item"
                        >
                            <img
                                src="/images/services/service-icon-06.svg"
                                alt="image"
                                className="services-industries__icon"
                            />
                            <h3 className="services-industries__label">
                                {t("items.5.title")}
                            </h3>
                            <p className="services-industries__text">
                                {t("items.5.text")}
                            </p>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="services-industries__item"
                        >
                            <img
                                src="/images/services/service-icon-07.svg"
                                alt="image"
                                className="services-industries__icon"
                            />
                            <h3 className="services-industries__label">
                                {t("items.6.title")}
                            </h3>
                            <p className="services-industries__text">
                                {t("items.6.text")}
                            </p>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.4}
                            className="services-industries__item"
                        >
                            <img
                                src="/images/services/service-icon-08.svg"
                                alt="image"
                                className="services-industries__icon"
                            />
                            <h3 className="services-industries__label">
                                {t("items.7.title")}
                            </h3>
                            <p className="services-industries__text">
                                {t("items.7.text")}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesIndustries;
