import ServicesHero from "./_components/ServicesHero";
import ServicesNeed from "./_components/ServicesNeed";
import ServicesNeon from "./_components/ServicesNeon";
import ServicesOur from "./_components/ServicesOur";
import ServicesRequest from "./_components/ServicesRequest";


export const metadata = {
    title: "Employee Engagement & Well-being | Neon HR Group",
    description:
        "Find out how to improve employee satisfaction, boost retention, and create a thriving workplace with tailored engagement strategies.",
    openGraph: {
        title: "Employee Engagement & Well-being | Neon HR Group",
        description:
            "Find out how to improve employee satisfaction, boost retention, and create a thriving workplace with tailored engagement strategies.",
        images: "/images/cta-banner.jpg",
    },
};

export default function Services() {
    return (
        <>
            <ServicesHero />
            <ServicesOur />
            <ServicesNeon />
            <ServicesRequest />
            <ServicesNeed />
        </>
    );
}
