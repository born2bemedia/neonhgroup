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


const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState({});
  const pathname = usePathname();

  const menuOpen = () => {
    setMenuOpened(!menuOpened);
    document.body.classList.toggle("no-scroll", !menuOpened);
  };

  const toggleSubmenu = (index) => {
    setSubmenuOpen((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  useEffect(() => {
    setMenuOpened(false);
    document.body.classList.remove("no-scroll");
  }, [pathname]);

  return (
    <>
      <header className="header">
        <div className="header__container">
          <div className="header__body">
            <div className="header__row-01">
              <div className="header__wrapper _container">
                <div className="header__col-01">
                  <ul className="header__contacts">
                    <li className="header__contact">
                      <Link href="mailto:example@gmail.com" className="header__contact-link">example@gmail.com</Link>
                    </li>
                    <li className="header__contact">
                      <Link href="tel:+1000000000" className="header__contact-link">+1 000 000 000</Link>
                    </li>
                  </ul>
                </div>
                <div className="header__col-02">
                  <ul className="header__socials">
                    <li className="header__social">
                      <Link href="#" className="header__social-link"><Facebook /></Link>
                    </li>
                    <li className="header__social">
                      <Link href="#" className="header__social-link"><Instagram /></Link>
                    </li>
                    <li className="header__social">
                      <Link href="#" className="header__social-link"> <Linkedin /> </Link>
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
                      <span className="title">NEON HR GROUP</span>
                      <span className="subtitle">Flexible. Scalable. HR That Works for You.</span>
                    </div>
                  </Link>
                </div>
                <div className="header__col-04"></div>
                <div className="header__col-05">
                  <button className="header__menu-btn">
                    <Menu />
                  </button>
                  <Link href="#" className="header__sssistance">Assistance</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
