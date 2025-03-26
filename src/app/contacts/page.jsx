import ContactsHero from "./_components/ContactsHero";



export const metadata = {
    title: "Contact Us | Neon HR Group",
    description:
        "Contact our team to request a consultation, ask questions, or discuss the right HR solution for your business.",
    openGraph: {
        title: "Contact Us | Neon HR Group",
        description:
            "Contact our team to request a consultation, ask questions, or discuss the right HR solution for your business.",
        images: "/images/cta-banner.jpg",
    },
};

export default function Contacts() {
    return (
        <>
            <ContactsHero />
        </>
    );
}
