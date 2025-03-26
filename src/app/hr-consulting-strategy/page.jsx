import ServicesHero from "./_components/ServicesHero";
import ServicesHow from "./_components/ServicesHow";
import ServicesNeed from "./_components/ServicesNeed";
import ServicesNeon from "./_components/ServicesNeon";
import ServicesRequest from "./_components/ServicesRequest";


export const metadata = {
    title: "HR Consulting & Strategy | Neon HR Group",
    description:
        "Explore expert HR consulting services to align your workforce with business goals and build a scalable HR strategy.",
    openGraph: {
        title: "HR Consulting & Strategy | Neon HR Group",
        description:
            "Explore expert HR consulting services to align your workforce with business goals and build a scalable HR strategy.",
        images: "/images/cta-banner.jpg",
    },
};

export default function Services() {
    return (
        <>
            <ServicesHero />
            <ServicesHow />
            <ServicesNeon />
            <ServicesRequest />
            <ServicesNeed />
        </>
    );
}
