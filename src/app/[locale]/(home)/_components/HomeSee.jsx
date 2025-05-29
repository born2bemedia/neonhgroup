"use client";
import React, { useState, useEffect } from "react";
import "@/styles/home/home.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";

const HomeSee = () => {
    const t = useTranslations("home.see");

    return (
        <section className="home-see">
            <div className="home-see__container _container">
                <div className="home-see__body">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.2}
                        className="home-see__title"
                    >
                        {t("title")}
                    </motion.h2>
                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.3}
                        className="home-see__text"
                    >
                        {t("text.0")} <br /> {t("text.1")}
                    </motion.p>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.4}
                        className="home-see__buttons"
                    >
                        <Link href="/cases" className="home-see__link">
                            {t("link.0")}
                        </Link>
                        <Link href="/faq" className="home-see__link">
                            {t("link.1")}
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HomeSee;
