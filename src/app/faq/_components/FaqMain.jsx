"use client";
import React, { useState } from "react";
import "@/styles/faq.scss";
import { motion } from "framer-motion";
import ArrowDown from "@/icons/other/ArrowDown";

const faqData = [
    {
        title: "Service Delivery & Approach",
        items: [
            { question: "How do you deliver services?", answer: "We follow a structured approach..." },
            { question: "What is your response time?", answer: "Our typical response time is 24 hours..." },
            { question: "Do you provide custom solutions?", answer: "Yes, we tailor solutions to each client..." }
        ]
    },
    {
        title: "Pricing & Payment",
        items: [
            { question: "What payment methods do you accept?", answer: "We accept PayPal, credit cards, and bank transfers..." },
            { question: "Do you offer refunds?", answer: "Yes, refunds are available under certain conditions..." },
            { question: "Are there any hidden fees?", answer: "No, we maintain transparency in pricing..." }
        ]
    },
    {
        title: "Support & Assistance",
        items: [
            { question: "How can I contact support?", answer: "You can reach us via email or live chat..." },
            { question: "Do you offer 24/7 support?", answer: "Yes, our support team is available 24/7..." },
            { question: "Can I upgrade my plan anytime?", answer: "Yes, you can upgrade at any time..." }
        ]
    }
];

const FaqMain = () => {
    const [openIndexes, setOpenIndexes] = useState({});

    const toggleAccordion = (index) => {
        setOpenIndexes((prev) => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

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
                                        <div key={index} className="faq-main__accordion">
                                            <button
                                                className={`faq-main__accordion-btn ${isOpen ? "_active" : ""}`}
                                                onClick={() => toggleAccordion(index)}
                                            >
                                                {item.question}
                                                <ArrowDown style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s ease" }} />
                                            </button>

                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                                style={{ overflow: "hidden" }}
                                            >
                                                <div className="faq-main__wrapper">{item.answer}</div>
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
