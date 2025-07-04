"use client";
import React, { useState, useEffect } from "react";
import "@/styles/home/home.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import OrderButton from "@/components/OrderButton";
import { useTranslations } from "next-intl";

const HomeHero = () => {
    const t = useTranslations("home.hero");

    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const bgImage = isMobile
        ? "/images/home/home-img-02.png" /* Mobile */
        : "/images/home/home-img-01.png"; /* Desktop */

    return (
        <section className="home-hero">
            <div className="home-hero__container _container">
                <div className="home-hero__body">
                    <div className="home-hero__col-01">
                        <motion.h1
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.1}
                            className="home-hero__title"
                        >
                            {t("title")}
                        </motion.h1>
                        <motion.p
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.2}
                            className="home-hero__text"
                        >
                            {t("subtitle")}
                        </motion.p>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="home-hero__buttons"
                        >
                            <Link href="/solutions" className="home-hero__link">
                                {t("explore")}
                            </Link>
                            <OrderButton
                                className={"home-hero__link"}
                                text={"Book a Consultation"}
                                service={"Book a Consultation"}
                            />
                        </motion.div>
                    </div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.4}
                        className="home-hero__col-02"
                    >
                        <img src={bgImage} alt="image" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HomeHero;
