import HomeFrom from "./_components/HomeFrom";
import HomeHero from "./_components/HomeHero";
import HomeHow from "./_components/HomeHow";
import HomeImpact from "./_components/HomeImpact";

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

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeFrom />
      <HomeImpact />
      <HomeHow />
    </>
  );
}
