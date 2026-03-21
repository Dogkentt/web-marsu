import cn from "classnames";
import Image from "next/image";

import styles from "./SpeakerCard.module.scss";

interface SpeakerCardProps {
    image: string;
    name: string;
    job: string;
    className?: string;
    appearance?: "left" | "right";
}

export const SpeakerCard = ({ image, name, job, className, appearance = "left" }: SpeakerCardProps) => {
  return (
    <div className={cn(styles["card"], className, {
        [styles["card--left"]]: appearance === "left",
        [styles["card--right"]]: appearance === "right",
    })}>
        <div className={styles["card__info"]}>
            <h3 className={styles["card__info-name"]}>{ name }</h3>
            <p className={styles["card__info-job"]}>{ job }</p>
        </div>

        <Image src={image} width={295} height={452} alt={name} className={styles["card__image"]} />
    </div>
  );
};