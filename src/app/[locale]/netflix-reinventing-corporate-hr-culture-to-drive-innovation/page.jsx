import CaseHero from "./_components/CaseHero";
import CaseMain from "./_components/CaseMain";
import CaseNeed from "./_components/CaseNeed";


export const metadata = {
    title: "Culture-Driven HR That Powered Netflix Growth | Neon HR Group",
    description:
        "How Netflix transformed its workplace culture through bold HR strategies that fueled innovation and global expansion.",
    openGraph: {
        title: "Culture-Driven HR That Powered Netflix Growth | Neon HR Group",
        description:
            "How Netflix transformed its workplace culture through bold HR strategies that fueled innovation and global expansion.",
        images: "/images/cta-banner.jpg",
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
