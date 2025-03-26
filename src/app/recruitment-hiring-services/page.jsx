import ServicesHero from "./_components/ServicesHero";
import ServicesNeed from "./_components/ServicesNeed";
import ServicesNeon from "./_components/ServicesNeon";
import ServicesOur from "./_components/ServicesOur";
import ServicesRequest from "./_components/ServicesRequest";


export const metadata = {
    title: "Recruitment & Hiring Services | Neon HR Group",
    description:
        "Find out how our recruitment experts help you hire the right talent faster with scalable, end-to-end hiring solutions.",
    openGraph: {
        title: "Recruitment & Hiring Services | Neon HR Group",
        description:
            "Find out how our recruitment experts help you hire the right talent faster with scalable, end-to-end hiring solutions.",
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
