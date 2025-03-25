import CaseHero from "./_components/CaseHero";
import CaseMain from "./_components/CaseMain";
import CaseNeed from "./_components/CaseNeed";


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

export default function Case() {
    return (
        <>
            <CaseHero />
            <CaseMain />
            <CaseNeed />
        </>
    );
}
