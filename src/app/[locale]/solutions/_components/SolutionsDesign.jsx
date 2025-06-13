"use client";
import React, { useState, useEffect } from "react";
import "@/styles/solutions.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import OrderButton from "@/components/OrderButton";
import MarkDark from "@/icons/other/MarkDark";
import { useTranslations } from "next-intl";

const SolutionsDesign = () => {
    const t = useTranslations("solutions.design");

    return (
        <section className="solutions-design">
            <div className="solutions-design__container _container">
                <div className="solutions-design__body">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.1}
                        className="solutions-design__title"
                    >
                        {t("title.0")} <br /> {t("title.1")} <br />{" "}
                        {t("title.2")}
                    </motion.h2>
                    <div className="solutions-design__items">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.2}
                            className="solutions-design__item"
                        >
                            <img
                                src="/images/services/solutions-icon-01.svg"
                                alt="icon"
                                className="solutions-design__icon"
                            ></img>
                            <h3 className="solutions-design__package">
                                {t("items.0.title")}
                            </h3>
                            <p className="solutions-design__text">
                                {t("items.0.text.0")}
                                <br />
                                <br />
                                {t("items.0.text.1")}
                            </p>
                            <ul className="solutions-design__list">
                                <li className="solutions-design__li">
                                    <MarkDark />
                                    {t("items.0.list.0")}
                                </li>
                                <li className="solutions-design__li">
                                    <MarkDark />
                                    {t("items.0.list.1")}
                                </li>
                                <li className="solutions-design__li">
                                    <MarkDark />
                                    {t("items.0.list.2")}
                                </li>
                                <li className="solutions-design__li">
                                    <MarkDark />
                                    {t("items.0.list.3")}
                                </li>
                                <li className="solutions-design__li">
                                    <MarkDark />
                                    {t("items.0.list.4")}
                                </li>
                            </ul>
                            <div className="solutions-design__price">
                                <div className="from">/{t("from")}</div>
                                <div className="price">€12 000</div>
                            </div>
                            <OrderButton
                                className={"solutions-design__link"}
                                text={t("requestNow")}
                                service={t("items.0.title")}
                            />
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="solutions-design__item"
                        >
                            <img
                                src="/images/services/solutions-icon-02.svg"
                                alt="icon"
                                className="solutions-design__icon"
                            ></img>
                            <h3 className="solutions-design__package">
                                {t("items.1.title")}
                            </h3>
                            <p className="solutions-design__text">
                                {t("items.1.text.0")}
                                <br />
                                <br />
                                {t("items.1.text.1")}
                            </p>
                            <ul className="solutions-design__list">
                                <li className="solutions-design__li">
                                    <MarkDark />
                                    {t("items.1.list.0")}
                                </li>
                                <li className="solutions-design__li">
                                    <MarkDark />
                                    {t("items.1.list.1")}
                                </li>
                                <li className="solutions-design__li">
                                    <MarkDark />
                                    {t("items.1.list.2")}
                                </li>
                                <li className="solutions-design__li">
                                    <MarkDark />
                                    {t("items.1.list.3")}
                                </li>
                                <li className="solutions-design__li">
                                    <MarkDark />
                                    {t("items.1.list.4")}
                                </li>
                            </ul>
                            <div className="solutions-design__price">
                                <div className="from">/{t("from")}</div>
                                <div className="price">€15 000</div>
                            </div>
                            <OrderButton
                                className={"solutions-design__link"}
                                text={t("requestNow")}
                                service={t("items.1.title")}
                            />
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.4}
                            className="solutions-design__item"
                        >
                            <img
                                src="/images/services/solutions-icon-03.svg"
                                alt="icon"
                                className="solutions-design__icon"
                            ></img>
                            <h3 className="solutions-design__package">
                                {t("items.2.title")}
                            </h3>
                            <p className="solutions-design__text">
                                {t("items.2.text.0")}
                                <br />
                                <br />
                                {t("items.2.text.1")}
                            </p>
                            <ul className="solutions-design__list">
                                <li className="solutions-design__li">
                                    <MarkDark />
                                    {t("items.2.list.0")}
                                </li>
                                <li className="solutions-design__li">
                                    <MarkDark />
                                    {t("items.2.list.1")}
                                </li>
                                <li className="solutions-design__li">
                                    <MarkDark />
                                    {t("items.2.list.2")}
                                </li>
                                <li className="solutions-design__li">
                                    <MarkDark />
                                    {t("items.2.list.3")}
                                </li>
                                <li className="solutions-design__li">
                                    <MarkDark />
                                    {t("items.2.list.4")}
                                </li>
                            </ul>
                            <div className="solutions-design__price">
                                <div className="from">/{t("from")}</div>
                                <div className="price">€18 000</div>
                            </div>
                            <OrderButton
                                className={"solutions-design__link"}
                                text={t("requestNow")}
                                service={t("items.2.title")}
                            />
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.2}
                            className="solutions-design__item"
                        >
                            <img
                                src="/images/services/solutions-icon-04.svg"
                                alt="icon"
                                className="solutions-design__icon"
                            ></img>
                            <h3 className="solutions-design__package">
                                {t("items.3.title")}
                            </h3>
                            <p className="solutions-design__text">
                                {t("items.3.text.0")}
                                <br />
                                <br />
                                {t("items.3.text.1")}
                            </p>
                            <ul className="solutions-design__list">
                                <li className="solutions-design__li">
                                    <MarkDark />
                                    {t("items.3.list.0")}
                                </li>
                                <li className="solutions-design__li">
                                    <MarkDark />
                                    {t("items.3.list.1")}
                                </li>
                                <li className="solutions-design__li">
                                    <MarkDark />
                                    {t("items.3.list.2")}
                                </li>
                                <li className="solutions-design__li">
                                    <MarkDark />
                                    {t("items.3.list.3")}
                                </li>
                                <li className="solutions-design__li">
                                    <MarkDark />
                                    {t("items.3.list.4")}
                                </li>
                            </ul>
                            <div className="solutions-design__price">
                                <div className="from">/{t("from")}</div>
                                <div className="price">€14 000</div>
                            </div>
                            <OrderButton
                                className={"solutions-design__link"}
                                text={t("requestNow")}
                                service={t("items.3.title")}
                            />
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="solutions-design__item"
                        >
                            <img
                                src="/images/services/solutions-icon-05.svg"
                                alt="icon"
                                className="solutions-design__icon"
                            ></img>
                            <h3 className="solutions-design__package">
                                {t("items.4.title")}
                            </h3>
                            <p className="solutions-design__text">
                                {t("items.4.text.0")}
                                <br />
                                <br />
                                {t("items.4.text.1")}
                            </p>
                            <ul className="solutions-design__list">
                                <li className="solutions-design__li">
                                    <MarkDark />
                                    {t("items.4.list.0")}
                                </li>
                                <li className="solutions-design__li">
                                    <MarkDark />
                                    {t("items.4.list.1")}
                                </li>
                                <li className="solutions-design__li">
                                    <MarkDark />
                                    {t("items.4.list.2")}
                                </li>
                                <li className="solutions-design__li">
                                    <MarkDark />
                                    {t("items.4.list.3")}
                                </li>
                                <li className="solutions-design__li">
                                    <MarkDark />
                                    {t("items.4.list.4")}
                                </li>
                            </ul>
                            <div className="solutions-design__price">
                                <div className="from">/{t("from")}</div>
                                <div className="price">€16 000</div>
                            </div>
                            <OrderButton
                                className={"solutions-design__link"}
                                text={t("requestNow")}
                                service={t("items.4.title")}
                            />
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="solutions-design__item"
                        >
                            <img
                                src="/images/services/solutions-icon-06.svg"
                                alt="icon"
                                className="solutions-design__icon"
                            ></img>
                            <h3 className="solutions-design__package">
                                {t("items.5.title")}
                            </h3>
                            <p className="solutions-design__text">
                                {t("items.5.text.0")}
                                <br />
                                <br />
                                {t("items.5.text.1")}
                            </p>
                            <ul className="solutions-design__list">
                                <li className="solutions-design__li">
                                    <MarkDark />
                                    {t("items.5.list.0")}
                                </li>
                                <li className="solutions-design__li">
                                    <MarkDark />
                                    {t("items.5.list.1")}
                                </li>
                                <li className="solutions-design__li">
                                    <MarkDark />
                                    {t("items.5.list.2")}
                                </li>
                                <li className="solutions-design__li">
                                    <MarkDark />
                                    {t("items.5.list.3")}
                                </li>
                                <li className="solutions-design__li">
                                    <MarkDark />
                                    {t("items.5.list.4")}
                                </li>
                            </ul>
                            <div className="solutions-design__price">
                                <div className="from">/{t("from")}</div>
                                <div className="price">€20 000</div>
                            </div>
                            <OrderButton
                                className={"solutions-design__link"}
                                text={t("requestNow")}
                                service={t("items.5.title")}
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SolutionsDesign;
