import CaseHero from "./_components/CaseHero";
import CaseMain from "./_components/CaseMain";
import CaseNeed from "./_components/CaseNeed";


export const metadata = {
    title: "Strategic Hiring That Transformed Apple | Neon HR Group",
    description:
        "Learn how a single HR decision at Apple reshaped its future and drove long-term business growth through operational excellence.",
    openGraph: {
        title: "Strategic Hiring That Transformed Apple | Neon HR Group",
        description:
            "Learn how a single HR decision at Apple reshaped its future and drove long-term business growth through operational excellence.",
        images: "/images/cta-banner.jpg",
    },
};

export default function Case() {
    return (
        <>
            <CaseHero />
            <CaseMain />
            <CaseNeed />
        </>
    );
}
