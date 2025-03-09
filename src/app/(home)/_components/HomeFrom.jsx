"use client";
import React, { useState, useEffect } from "react";
import "@/styles/home/home.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";

const HomeFrom = () => {

  return (
    <section className="home-from">
        <div className="home-from__container _container">
            <div className="home-from__body">
                <h2 className="home-from__title">From talent acquisition to payroll <br /> optimization – comprehensive HR solutions <br /> tailored to your business.</h2>
                <div className="home-from__items">
                    <div className="home-from__item"></div>
                    <div className="home-from__item"></div>
                    <div className="home-from__item"></div>
                    <div className="home-from__item"></div>
                    <div className="home-from__item"></div>
                    <div className="home-from__item"></div>
                    <div className="home-from__item"></div>
                    <div className="home-from__item"></div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default HomeFrom;