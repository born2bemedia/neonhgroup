import React from "react";
import { Urbanist, Roboto } from "next/font/google";
import localFont from "next/font/local";
import "@/styles/base.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
/* import RequestPopup from "@/components/RequestPopup"; */
import { GoogleAnalytics } from "@next/third-parties/google";
import { PopupsProvider } from "@/context/PopupsContext";
/* import OrderPopup from "@/components/OrderPopup"; */
import ServicePopup from "@/components/ServicePopup";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";

const gilroy = localFont({
    src: [
        {
            path: "/fonts/Gilroy-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "/fonts/Gilroy-Medium.ttf",
            weight: "500",
            style: "normal",
        },
        {
            path: "/fonts/Gilroy-Bold.ttf",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-gilroy",
});

const urbanist = Urbanist({
    subsets: ["latin"],
    weight: ["100", "300", "400", "500", "700", "900"],
    display: "swap",
});
const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "700"],
    display: "swap",
});

export default async function RootLayout({ children, params }) {
    const { locale } = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${urbanist.className} ${roboto.className} ${gilroy.variable}`}
            >
                <GoogleAnalytics gaId="G-3MY5QN7V8N" />
                <NextIntlClientProvider>
                    <PopupsProvider>
                        <Preloader />
                        <Header />
                        <main className="site">{children}</main>
                        <Footer />
                        {/* <OrderPopup /> */}
                        <ServicePopup />
                    </PopupsProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
