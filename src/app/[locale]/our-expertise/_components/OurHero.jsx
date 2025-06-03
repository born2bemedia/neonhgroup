"use client";
import React, { useState, useEffect } from "react";
import "@/styles/our.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const OurHero = () => {
    const t = useTranslations("ourExpertise.hero");

    return (
        <section className="our-hero">
            <div className="our-hero__container _container">
                <div className="our-hero__body">
                    <div className="our-hero__col-01">
                        <motion.h1
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.2}
                            className="our-hero__title"
                        >
                            {t("title")}
                        </motion.h1>
                        <motion.p
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="our-hero__text"
                        >
                            {t("text")}
                        </motion.p>
                    </div>
                    <div className="our-hero__col-02">
                        <img
                            src="/images/our/img-01.png"
                            alt="image"
                            className="our-hero__image"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurHero;
