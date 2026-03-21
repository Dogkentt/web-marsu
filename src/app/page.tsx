import { AboutUs, Companies, Hero, Schedule, Speakers, WhyAttend } from "@/widgets";
import style from "./page.module.scss";
import cn from "classnames";

export default function Home() {
  return (
    <main className={cn("container", style["main"])}>
      <Hero />
      <Companies />

      {/* have not adaptive */}

      <AboutUs />
      <Schedule />
      <Speakers />
      <WhyAttend />
    </main>
  );
}