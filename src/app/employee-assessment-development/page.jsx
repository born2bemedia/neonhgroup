import ServicesHero from "./_components/ServicesHero";
import ServicesNeed from "./_components/ServicesNeed";
import ServicesNeon from "./_components/ServicesNeon";
import ServicesOur from "./_components/ServicesOur";
import ServicesRequest from "./_components/ServicesRequest";


export const metadata = {
    title: "Employee Assessment & Development | Neon HR Group",
    description:
        "Learn how to evaluate employee performance and develop leadership potential with our tailored assessment and training solutions.",
    openGraph: {
        title: "Employee Assessment & Development | Neon HR Group",
        description:
            "Learn how to evaluate employee performance and develop leadership potential with our tailored assessment and training solutions.",
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
