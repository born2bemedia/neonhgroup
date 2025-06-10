"use client";
import React, { useState, useEffect } from "react";
import "@/styles/cases.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";

const CaseNeed = () => {
    const t = useTranslations("starbucksEmployeeEngagement.need");

    return (
        <section className="case-need">
            <div className="case-need__container _container">
                <div className="case-need__body">
                    <div className="case-need__col-01">
                        <motion.h2
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.2}
                            className="case-need__title"
                        >
                            {t("title.0")} <br /> {t("title.1")}
                        </motion.h2>
                        <motion.p
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="case-need__text"
                        >
                            {t("text")}
                        </motion.p>
                        <Link href="/contacts" className="case-need__link">
                            {t("link")}
                        </Link>
                    </div>
                    <div className="case-need__col-02">
                        <img
                            src="/images/cases/img-01.png"
                            alt="image"
                            className="case-need__image"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CaseNeed;
