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
            <div className="home-from__item">
              <div className="home-from__icon">
                <img src="/images/home/icon-01.svg" alt="icon" />
              </div>
              <h3 className="home-from__label">Recruitment & Hiring</h3>
              <p className="home-from__text">Find top talent fast with expert sourcing and seamless hiring.</p>
              <Link href="#" className="home-from__link">Find Talents</Link>
            </div>
            <div className="home-from__item">
              <div className="home-from__icon">
                <img src="/images/home/icon-02.svg" alt="icon" />
              </div>
              <h3 className="home-from__label">HR Consulting & Strategy</h3>
              <p className="home-from__text">Optimize workforce planning and build strong HR foundations.</p>
              <Link href="#" className="home-from__link">Optimize HR</Link>
            </div>
            <div className="home-from__item">
              <div className="home-from__icon">
                <img src="/images/home/icon-03.svg" alt="icon" />
              </div>
              <h3 className="home-from__label">Employee Assessment & Development</h3>
              <p className="home-from__text">Elevate performance with skills testing and leadership training.</p>
              <Link href="#" className="home-from__link">Improve Skills</Link>
            </div>
            <div className="home-from__item">
              <div className="home-from__icon">
                <img src="/images/home/icon-04.svg" alt="icon" />
              </div>
              <h3 className="home-from__label">HR Operations & Outsourcing</h3>
              <p className="home-from__text">Streamline payroll, contracts, and day-to-day HR tasks.</p>
              <Link href="#" className="home-from__link">Streamline HR</Link>
            </div>
            <div className="home-from__item">
              <div className="home-from__icon">
                <img src="/images/home/icon-05.svg" alt="icon" />
              </div>
              <h3 className="home-from__label">Legal & <br /> Compliance Services</h3>
              <p className="home-from__text">Ensure full labor law compliance and mitigate risks.</p>
              <Link href="#" className="home-from__link">Stay Compliant</Link>
            </div>
            <div className="home-from__item">
              <div className="home-from__icon">
                <img src="/images/home/icon-06.svg" alt="icon" />
              </div>
              <h3 className="home-from__label">Employee Engagement & Well-being</h3>
              <p className="home-from__text">Boost retention with culture strategies and wellness programs.</p>
              <Link href="#" className="home-from__link">Engage Team</Link>
            </div>
            <div className="home-from__item">
              <div className="home-from__icon">
                <img src="/images/home/icon-07.svg" alt="icon" />
              </div>
              <h3 className="home-from__label">Flexible HR Package Solutions</h3>
              <p className="home-from__text">Scalable plans to match your business growth and workforce needs.</p>
              <Link href="#" className="home-from__link">Explore Packages</Link>
            </div>
            <div className="home-from__item">
              <div className="home-from__icon">
                <img src="/images/home/icon-08.svg" alt="icon" />
              </div>
              <h3 className="home-from__label">Industry-Specific HR Services</h3>
              <p className="home-from__text">Customized hiring and HR solutions for your sector.</p>
              <Link href="#" className="home-from__link">Explore Solutions</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFrom;