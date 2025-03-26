"use client";
import React, { useState, useEffect } from "react";
import "@/styles/home/home.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import Percent from "./Percent";

const HomeImpact = () => {

  return (
    <section className="home-impact">
      <div className="home-impact__container _container">
        <div className="home-impact__body">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0.1}
            className="home-impact__title">Neon HR Group <br /> Impact in Numbers</motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0.2}
            className="home-impact__text">Scalable HR solutions to meet every workforce challenge.</motion.p>
          <Link href="/our-expertise" className="home-impact__link">Explore Our Expertise</Link>
          <div className="home-impact__items">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={0.2}
              className="home-impact__item">
              <div className="home-impact__number">
                <Percent percentageMax={100} prefix="+" />
              </div>
              <h3 className="home-impact__label">Businesses HR-Enhanced</h3>
              <p className="home-impact__desc">Helping companies optimize, scale, and strengthen their workforce.</p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={0.3}
              className="home-impact__item">
              <div className="home-impact__number">
                <Percent percentageMax={10} prefix="+" />
              </div>
              <h3 className="home-impact__label">Industries Covered</h3>
              <p className="home-impact__desc">Industry-specific HR expertise across key business sectors.</p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={0.4}
              className="home-impact__item">
              <div className="home-impact__number">
                <Percent percentageMax={24} prefix="" />
              </div>
              <h3 className="home-impact__label">Conferences Attended & Contributed</h3>
              <p className="home-impact__desc">Staying at the forefront of HR trends and innovations.</p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={0.2}
              className="home-impact__item">
              <div className="home-impact__number">
                <Percent percentageMax={12} prefix="" />
              </div>
              <h3 className="home-impact__label">HR Experts on Board</h3>
              <p className="home-impact__desc">Helping companies optimize, scale, and strengthen their workforce.</p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={0.3}
              className="home-impact__item">
              <div className="home-impact__number">
                <Percent percentageMax={100} prefix="K+" />
              </div>
              <h3 className="home-impact__label">Candidates Screened</h3>
              <p className="home-impact__desc">Helping companies optimize, scale, and strengthen their workforce.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeImpact;