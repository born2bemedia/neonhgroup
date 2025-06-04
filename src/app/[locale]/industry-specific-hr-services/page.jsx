import ServicesHero from "./_components/ServicesHero";
import ServicesIndustries from "./_components/ServicesIndustries";
import ServicesNeed from "./_components/ServicesNeed";
import ServicesOur from "./_components/ServicesOur";

export const metadata = {
    title: "Industry-Specific HR Services | Neon HR Group",
    description:
        "Explore tailored HR solutions designed for your industry to ensure compliance, efficiency, and workforce alignment.",
    openGraph: {
        title: "Industry-Specific HR Services | Neon HR Group",
        description:
            "Explore tailored HR solutions designed for your industry to ensure compliance, efficiency, and workforce alignment.",
        images: "/images/cta-banner.jpg",
    },
};

export default function Services() {
    return (
        <>
            <ServicesHero />
            <ServicesOur />
            <ServicesIndustries />
            <ServicesNeed />
        </>
    );
}
