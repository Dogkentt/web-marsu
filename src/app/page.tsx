import { AboutUs, AttendeesSay, Companies, Hero, RegisterNow, Schedule, Speakers, Tickets, WhyAttend } from "@/widgets";
import style from "./page.module.scss";
import cn from "classnames";

export default function Home() {
  return (
    <main className={cn("container", style["main"])}>
      <Hero />
      <Companies />
      <AboutUs />
      <Schedule />
      <Speakers />
      <WhyAttend />
      <AttendeesSay />
      <RegisterNow />
      <Tickets />

      {/* have not adaptive */}
      {/* FROM: We’re here to connect and assist you */}
    </main>
  );
}