"use client";
import React, { useState, useEffect } from "react";
import "@/styles/services.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const ServicesHow = () => {
    const t = useTranslations("hrConsultingStrategy.how");

    return (
        <section className="services-how">
            <div className="services-how__container _container">
                <div className="services-how__body">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.2}
                        className="services-how__title"
                    >
                        {t("title.0")} <br /> {t("title.1")} <br />{" "}
                        {t("title.2")}
                    </motion.h2>
                    <div className="services-how__items">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.2}
                            className="services-how__item"
                        >
                            <img
                                src="/images/services/img-how-01.jpg"
                                alt="image"
                                className="services-how__image"
                            />
                            <div className="services-how__wrapper">
                                <h3 className="services-how__label">
                                    {t("items.0.title")}
                                </h3>
                                <p className="services-how__text">
                                    {t("items.0.text")}
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="services-how__item"
                        >
                            <img
                                src="/images/services/img-how-02.jpg"
                                alt="image"
                                className="services-how__image"
                            />
                            <div className="services-how__wrapper">
                                <h3 className="services-how__label">
                                    {t("items.1.title")}
                                </h3>
                                <p className="services-how__text">
                                    {t("items.1.text")}
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.4}
                            className="services-how__item"
                        >
                            <img
                                src="/images/services/img-how-03.jpg"
                                alt="image"
                                className="services-how__image"
                            />
                            <div className="services-how__wrapper">
                                <h3 className="services-how__label">
                                    {t("items.2.title")}
                                </h3>
                                <p className="services-how__text">
                                    {t("items.2.text")}
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.5}
                            className="services-how__item"
                        >
                            <img
                                src="/images/services/img-how-04.jpg"
                                alt="image"
                                className="services-how__image"
                            />
                            <div className="services-how__wrapper">
                                <h3 className="services-how__label">
                                    {t("items.3.title")}
                                </h3>
                                <p className="services-how__text">
                                    {t("items.3.text")}
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.6}
                            className="services-how__item"
                        >
                            <img
                                src="/images/services/img-how-05.jpg"
                                alt="image"
                                className="services-how__image"
                            />
                            <div className="services-how__wrapper">
                                <h3 className="services-how__label">
                                    {t("items.4.title")}
                                </h3>
                                <p className="services-how__text">
                                    {t("items.4.text")}
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesHow;
