import SolutionsDesign from "./_components/SolutionsDesign";
import SolutionsHero from "./_components/SolutionsHero";
import SolutionsNeed from "./_components/SolutionsNeed";



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

export default function Solutions() {
    return (
        <>
            <SolutionsHero />
            <SolutionsDesign />
            <SolutionsNeed />
        </>
    );
}
