import { Hero, Schedule } from "@/widgets";
import style from "./page.module.scss";
import cn from "classnames";
import Companies from "@/widgets/Companies/Companies";

export default function Home() {
  return (
    <main className={cn("container", style["main"])}>
      <Hero />
      <Companies />
      <Schedule />
    </main>
  );
}
