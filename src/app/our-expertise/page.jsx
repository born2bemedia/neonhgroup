import OurHero from "./_components/OurHero";
import OurRequest from "./_components/OurRequest";
import OurWhat from "./_components/OurWhat";


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

export default function OurExpertise() {
    return (
        <>
            <OurHero />
            <OurWhat />
            <OurRequest />
        </>
    );
}
