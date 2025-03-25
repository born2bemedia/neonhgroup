import CasesHero from "./_components/CasesHero";
import CasesMain from "./_components/CasesMain";



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

export default function Cases() {
    return (
        <>
            <CasesHero />
            <CasesMain />
        </>
    );
}
