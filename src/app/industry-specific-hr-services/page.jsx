import ServicesHero from "./_components/ServicesHero";
import ServicesIndustries from "./_components/ServicesIndustries";
import ServicesNeed from "./_components/ServicesNeed";
import ServicesOur from "./_components/ServicesOur";


export const metadata = {
    title: "",
    description:
        "",
    openGraph: {
        title: "",
        description:
            "",
        images: "",
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
