import OurHero from "./_components/OurHero";
import OurRequest from "./_components/OurRequest";
import OurWhat from "./_components/OurWhat";


export const metadata = {
    title: "Our Expertise in HR Services | Neon HR Group",
    description:
        "Discover how our expert-led, data-driven HR solutions support businesses across all HR functions and industries.",
    openGraph: {
        title: "Our Expertise in HR Services | Neon HR Group",
        description:
            "Discover how our expert-led, data-driven HR solutions support businesses across all HR functions and industries.",
        images: "/images/cta-banner.jpg",
    },
};

export default function OurExpertise() {
    return (
        <>
            <OurHero />
            <OurWhat />
            <OurRequest />
        </>
    );
}
