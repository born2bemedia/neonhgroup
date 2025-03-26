import ServicesHero from "./_components/ServicesHero";
import ServicesNeed from "./_components/ServicesNeed";
import ServicesNeon from "./_components/ServicesNeon";
import ServicesOur from "./_components/ServicesOur";
import ServicesRequest from "./_components/ServicesRequest";


export const metadata = {
    title: "HR Operations & Outsourcing | Neon HR Group",
    description:
        "Discover how to streamline HR processes and reduce overhead with fully managed HR operations and outsourcing solutions.",
    openGraph: {
        title: "HR Operations & Outsourcing | Neon HR Group",
        description:
            "Discover how to streamline HR processes and reduce overhead with fully managed HR operations and outsourcing solutions.",
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
