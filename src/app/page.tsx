import { Hero, Schedule } from "@/widgets";
import style from "./page.module.scss";
import cn from "classnames";

export default function Home() {
  return (
    <main className={cn("container", style["main"])}>
      <Hero />
      <Schedule />
    </main>
  );
}
