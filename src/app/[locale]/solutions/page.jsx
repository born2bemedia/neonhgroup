import SolutionsDesign from "./_components/SolutionsDesign";
import SolutionsHero from "./_components/SolutionsHero";
import SolutionsNeed from "./_components/SolutionsNeed";



export const metadata = {
    title: "HR Solutions for Business Challenges | Neon HR Group",
    description:
        "Explore strategic HR solutions to set up, optimize, or transform your workforce operations based on real business needs.",
    openGraph: {
        title: "HR Solutions for Business Challenges | Neon HR Group",
        description:
            "Explore strategic HR solutions to set up, optimize, or transform your workforce operations based on real business needs.",
        images: "/images/cta-banner.jpg",
    },
};

export default function Solutions() {
    return (
        <>
            <SolutionsHero />
            <SolutionsDesign />
            <SolutionsNeed />
        </>
    );
}
