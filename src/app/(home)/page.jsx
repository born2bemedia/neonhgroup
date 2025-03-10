import HomeFrom from "./_components/HomeFrom";
import HomeHave from "./_components/HomeHave";
import HomeHero from "./_components/HomeHero";
import HomeHow from "./_components/HomeHow";
import HomeImpact from "./_components/HomeImpact";
import HomeLets from "./_components/HomeLets";
import HomeSee from "./_components/HomeSee";

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
      <HomeHave />
      <HomeSee />
      <HomeLets />
    </>
  );
}
