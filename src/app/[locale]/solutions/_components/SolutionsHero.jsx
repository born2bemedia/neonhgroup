"use client";
import React, { useState, useEffect } from "react";
import "@/styles/home/home.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import OrderButton from "@/components/OrderButton";
import { useTranslations } from "next-intl";

const SolutionsHero = () => {
    const t = useTranslations("solutions.hero");

    return (
        <section className="solutions-hero">
            <div className="solutions-hero__container _container">
                <div className="solutions-hero__body">
                    <div className="solutions-hero__col-01">
                        <motion.h1
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.1}
                            className="solutions-hero__title"
                        >
                            {t("title")}
                        </motion.h1>
                        <motion.p
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.2}
                            className="solutions-hero__text"
                        >
                            {t("text")}
                        </motion.p>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="solutions-hero__buttons"
                        >
                            <OrderButton
                                className={"solutions-hero__link"}
                                text={t("btnLabel")}
                                service={"Book a Consultation"}
                            />
                        </motion.div>
                    </div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.3}
                        className="solutions-hero__col-02"
                    >
                        <img src="/images/services/img-16.png" alt="image" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SolutionsHero;
