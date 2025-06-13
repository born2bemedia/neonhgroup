import { getPage, getPageSlugs } from "@/utils/blogUtils";
import React from "react";
import "@/styles/policy.scss";
import { PolicyDate } from "@/components/PolicyDate";

export async function generateStaticParams() {
    const slugs = await getPageSlugs();
    const locales = ["en", "it", "de"];

    const params = [];
    slugs.forEach((slug) => {
        if (!slug.startsWith("IT-") && !slug.startsWith("DE-")) {
            locales.forEach((locale) => {
                params.push({ slug, locale });
            });
        }
    });

    return params;
}

export async function generateMetadata({ params }) {
    const { locale } = await params;

    const page = await getPage("terms-and-conditions", locale);

    return {
        title: page.title,
        openGraph: {
            title: page.title,
            images: "",
        },
    };
}

const TermsAndConditions = async () => {
    // const page = await getPage("terms-and-conditions", locale);

    return <>Policy</>;
};

export default TermsAndConditions;
