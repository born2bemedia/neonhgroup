import FaqHero from "./_components/FaqHero";
import FaqMain from "./_components/FaqMain";
import FaqNeed from "./_components/FaqNeed";


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

export default function Faq() {
    return (
        <>
            <FaqHero />
            <FaqMain />
            <FaqNeed />
        </>
    );
}
