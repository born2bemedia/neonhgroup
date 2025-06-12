"use client";

import "@/styles/policy.scss";
import { useTranslations } from "next-intl";

export const PolicyDate = () => {
    const t = useTranslations("policies");

    return <p className="policy__date">{t("lastUpdate")}</p>;
};
