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
    const page = await getPage("privacy-policy", locale);

    return {
        title: page.title,
        openGraph: {
            title: page.title,
            images: "",
        },
    };
}

const PrivacyPolicy = async ({ params: { locale } }) => {
    const page = await getPage("privacy-policy", locale);

    return (
        <>
            <div className="policy-head"></div>
            <section className="policy">
                <div className="policy__container">
                    <div className="policy__body">
                        <h1 className="policy__title">{page.title}</h1>
                        <PolicyDate />
                        <article
                            dangerouslySetInnerHTML={{ __html: page.body }}
                            className="policy__content"
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default PrivacyPolicy;
