import ServicesHero from "./_components/ServicesHero";
import ServicesNeed from "./_components/ServicesNeed";
import ServicesNeon from "./_components/ServicesNeon";
import ServicesOur from "./_components/ServicesOur";
import ServicesRequest from "./_components/ServicesRequest";


export const metadata = {
    title: "Legal & Compliance Services | Neon HR Group",
    description:
        "Get expert legal HR support to ensure compliance, reduce risk, and protect your business across every employment process.",
    openGraph: {
        title: "Legal & Compliance Services | Neon HR Group",
        description:
            "Get expert legal HR support to ensure compliance, reduce risk, and protect your business across every employment process.",
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
