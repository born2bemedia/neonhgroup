"use client";
import React, { useState } from "react";
import "@/styles/home/home.scss";
import { motion } from "framer-motion";

const HomeHow = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); 
  };

  const accordionData = [
    { title: "Struggling to Find the Right Talent?", content: "We handle sourcing, screening, and hiring top professionals who match your business needs and company culture." },
    { title: "High Employee Turnover?", content: "We enhance hiring strategies, onboarding, and engagement initiatives to improve retention and job satisfaction." },
    { title: "Recruitment Taking Too Much Time?", content: "Our end-to-end hiring solutions streamline job postings, candidate screening, and interviews—so you can focus on business growth." },
    { title: "Compliance & Legal Risks?", content: "We ensure your HR policies, contracts, and labor practices meet regulations, minimizing risks and ensuring legal compliance." },
    { title: "Need Workforce Flexibility?", content: "Whether you require temporary staff, contract employees, or permanent hires, we provide adaptable workforce solutions for changing business demands." },
  ];

  return (
    <section className="home-how">
      <div className="home-how__container _container">
        <div className="home-how__body">
          <h2 className="home-how__title">How We Can Help</h2>
          <div className="home-how__content">
            <div className="home-how__col-01">
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
                    animate={{ height: activeIndex === index ? "auto" : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: "hidden" }}
                  >
                    <p>{item.content}</p>
                  </motion.div>
                </div>
              ))}
            </div>
            <div className="home-how__col-02">
                <img src="/images/home/home-img-06.png" alt="image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHow;
