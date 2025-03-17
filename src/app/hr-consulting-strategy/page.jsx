import ServicesHero from "./_components/ServicesHero";
import ServicesHow from "./_components/ServicesHow";
import ServicesNeed from "./_components/ServicesNeed";
import ServicesNeon from "./_components/ServicesNeon";
import ServicesRequest from "./_components/ServicesRequest";


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
            <ServicesHow />
            <ServicesNeon />
            <ServicesRequest />
            <ServicesNeed />
        </>
    );
}
