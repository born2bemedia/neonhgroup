import FaqHero from "./_components/FaqHero";
import FaqMain from "./_components/FaqMain";
import FaqNeed from "./_components/FaqNeed";


export const metadata = {
    title: "FAQ | Neon HR Group",
    description:
        "Learn how our HR services work, what to expect, and how we support your business with expert-led solutions.",
    openGraph: {
        title: "FAQ | Neon HR Group",
        description:
            "Learn how our HR services work, what to expect, and how we support your business with expert-led solutions.",
        images: "/images/cta-banner.jpg",
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
