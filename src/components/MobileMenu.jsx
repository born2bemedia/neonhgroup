'use client'

import Submenu from "@/icons/other/Submenu";
import Link from "next/link";
import React, {useEffect} from "react";
import Drawer from 'react-modern-drawer'

import 'react-modern-drawer/dist/index.css'
import "@/styles/header.scss";
import "@/styles/base.scss";
import {usePathname} from "next/navigation";

export default function MobileMenu({ isActive, toggleSubmenu, isSubmenuOpen, setIsActive }) {
  const pathname = usePathname();
  const id = 'mobile-menu-drawer';

  useEffect(() => setIsActive(false), [pathname])

  return (
    <Drawer customIdSuffix={id} className='drawer-container' overlayClassName='drawer-overlay' open={isActive} direction='left' onClose={() => setIsActive(false)}>
      <nav className={`header__menu-mobile${isActive ? '_active' : ''}`}>
        <div className="header__mobile-wrapper">
          <nav className="header__mobile-nav">
            <ul className="header__mobile-list">
              <li className="header__mobile-item _submenu">
                <span onClick={toggleSubmenu}>Services <Submenu /></span>
                <ul className={`header__mobile-submenu${isSubmenuOpen ? '_active' : ''}`}>
                  <div className="wrapper">
                    <li className="header__submenu-item">
                      <Link href="/recruitment-hiring-services" className="header__submenu-link">
                        <img src="/images/menu-icon-01.svg" alt="icon" />
                        <p>Recruitment & Hiring Services</p>
                      </Link>
                    </li>
                    <li className="header__submenu-item">
                      <Link href="/hr-consulting-strategy" className="header__submenu-link">
                        <img src="/images/menu-icon-02.svg" alt="icon" />
                        HR Consulting & Strategy
                      </Link>
                    </li>
                    <li className="header__submenu-item">
                      <Link href="/employee-assessment-development" className="header__submenu-link">
                        <img src="/images/menu-icon-03.svg" alt="icon" />
                        Employee Assessment & Development
                      </Link>
                    </li>
                    <li className="header__submenu-item">
                      <Link href="/hr-operations-outsourcing" className="header__submenu-link">
                        <img src="/images/menu-icon-04.svg" alt="icon" />
                        HR Operations & Outsourcing
                      </Link>
                    </li>
                    <li className="header__submenu-item">
                      <Link href="/legal-compliance-services" className="header__submenu-link">
                        <img src="/images/menu-icon-05.svg" alt="icon" />
                        Legal & Compliance Services
                      </Link>
                    </li>
                    <li className="header__submenu-item">
                      <Link href="/employee-engagement-well-being" className="header__submenu-link">
                        <img src="/images/menu-icon-06.svg" alt="icon" />
                        Employee Engagement & Well-being
                      </Link>
                    </li>
                    <li className="header__submenu-item">
                      <Link href="/industry-specific-hr-services" className="header__submenu-link">
                        <img src="/images/menu-icon-07.svg" alt="icon" />
                        Industry-Specific HR Services
                      </Link>
                    </li>
                  </div>
                </ul>
              </li>
              <li className="header__mobile-item">
                <Link href="/solutions" className="header__mobile-link">Solutions</Link>
              </li>
              <li className="header__mobile-item">
                <Link href="/cases" className="header__mobile-link">Cases</Link>
              </li>
              <li className="header__mobile-item">
                <Link href="/our-expertise" className="header__mobile-link">Our Expertise</Link>
              </li>
              <li className="header__mobile-item">
                <Link href="/faq" className="header__mobile-link">FAQ</Link>
              </li>
              <li className="header__mobile-item">
                <Link href="/contacts" className="header__mobile-link">Contact Us</Link>
              </li>
              <button className='header__mobile-assistance'>
                <Link href="/contacts">Assistance</Link>
              </button>
            </ul>
          </nav>
          <div className="header__mobile-bottom">
            <ul className="header__mobile-contacts">
              <li className="header__mobile-contact">
                <Link href="mailto:info@neonhrgroup.com" className="header__mobile-contact-link">info@neonhrgroup.com</Link>
              </li>
              <li className="header__mobile-contact">
                <Link href="tel:+447450610056" className="header__mobile-contact-link">+447450610056</Link>
              </li>
            </ul>
            <ul className="header__mobile-socials">
              <li className="header__mobile-social">
                <Link href="#" className="header__mobile-social-link _facebook">
                  <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.0837 8.50002C16.0837 4.59002 12.9103 1.41669 9.00033 1.41669C5.09033 1.41669 1.91699 4.59002 1.91699 8.50002C1.91699 11.9284 4.35366 14.7829 7.58366 15.4417V10.625H6.16699V8.50002H7.58366V6.72919C7.58366 5.3621 8.69574 4.25002 10.0628 4.25002H11.8337V6.37502H10.417C10.0274 6.37502 9.70866 6.69377 9.70866 7.08335V8.50002H11.8337V10.625H9.70866V15.5479C13.2857 15.1938 16.0837 12.1763 16.0837 8.50002Z" fill="#020513" />
                  </svg>
                </Link>
              </li>
              <li className="header__mobile-social">
                <Link href="#" className="header__mobile-social-link _instagram">
                  <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.72792 1.41669C10.5248 1.41881 10.9293 1.42306 11.2785 1.43298L11.4159 1.43794C11.5745 1.4436 11.7311 1.45069 11.9202 1.45919C12.6739 1.4946 13.1881 1.6136 13.6393 1.78856C14.1068 1.96848 14.5007 2.21215 14.8945 2.60527C15.2548 2.95925 15.5335 3.3876 15.7112 3.86044C15.8862 4.31165 16.0052 4.8259 16.0406 5.58027C16.0491 5.76869 16.0562 5.92523 16.0618 6.0846L16.0661 6.22202C16.0767 6.57052 16.081 6.97498 16.0824 7.77185L16.0831 8.30027V9.22819C16.0848 9.74485 16.0794 10.2615 16.0668 10.778L16.0625 10.9154C16.0569 11.0748 16.0498 11.2314 16.0413 11.4198C16.0059 12.1741 15.8855 12.6877 15.7112 13.1396C15.5335 13.6124 15.2548 14.0408 14.8945 14.3948C14.5405 14.7551 14.1122 15.0338 13.6393 15.2115C13.1881 15.3864 12.6739 15.5054 11.9202 15.5409L11.4159 15.5621L11.2785 15.5664C10.9293 15.5763 10.5248 15.5812 9.72792 15.5826L9.1995 15.5834H8.27229C7.75539 15.5852 7.2385 15.5797 6.72175 15.5671L6.58434 15.5628C6.41618 15.5564 6.24807 15.5491 6.08 15.5409C5.32633 15.5054 4.81208 15.3864 4.36017 15.2115C3.88759 15.0337 3.45948 14.755 3.10571 14.3948C2.74513 14.0409 2.46616 13.6125 2.28829 13.1396C2.11334 12.6884 1.99434 12.1741 1.95892 11.4198L1.93767 10.9154L1.93413 10.778C1.92107 10.2615 1.91517 9.74486 1.91642 9.22819V7.77185C1.91446 7.2552 1.91965 6.73854 1.932 6.22202L1.93696 6.0846C1.94263 5.92523 1.94971 5.76869 1.95821 5.58027C1.99363 4.8259 2.11263 4.31235 2.28759 3.86044C2.46587 3.38741 2.74533 2.95904 3.10642 2.60527C3.45999 2.24512 3.88784 1.96641 4.36017 1.78856C4.81208 1.6136 5.32563 1.4946 6.08 1.45919C6.26842 1.45069 6.42567 1.4436 6.58434 1.43794L6.72175 1.43369C7.23826 1.4211 7.75492 1.41567 8.27158 1.4174L9.72792 1.41669ZM8.99975 4.95835C8.06044 4.95835 7.15961 5.33149 6.49542 5.99568C5.83122 6.65988 5.45809 7.56071 5.45809 8.50002C5.45809 9.43933 5.83122 10.3402 6.49542 11.0044C7.15961 11.6685 8.06044 12.0417 8.99975 12.0417C9.93906 12.0417 10.8399 11.6685 11.5041 11.0044C12.1683 10.3402 12.5414 9.43933 12.5414 8.50002C12.5414 7.56071 12.1683 6.65988 11.5041 5.99568C10.8399 5.33149 9.93906 4.95835 8.99975 4.95835ZM8.99975 6.37502C9.27881 6.37497 9.55515 6.42989 9.81298 6.53664C10.0708 6.64339 10.3051 6.79988 10.5025 6.99717C10.6998 7.19446 10.8564 7.42869 10.9632 7.68649C11.07 7.94429 11.1251 8.22061 11.1251 8.49967C11.1252 8.77873 11.0702 9.05506 10.9635 9.3129C10.8567 9.57073 10.7002 9.80501 10.503 10.0024C10.3057 10.1997 10.0714 10.3563 9.81364 10.4631C9.55584 10.57 9.27952 10.625 9.00046 10.625C8.43687 10.625 7.89637 10.4011 7.49786 10.0026C7.09934 9.60411 6.87546 9.06361 6.87546 8.50002C6.87546 7.93644 7.09934 7.39593 7.49786 6.99742C7.89637 6.5989 8.43687 6.37502 9.00046 6.37502M12.7192 3.89585C12.4844 3.89585 12.2592 3.98914 12.0931 4.15519C11.9271 4.32123 11.8338 4.54644 11.8338 4.78127C11.8338 5.0161 11.9271 5.24131 12.0931 5.40735C12.2592 5.5734 12.4844 5.66669 12.7192 5.66669C12.954 5.66669 13.1792 5.5734 13.3453 5.40735C13.5113 5.24131 13.6046 5.0161 13.6046 4.78127C13.6046 4.54644 13.5113 4.32123 13.3453 4.15519C13.1792 3.98914 12.954 3.89585 12.7192 3.89585Z" fill="#020513" />
                  </svg>
                </Link>
              </li>
              <li className="header__mobile-social">
                <Link href="#" className="header__mobile-social-link _linkedin">
                  <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.9583 2.125C14.3341 2.125 14.6944 2.27426 14.9601 2.53993C15.2257 2.80561 15.375 3.16594 15.375 3.54167V13.4583C15.375 13.8341 15.2257 14.1944 14.9601 14.4601C14.6944 14.7257 14.3341 14.875 13.9583 14.875H4.04167C3.66594 14.875 3.30561 14.7257 3.03993 14.4601C2.77426 14.1944 2.625 13.8341 2.625 13.4583V3.54167C2.625 3.16594 2.77426 2.80561 3.03993 2.53993C3.30561 2.27426 3.66594 2.125 4.04167 2.125H13.9583ZM13.6042 13.1042V9.35C13.6042 8.73757 13.3609 8.15023 12.9278 7.71717C12.4948 7.28412 11.9074 7.04083 11.295 7.04083C10.6929 7.04083 9.99167 7.40917 9.65167 7.96167V7.17542H7.67542V13.1042H9.65167V9.61208C9.65167 9.06667 10.0908 8.62042 10.6363 8.62042C10.8993 8.62042 11.1515 8.7249 11.3375 8.91087C11.5234 9.09684 11.6279 9.34908 11.6279 9.61208V13.1042H13.6042ZM5.37333 6.06333C5.68894 6.06333 5.99162 5.93796 6.21479 5.71479C6.43796 5.49162 6.56333 5.18894 6.56333 4.87333C6.56333 4.21458 6.03208 3.67625 5.37333 3.67625C5.05585 3.67625 4.75136 3.80237 4.52687 4.02687C4.30237 4.25136 4.17625 4.55585 4.17625 4.87333C4.17625 5.53208 4.71458 6.06333 5.37333 6.06333ZM6.35792 13.1042V7.17542H4.39583V13.1042H6.35792Z" fill="#020513" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Drawer>
  )
}