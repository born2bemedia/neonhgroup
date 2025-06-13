import HomeFrom from "./_components/HomeFrom";
import HomeHave from "./_components/HomeHave";
import HomeHero from "./_components/HomeHero";
import HomeHow from "./_components/HomeHow";
import HomeImpact from "./_components/HomeImpact";
import HomeLets from "./_components/HomeLets";
import HomeSee from "./_components/HomeSee";

export const metadata = {
  title: "HR Solutions for Business | Neon HR Group",
  description:
    " Explore tailored HR services to improve retention, streamline operations, and build a high-performing workforce.",
  openGraph: {
    title: "HR Solutions for Business | Neon HR Group",
    description:
      " Explore tailored HR services to improve retention, streamline operations, and build a high-performing workforce.",
    images: "/images/cta-banner.jpg",
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
