"use client";
import React, { useState, useEffect } from "react";
import "@/styles/cases.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const CaseHero = () => {
    const t = useTranslations("appleTheGameChanging.hero");

    return (
        <section className="case-hero _one">
            <div className="case-hero__container _container">
                <div className="case-hero__body">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.2}
                        className="case-hero__label"
                    >
                        {t("tag")}
                    </motion.h2>
                    <motion.h1
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.3}
                        className="case-hero__title"
                    >
                        {t("title.0")} <br />
                        {t("title.1")}
                    </motion.h1>
                </div>
            </div>
        </section>
    );
};

export default CaseHero;
