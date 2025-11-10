"use client";
import React from "react";
import "@/styles/footer.scss";
import "@/styles/base.scss";
import Link from "next/link";
import Facebook from "@/icons/social/Facebook";
import Instagram from "@/icons/social/Instagram";
import LogoWhite from "@/icons/other/LogoWhite";
import Linkedin from "@/icons/social/Linkedin";
import { useTranslations } from "next-intl";

const Footer = () => {
    const t = useTranslations("footer");
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer__container _container">
                <div className="footer__body">
                    <div className="footer__row-01">
                        <div className="footer__col-01">
                            <Link href="/" className="footer__logo">
                                <LogoWhite />
                                <div className="wrapper">
                                    <span className="title">{t("title")}</span>
                                    <span className="subtitle">
                                        {t("subtitle")}
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <div className="footer__col-02">
                            <div className="footer__col">
                                <h3 className="footer__title">
                                    {t("company")}
                                </h3>
                                <ul className="footer__list">
                                    <li className="footer__item">
                                        <Link
                                            href="/our-expertise"
                                            className="footer__link"
                                        >
                                            {t("items.0")}
                                        </Link>
                                    </li>
                                    <li className="footer__item">
                                        <Link
                                            href="/cases"
                                            className="footer__link"
                                        >
                                            {t("items.1")}
                                        </Link>
                                    </li>
                                    <li className="footer__item">
                                        <Link
                                            href="/faq"
                                            className="footer__link"
                                        >
                                            {t("items.2")}
                                        </Link>
                                    </li>
                                    <li className="footer__item">
                                        <Link
                                            href="/contacts"
                                            className="footer__link"
                                        >
                                            {t("items.3")}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer__col">
                                <h3 className="footer__title">
                                    {t("services")}
                                </h3>
                                <ul className="footer__list">
                                    <li className="footer__item">
                                        <Link
                                            href="/recruitment-hiring-services"
                                            className="footer__link"
                                        >
                                            {t("items.4")}
                                        </Link>
                                    </li>
                                    <li className="footer__item">
                                        <Link
                                            href="/hr-consulting-strategy"
                                            className="footer__link"
                                        >
                                            {t("items.5")}
                                        </Link>
                                    </li>
                                    <li className="footer__item">
                                        <Link
                                            href="/employee-assessment-development"
                                            className="footer__link"
                                        >
                                            {t("items.6")}
                                        </Link>
                                    </li>
                                    <li className="footer__item">
                                        <Link
                                            href="/hr-operations-outsourcing"
                                            className="footer__link"
                                        >
                                            {t("items.7")}
                                        </Link>
                                    </li>
                                    <li className="footer__item">
                                        <Link
                                            href="/legal-compliance-services"
                                            className="footer__link"
                                        >
                                            {t("items.8")}
                                        </Link>
                                    </li>
                                    <li className="footer__item">
                                        <Link
                                            href="/employee-engagement-well-being"
                                            className="footer__link"
                                        >
                                            {t("items.9")}
                                        </Link>
                                    </li>
                                    <li className="footer__item">
                                        <Link
                                            href="/industry-specific-hr-services"
                                            className="footer__link"
                                        >
                                            {t("items.10")}
                                        </Link>
                                    </li>
                                    <li className="footer__item">
                                        <Link
                                            href="/solutions"
                                            className="footer__link"
                                        >
                                            {t("items.11")}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer__col">
                                <h3 className="footer__title">{t("legal")}</h3>
                                <ul className="footer__list">
                                    <li className="footer__item">
                                        <Link
                                            href="/terms-and-conditions"
                                            className="footer__link"
                                        >
                                            {t("items.12")}
                                        </Link>
                                    </li>
                                    <li className="footer__item">
                                        <Link
                                            href="/privacy-policy"
                                            className="footer__link"
                                        >
                                            {t("items.13")}
                                        </Link>
                                    </li>
                                    <li className="footer__item">
                                        <Link
                                            href="/cookie-policy"
                                            className="footer__link"
                                        >
                                            {t("items.14")}
                                        </Link>
                                    </li>
                                    <li className="footer__item">
                                        <Link
                                            href="/refund-policy"
                                            className="footer__link"
                                        >
                                            {t("items.15")}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer__col">
                                <h3 className="footer__title">
                                    {t("contact")}
                                </h3>
                                <ul className="footer__list">
                                    <li className="footer__item">
                                        <Link
                                            href="mainto:info@neonhrgroup.com"
                                            className="footer__link"
                                        >
                                            info@neonhrgroup.com
                                        </Link>
                                    </li>
                                    <li className="footer__item">
                                        <Link
                                            href="tel:+447453176173"
                                            className="footer__link"
                                        >
                                            +447453176173
                                        </Link>
                                    </li>
                                    <li className="footer__item _socials">
                                        <Link href="#" className="_facebook">
                                            <Facebook />
                                        </Link>
                                        <Link href="#" className="_instagram">
                                            <Instagram />
                                        </Link>
                                        <Link href="#" className="_linkedin">
                                            <Linkedin />
                                        </Link>
                                    </li>
                                </ul>
                                <div className="footer__address">
                                    <h4 className="title">
                                        {t("registeredAddress")}
                                    </h4>
                                    <p className="text">
                                        128 City Road, <br /> London, United{" "}
                                        <br /> Kingdom, EC1V 2NX
                                    </p>
                                </div>
                                <div className="footer__address">
                                    <h4 className="title">
                                        {t("officeAddress")}
                                    </h4>
                                    <p className="text">
                                        132A Boundary Road, <br /> St John’s
                                        Wood, <br /> London, NW8 0RH
                                    </p>
                                </div>
                                <div className="footer__address">
                                    <h4 className="title">
                                        {t("registeredNumber")}
                                    </h4>
                                    <p className="text">16264350</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer__row-02">
                        <div className="footer__copy">
                            © {currentYear} Neonhire LTD.{" "}
                            {t("allRightsReserved")}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
