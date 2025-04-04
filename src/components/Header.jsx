"use client";
import React, { useEffect, useState } from "react";
import "@/styles/header.scss";
import "@/styles/base.scss";
import Link from "next/link";
import Facebook from "@/icons/social/Facebook";
import Instagram from "@/icons/social/Instagram";
import Linkedin from "@/icons/social/Linkedin";
import { usePathname } from "next/navigation";
import LogoWhite from "@/icons/other/LogoWhite";
import Menu from "@/icons/other/Menu";
import Submenu from "@/icons/other/Submenu";
import LangSwitcher from "@/components/LangSwitcher";
import MobileMenu from "@/components/MobileMenu";
import { cn } from "@/utils/styles";

const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () =>
        window.scrollY > 50 ? setScrolled(true) : setScrolled(false);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const menuOpen = () => {
        setMenuOpened(!menuOpened);
        document.body.classList.toggle("no-scroll", !menuOpened);
    };

    const toggleMenu = () => {
        setIsActive(!isActive);
        menuOpen();
        document.body.classList.toggle("no-scroll", !isActive);
    };

    const toggleSubmenu = () => {
        setIsSubmenuOpen(!isSubmenuOpen);
    };

    return (
        <header className={cn("header", { scrolled })}>
            <div className="header__container">
                <div className="header__body">
                    <div className="header__row-01">
                        <div className="header__wrapper _container">
                            <div className="header__col-01">
                                <ul className="header__contacts">
                                    <li className="header__contact">
                                        <Link
                                            href="mailto:info@neonhrgroup.com"
                                            className="header__contact-link"
                                        >
                                            info@neonhrgroup.com
                                        </Link>
                                    </li>
                                    <li className="header__contact">
                                        <Link
                                            href="tel:447450610056"
                                            className="header__contact-link"
                                        >
                                            +447450610056
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="header__col-02">
                                <ul className="header__socials">
                                    <li className="header__social">
                                        <Link
                                            href="#"
                                            className="header__social-link"
                                        >
                                            <Facebook />
                                        </Link>
                                    </li>
                                    <li className="header__social">
                                        <Link
                                            href="#"
                                            className="header__social-link"
                                        >
                                            <Instagram />
                                        </Link>
                                    </li>
                                    <li className="header__social">
                                        <Link
                                            href="#"
                                            className="header__social-link"
                                        >
                                            {" "}
                                            <Linkedin />{" "}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="header__row-02">
                        <div className="header__wrapper _container">
                            <div className="header__col-03">
                                <Link href="/" className="header__logo">
                                    <LogoWhite />
                                    <div className="wrapper">
                                        <span className="title">
                                            NEON HR GROUP
                                        </span>
                                        <span className="subtitle">
                                            Flexible. Scalable. HR That Works
                                            for You.
                                        </span>
                                    </div>
                                </Link>
                            </div>
                            <div className="header__col-04">
                                <nav className="header__menu">
                                    <ul className="header__menu-list">
                                        <li className="header__menu-item _sublist">
                                            <span>
                                                Services <Submenu />
                                            </span>
                                            <ul className="header__submenu">
                                                <div className="wrapper">
                                                    <li className="header__submenu-item">
                                                        <Link
                                                            href="/recruitment-hiring-services"
                                                            className="header__submenu-link"
                                                        >
                                                            <img
                                                                src="/images/menu-icon-01.svg"
                                                                alt="icon"
                                                            />
                                                            Recruitment & Hiring
                                                            Services
                                                        </Link>
                                                    </li>
                                                    <li className="header__submenu-item">
                                                        <Link
                                                            href="/hr-consulting-strategy"
                                                            className="header__submenu-link"
                                                        >
                                                            <img
                                                                src="/images/menu-icon-02.svg"
                                                                alt="icon"
                                                            />
                                                            HR Consulting &
                                                            Strategy
                                                        </Link>
                                                    </li>
                                                    <li className="header__submenu-item">
                                                        <Link
                                                            href="/employee-assessment-development"
                                                            className="header__submenu-link"
                                                        >
                                                            <img
                                                                src="/images/menu-icon-03.svg"
                                                                alt="icon"
                                                            />
                                                            Employee Assessment
                                                            & Development
                                                        </Link>
                                                    </li>
                                                    <li className="header__submenu-item">
                                                        <Link
                                                            href="/hr-operations-outsourcing"
                                                            className="header__submenu-link"
                                                        >
                                                            <img
                                                                src="/images/menu-icon-04.svg"
                                                                alt="icon"
                                                            />
                                                            HR Operations &
                                                            Outsourcing
                                                        </Link>
                                                    </li>
                                                    <li className="header__submenu-item">
                                                        <Link
                                                            href="/legal-compliance-services"
                                                            className="header__submenu-link"
                                                        >
                                                            <img
                                                                src="/images/menu-icon-05.svg"
                                                                alt="icon"
                                                            />
                                                            Legal & Compliance
                                                            Services
                                                        </Link>
                                                    </li>
                                                    <li className="header__submenu-item">
                                                        <Link
                                                            href="/employee-engagement-well-being"
                                                            className="header__submenu-link"
                                                        >
                                                            <img
                                                                src="/images/menu-icon-06.svg"
                                                                alt="icon"
                                                            />
                                                            Employee Engagement
                                                            & Well-being
                                                        </Link>
                                                    </li>
                                                    <li className="header__submenu-item">
                                                        <Link
                                                            href="/industry-specific-hr-services"
                                                            className="header__submenu-link"
                                                        >
                                                            <img
                                                                src="/images/menu-icon-07.svg"
                                                                alt="icon"
                                                            />
                                                            Industry-Specific HR
                                                            Services
                                                        </Link>
                                                    </li>
                                                </div>
                                            </ul>
                                        </li>
                                        <li className="header__menu-item">
                                            <Link
                                                href="/solutions"
                                                className="header__menu-link"
                                            >
                                                Solutions
                                            </Link>
                                        </li>
                                        <li className="header__menu-item">
                                            <Link
                                                href="/cases"
                                                className="header__menu-link"
                                            >
                                                Cases
                                            </Link>
                                        </li>
                                        <li className="header__menu-item">
                                            <Link
                                                href="/our-expertise"
                                                className="header__menu-link"
                                            >
                                                Our Expertise
                                            </Link>
                                        </li>
                                        <li className="header__menu-item">
                                            <Link
                                                href="/faq"
                                                className="header__menu-link"
                                            >
                                                FAQ
                                            </Link>
                                        </li>
                                        <li className="header__menu-item">
                                            <Link
                                                href="/contacts"
                                                className="header__menu-link"
                                            >
                                                Contact Us
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                                <MobileMenu
                                    isActive={isActive}
                                    isSubmenuOpen={isSubmenuOpen}
                                    toggleSubmenu={toggleSubmenu}
                                    setIsActive={setIsActive}
                                />
                            </div>
                            <div className="header__col-05">
                                <LangSwitcher />
                                <button
                                    className={`header__menu-btn ${isActive ? "_active" : ""}`}
                                    onClick={toggleMenu}
                                >
                                    <Menu />
                                </button>
                                <Link
                                    href="/contacts"
                                    className="header__sssistance"
                                >
                                    Assistance
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
