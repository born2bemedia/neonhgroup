"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import st from "./cookie-consent.module.scss";
import { cn } from "@/utils/styles";

export const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const hasAcceptedCookies = localStorage.getItem("cookiesAccepted");
        if (!hasAcceptedCookies) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookiesAccepted", "true");
        setIsVisible(false);
    };

    const handleDecline = () => {
        setIsVisible(false);
    };

    return (
        <div
            className={cn(st.cookiePopup, {
                [st.visible]: isVisible,
            })}
        >
            <h2>Cookie settings</h2>
            <p>
                Cookies help us improve our website. By clicking
                &apos;Accept,&apos; you agree to our use of cookies for
                functionality, analytics, and personalized content. Learn more
                in our <Link href="/cookie-policy">Cookie Policy</Link>.
            </p>
            <div className={st.buttons}>
                <button onClick={handleDecline} className={cn(st.decline)}>
                    Decline
                </button>
                <button onClick={handleAccept} className={cn(st.accept)}>
                    Accept
                </button>
            </div>
        </div>
    );
};
