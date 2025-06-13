"use client";
import React, { useState, useEffect } from "react";
import "@/styles/our.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const OurWhat = () => {
    const t = useTranslations("ourExpertise.what");

    return (
        <section className="out-what">
            <div className="out-what__container _container">
                <div className="out-what__body">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.2}
                        className="out-what__title"
                    >
                        {t("title.0")} <br /> {t("title.1")}
                    </motion.h2>
                    <div className="out-what__items">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="out-what__item"
                        >
                            <h3 className="out-what__label">
                                {t("items.0.title")}
                            </h3>
                            <p className="out-what__text">
                                {t("items.0.text")}
                            </p>
                            <ul className="out-what__list">
                                <li className="out-what__li">
                                    {t("items.0.list.0")}
                                </li>
                                <li className="out-what__li">
                                    {t("items.0.list.1")}
                                </li>
                                <li className="out-what__li">
                                    {t("items.0.list.2")}
                                </li>
                            </ul>
                            <img
                                src="/images/our/our-what-01.jpg"
                                alt="image"
                                className="out-what__image"
                            />
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.4}
                            className="out-what__item"
                        >
                            <h3 className="out-what__label">
                                {t("items.1.title")}
                            </h3>
                            <p className="out-what__text">
                                {t("items.1.text")}
                            </p>
                            <ul className="out-what__list">
                                <li className="out-what__li">
                                    {t("items.1.list.0")}
                                </li>
                                <li className="out-what__li">
                                    {t("items.1.list.1")}
                                </li>
                                <li className="out-what__li">
                                    {t("items.1.list.2")}
                                </li>
                            </ul>
                            <img
                                src="/images/our/our-what-02.jpg"
                                alt="image"
                                className="out-what__image"
                            />
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="out-what__item"
                        >
                            <h3 className="out-what__label">
                                {t("items.2.title")}
                            </h3>
                            <p className="out-what__text">
                                {t("items.2.text")}
                            </p>
                            <ul className="out-what__list">
                                <li className="out-what__li">
                                    {t("items.2.list.0")}
                                </li>
                                <li className="out-what__li">
                                    {t("items.2.list.1")}
                                </li>
                                <li className="out-what__li">
                                    {t("items.2.list.2")}
                                </li>
                                <li className="out-what__li">
                                    {t("items.2.list.3")}
                                </li>
                            </ul>
                            <img
                                src="/images/our/our-what-03.jpg"
                                alt="image"
                                className="out-what__image"
                            />
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.4}
                            className="out-what__item"
                        >
                            <h3 className="out-what__label">
                                {t("items.3.title")}
                            </h3>
                            <p className="out-what__text">
                                {t("items.3.text")}
                            </p>
                            <ul className="out-what__list">
                                <li className="out-what__li">
                                    {t("items.3.list.0")}
                                </li>
                                <li className="out-what__li">
                                    {t("items.3.list.1")}
                                </li>
                                <li className="out-what__li">
                                    {t("items.3.list.2")}
                                </li>
                                <li className="out-what__li">
                                    {t("items.3.list.3")}
                                </li>
                            </ul>
                            <img
                                src="/images/our/our-what-04.jpg"
                                alt="image"
                                className="out-what__image"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurWhat;
