"use client";
import React, { useState, useEffect } from "react";
import "@/styles/services.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const ServicesOur = () => {

    return (
        <section className="services-oper">
            <div className="services-oper__container _container">
                <div className="services-oper__body">
                    <h2 className="services-oper__title">Our Approach to HR <br /> Operations & Outsourcing </h2>
                    <div className="services-oper__items">
                        <div className="services-oper__item">
                            <div className="services-oper__col-01">
                                <h3 className="services-oper__label">Avoid Costly Fines & Legal Risks</h3>
                                <p className="services-oper__text">Non-compliance can lead to severe penalties, lawsuits, and reputational damage—we ensure your HR policies align with all regulations.</p>
                            </div>
                            <div className="services-oper__col-02"><img src="/images/services/services-oper-01.jpg" alt="image" /></div>
                        </div>
                        <div className="services-oper__item">
                            <div className="services-oper__col-01">
                                <h3 className="services-oper__label">Protect Your Workforce & Business Integrity</h3>
                                <p className="services-oper__text">Clear, legally sound HR frameworks safeguard employee rights, prevent disputes, and strengthen workplace trust.</p>
                            </div>
                            <div className="services-oper__col-02"><img src="/images/services/services-oper-02.jpg" alt="image" /></div>
                        </div>
                        <div className="services-oper__item">
                            <div className="services-oper__col-01">
                                <h3 className="services-oper__label">Enhance Operational Stability</h3>
                                <p className="services-oper__text">Compliance-driven HR processes reduce risks, improve workforce efficiency, and ensure smooth business operations.</p>
                            </div>
                            <div className="services-oper__col-02"><img src="/images/services/services-oper-03.jpg" alt="image" /></div>
                        </div>
                        <div className="services-oper__item">
                            <div className="services-oper__col-01">
                                <h3 className="services-oper__label">Stay Ahead of Changing Regulations</h3>
                                <p className="services-oper__text">Labor laws evolve—our proactive legal strategies keep your business compliant and protected from future liabilities.</p>
                            </div>
                            <div className="services-oper__col-02"><img src="/images/services/services-oper-04.jpg" alt="image" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesOur;