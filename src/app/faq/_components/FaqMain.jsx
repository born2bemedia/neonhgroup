"use client";
import React, { useState } from "react";
import "@/styles/faq.scss";
import { motion } from "framer-motion";
import ArrowDown from "@/icons/other/ArrowDown";

const faqData = [
    {
        title: "Service Delivery & Approach",
        items: [
            { question: "How do you deliver your HR services—on-site or remotely?", answer: "We operate fully remotely, allowing us to support clients across regions without compromising quality or responsiveness." },
            { question: "Are your services customized or based on pre-set templates?", answer: "All our solutions are tailored to each client’s business needs, industry specifics, and workforce structure." },
            { question: "What is the typical timeline for implementing a full HR solution?", answer: "Depending on scope, delivery takes between 3 to 8 weeks, with clear milestones communicated throughout the process." }
        ]
    },
    {
        title: "Communication & Support",
        items: [
            { question: "Will I have a dedicated contact or team during the service period?", answer: "Yes, you’ll have a dedicated HR expert or project manager assigned to oversee your solution from start to finish." },
            { question: "How do we communicate during the project—calls, emails, or tools?", answer: "We work through email, scheduled video calls, and project management tools as preferred by the client." },
            { question: "Do you offer post-project support or follow-ups?", answer: "Yes, all major solutions include a post-delivery check-in and optional ongoing support packages." }
        ]
    },
    {
        title: "Deliverables & Documentation",
        items: [
            { question: "What kind of documentation do we receive after service completion?", answer: "You can reach us via email or live chat..." },
            { question: "Are the HR policies and documents legally compliant?", answer: "Yes, all deliverables are built in accordance with local labor laws and best practice standards." },
            { question: "Can you provide documentation in multiple languages?", answer: "Yes, we offer multilingual documentation upon request, depending on your operational regions." }
        ]
    },
    {
        title: "Processes & Workflow",
        items: [
            { question: "How do you start the collaboration process?", answer: "It begins with a consultation and brief analysis of your current HR state, followed by a detailed service proposal." },
            { question: "Can I combine multiple services into one project?", answer: "Absolutely. We often combine several services into custom-built solutions based on your company’s needs." },
            { question: "Do you work with businesses in all industries?", answer: "Yes, our expertise spans over 10+ sectors, and all services are adjusted to industry-specific requirements." }
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
