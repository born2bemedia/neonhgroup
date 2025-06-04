"use client";
import React, { useState, useEffect } from "react";
import "@/styles/services.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";

const ServicesNeed = () => {
    const t = useTranslations("hrOperationsOutsourcing.need");

    return (
        <section className="services-need">
            <div className="services-need__container _container">
                <div className="services-need__body">
                    <div className="services-need__col-01">
                        <motion.h2
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.2}
                            className="services-need__title"
                        >
                            {t("title.0")} <br /> {t("title.1")}
                        </motion.h2>
                        <motion.p
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="services-need__text"
                        >
                            {t("text")}
                        </motion.p>
                        <Link href="/contacts" className="services-need__link">
                            {t("link")}
                        </Link>
                    </div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.4}
                        className="services-need__col-02"
                    >
                        <img src="/images/services/img-08.png" alt="image" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ServicesNeed;
