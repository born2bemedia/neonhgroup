"use client";
import React, { useState } from "react";
import "@/styles/home/home.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const HomeHow = () => {
    const t = useTranslations("home.how");

    const [activeIndex, setActiveIndex] = useState(null);

    const handleAccordionToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const accordionData = [
        {
            title: t("items.0.title"),
            content: t("items.0.text"),
        },
        {
            title: t("items.1.title"),
            content: t("items.1.text"),
        },
        {
            title: t("items.2.title"),
            content: t("items.2.text"),
        },
        {
            title: t("items.3.title"),
            content: t("items.3.text"),
        },
        {
            title: t("items.4.title"),
            content: t("items.4.text"),
        },
    ];

    return (
        <section className="home-how">
            <div className="home-how__container _container">
                <div className="home-how__body">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.2}
                        className="home-how__title"
                    >
                        {t("title")}
                    </motion.h2>
                    <div className="home-how__content">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="home-how__col-01"
                        >
                            {accordionData.map((item, index) => (
                                <div
                                    key={index}
                                    className="home-how__accordion-item"
                                    onClick={() => handleAccordionToggle(index)}
                                >
                                    <div className="home-how__accordion-header">
                                        <span>{item.title}</span>
                                        <img
                                            className={`accordion-icon ${activeIndex === index ? "active" : ""}`}
                                            src="/images/home/home-arrow-01.svg"
                                            alt="toggle-icon"
                                        />
                                    </div>
                                    <motion.div
                                        className="home-how__accordion-content"
                                        initial={{ height: 0 }}
                                        animate={{
                                            height:
                                                activeIndex === index
                                                    ? "auto"
                                                    : 0,
                                        }}
                                        transition={{ duration: 0.3 }}
                                        style={{ overflow: "hidden" }}
                                    >
                                        <p>{item.content}</p>
                                    </motion.div>
                                </div>
                            ))}
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.4}
                            className="home-how__col-02"
                        >
                            <img
                                src="/images/home/home-img-06.png"
                                alt="image"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeHow;
