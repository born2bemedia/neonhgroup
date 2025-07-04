"use client";
import React, { useState, useEffect } from "react";
import "@/styles/faq.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const FaqHero = () => {
    const t = useTranslations("faq.hero");

    return (
        <section className="faq-hero">
            <div className="faq-hero__container _container">
                <div className="faq-hero__body">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.2}
                        className="faq-hero__icon"
                    >
                        <img src="/images/faq.svg" alt="image" />
                    </motion.div>
                    <motion.h1
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.3}
                        className="faq-hero__title"
                    >
                        {t("title")}
                    </motion.h1>
                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.4}
                        className="faq-hero__text"
                    >
                        {t("text")}
                    </motion.p>
                </div>
            </div>
        </section>
    );
};

export default FaqHero;
