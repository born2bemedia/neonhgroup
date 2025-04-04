import { getPage, getPageSlugs } from "@/utils/blogUtils";
import React from "react";
import "@/styles/policy.scss";

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

export async function generateMetadata({ params: { locale } }) {
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
  const page = await getPage("terms-and-conditions");
  return (
    <>
      <div className="policy-head"></div>
      <section className="policy">
        <div className="policy__container">
          <div className="policy__body">
            <h1 className="policy__title">{page.title}</h1>
            <p className="policy__date">Last updated: 26 March 2025</p>
            <article dangerouslySetInnerHTML={{ __html: page.body }} className="policy__content" />
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsAndConditions;
