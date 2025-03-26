"use client";
import React, { useState, useEffect } from "react";
import "@/styles/home/home.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import OrderButton from "@/components/OrderButton";

const HomeHave = () => {

    return (
        <section className="home-have">
            <div className="home-have__container _container">
                <div className="home-have__body">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.1}
                        className="home-have__col-01">
                        <h2 className="home-have__title">Have an HR challenge? Submit your issue, and we’ll craft a tailored solution.</h2>
                        <OrderButton
                            className={"home-have__link"}
                            text={"Get HR Assistance"}
                            service={"Get HR Assistance"}
                        />
                    </motion.div>
                    <div className="home-have__col-02">
                        <img src="/images/home/home-img-07.png" alt="image" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeHave;