"use client";
import React, { useState } from "react";
import "@/styles/faq.scss";
import { motion } from "framer-motion";
import ArrowDown from "@/icons/other/ArrowDown";
import { useTranslations } from "next-intl";

const FaqMain = () => {
    const [openIndexes, setOpenIndexes] = useState({});

    const t = useTranslations("faq.data");

    const toggleAccordion = (index) => {
        setOpenIndexes((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    const faqData = [
        {
            title: t("serviceDelivery.title"),
            items: [
                {
                    question: t("serviceDelivery.items.0.question"),
                    answer: t("serviceDelivery.items.0.answer"),
                },
                {
                    question: t("serviceDelivery.items.1.question"),
                    answer: t("serviceDelivery.items.1.answer"),
                },
                {
                    question: t("serviceDelivery.items.2.question"),
                    answer: t("serviceDelivery.items.2.answer"),
                },
            ],
        },
        {
            title: t("communicationSupport.title"),
            items: [
                {
                    question: t("communicationSupport.items.0.question"),
                    answer: t("communicationSupport.items.0.answer"),
                },
                {
                    question: t("communicationSupport.items.1.question"),
                    answer: t("communicationSupport.items.1.answer"),
                },
                {
                    question: t("communicationSupport.items.2.question"),
                    answer: t("communicationSupport.items.2.answer"),
                },
            ],
        },
        {
            title: t("deliverablesDocumentation.title"),
            items: [
                {
                    question: t("deliverablesDocumentation.items.0.question"),
                    answer: t("deliverablesDocumentation.items.0.answer"),
                },
                {
                    question: t("deliverablesDocumentation.items.1.question"),
                    answer: t("deliverablesDocumentation.items.1.answer"),
                },
            ],
        },
        {
            title: t("processesWorkflow.title"),
            items: [
                {
                    question: t("processesWorkflow.items.0.question"),
                    answer: t("processesWorkflow.items.0.answer"),
                },
                {
                    question: t("processesWorkflow.items.1.question"),
                    answer: t("processesWorkflow.items.1.answer"),
                },
                {
                    question: t("processesWorkflow.items.2.question"),
                    answer: t("processesWorkflow.items.2.answer"),
                },
            ],
        },
    ];

    return (
        <section className="faq-main">
            <div className="faq-main__container _container">
                <div className="faq-main__body">
                    {faqData.map((section, sectionIndex) => (
                        <div key={sectionIndex} className="faq-main__row">
                            <h2 className="faq-main__title">{section.title}</h2>
                            <div className="faq-main__content">
                                {section.items.map((item, itemIndex) => {
                                    const index = `${sectionIndex}-${itemIndex}`;
                                    const isOpen = openIndexes[index];

                                    return (
                                        <div
                                            key={index}
                                            className="faq-main__accordion"
                                        >
                                            <button
                                                className={`faq-main__accordion-btn ${isOpen ? "_active" : ""}`}
                                                onClick={() =>
                                                    toggleAccordion(index)
                                                }
                                            >
                                                {item.question}
                                                <ArrowDown
                                                    style={{
                                                        transform: isOpen
                                                            ? "rotate(180deg)"
                                                            : "rotate(0deg)",
                                                        transition:
                                                            "transform 0.3s ease",
                                                    }}
                                                />
                                            </button>

                                            <motion.div
                                                initial={{
                                                    height: 0,
                                                    opacity: 0,
                                                }}
                                                animate={{
                                                    height: isOpen ? "auto" : 0,
                                                    opacity: isOpen ? 1 : 0,
                                                }}
                                                transition={{
                                                    duration: 0.4,
                                                    ease: "easeInOut",
                                                }}
                                                style={{ overflow: "hidden" }}
                                            >
                                                <div className="faq-main__wrapper">
                                                    {item.answer}
                                                </div>
                                            </motion.div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FaqMain;
