"use client";
import React from "react";
import "@/styles/footer.scss";
import "@/styles/base.scss";
import Link from "next/link";
import Facebook from "@/icons/social/Facebook";
import Instagram from "@/icons/social/Instagram";
import LogoWhite from "@/icons/other/LogoWhite";
import Linkedin from "@/icons/social/Linkedin";

const Footer = () => {
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
                  <span className="title">NEON HR GROUP</span>
                  <span className="subtitle">Flexible. Scalable. HR That Works for You.</span>
                </div>
              </Link>
            </div>
            <div className="footer__col-02">
              <div className="footer__col">
                <h3 className="footer__title">Company</h3>
                <ul className="footer__list">
                  <li className="footer__item"><Link href="#" className="footer__link">Our Expertise</Link></li>
                  <li className="footer__item"><Link href="#" className="footer__link">Cases</Link></li>
                  <li className="footer__item"><Link href="#" className="footer__link">FAQ</Link></li>
                  <li className="footer__item"><Link href="#" className="footer__link">Contact Us</Link></li>
                </ul>
              </div>
              <div className="footer__col">
                <h3 className="footer__title">Services</h3>
                <ul className="footer__list">
                  <li className="footer__item"><Link href="#" className="footer__link">Recruitment & Hiring Services</Link></li>
                  <li className="footer__item"><Link href="#" className="footer__link">HR Consulting & Strategy</Link></li>
                  <li className="footer__item"><Link href="#" className="footer__link">Employee Assessment & Development</Link></li>
                  <li className="footer__item"><Link href="#" className="footer__link">HR Operations & Outsourcing</Link></li>
                  <li className="footer__item"><Link href="#" className="footer__link">Legal & Compliance Services</Link></li>
                  <li className="footer__item"><Link href="#" className="footer__link">Employee Engagement & Well-being</Link></li>
                  <li className="footer__item"><Link href="#" className="footer__link">Industry-Specific HR Services</Link></li>
                  <li className="footer__item"><Link href="#" className="footer__link">Complex Solutions</Link></li>
                </ul>
              </div>
              <div className="footer__col">
                <h3 className="footer__title">Legal</h3>
                <ul className="footer__list">
                  <li className="footer__item"><Link href="#" className="footer__link">Terms of Use</Link></li>
                  <li className="footer__item"><Link href="#" className="footer__link">Privacy Policy</Link></li>
                  <li className="footer__item"><Link href="#" className="footer__link">Cookie Policy</Link></li>
                  <li className="footer__item"><Link href="#" className="footer__link">Refund Policy</Link></li>
                </ul>
              </div>
              <div className="footer__col">
                <h3 className="footer__title">Contact us</h3>
                <ul className="footer__list">
                  <li className="footer__item">
                    <Link href="mainto:example@gmail.com" className="footer__link">example@gmail.com</Link>
                  </li>
                  <li className="footer__item">
                    <Link href="tel:+1000000000" className="footer__link">+1 000 000 000</Link>
                  </li>
                  <li className="footer__item _socials">
                    <Link href="#" className="_facebook"><Facebook /></Link>
                    <Link href="#" className="_instagram"><Instagram /></Link>
                    <Link href="#" className="_linkedin"><Linkedin /></Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer__row-02">
            <div className="footer__copy">© {currentYear} Neonhire LTD. All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;