import CasesHero from "./_components/CasesHero";
import CasesMain from "./_components/CasesMain";



export const metadata = {
    title: "HR Success Stories & Case Studies | Neon HR Group",
    description:
        "Identify how strategic HR decisions have transformed real businesses through talent, leadership, and workforce optimization.",
    openGraph: {
        title: "HR Success Stories & Case Studies | Neon HR Group",
        description:
            "Identify how strategic HR decisions have transformed real businesses through talent, leadership, and workforce optimization.",
        images: "/images/cta-banner.jpg",
    },
};

export default function Cases() {
    return (
        <>
            <CasesHero />
            <CasesMain />
        </>
    );
}
