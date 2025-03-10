"use client";
import React, { useState, useEffect } from "react";
import "@/styles/home/home.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import RequestForm from "@/components/RequestForm";

const HomeLets = () => {

    return (
        <section className="home-lets">
            <div className="home-lets__container _container">
                <div className="home-lets__body">
                    <h2 className="home-lets__title">Let’s Solve Your HR Challenge</h2>
                    <p className="home-lets__text">Tell us what you need, and we’ll craft a tailored solution for your business.</p>
                    <div className="home-lets__content">
                        <div className="home-lets__col-01">
                            <RequestForm />
                        </div>
                        <div className="home-lets__col-02"><img src="/images/home/home-img-11.png" alt="image" /></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeLets;