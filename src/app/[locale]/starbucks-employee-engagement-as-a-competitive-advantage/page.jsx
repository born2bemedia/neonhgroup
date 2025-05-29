import CaseHero from "./_components/CaseHero";
import CaseMain from "./_components/CaseMain";
import CaseNeed from "./_components/CaseNeed";


export const metadata = {
    title: "Starbucks Employee Engagement Case Study | Neon HR Group",
    description:
        "Explore how Starbucks used employee engagement and benefits to reduce turnover, boost service quality, and drive business growth.",
    openGraph: {
        title: "Starbucks Employee Engagement Case Study | Neon HR Group",
        description:
            "Explore how Starbucks used employee engagement and benefits to reduce turnover, boost service quality, and drive business growth.",
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
