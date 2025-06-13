"use client";
import React, { useState, useEffect } from "react";
import "@/styles/cases.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const CasesHero = () => {
    const t = useTranslations("cases.hero");

    return (
        <section className="cases-hero">
            <div className="cases-hero__container _container">
                <div className="cases-hero__body">
                    <motion.h1
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.2}
                        className="cases-hero__title"
                    >
                        <span>{t("title.0")}</span> <br />
                        {t("title.1")}
                    </motion.h1>
                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.3}
                        className="cases-hero__text"
                    >
                        {t("text")}
                    </motion.p>
                </div>
            </div>
        </section>
    );
};

export default CasesHero;
