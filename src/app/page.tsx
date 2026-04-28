import { AboutUs, AttendeesSay, Companies, Hero, RegisterNow, Schedule, Speakers, Tickets, WhyAttend, ConnectWithUs } from "@/widgets";
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
      <ConnectWithUs />
    </main>
  );
}