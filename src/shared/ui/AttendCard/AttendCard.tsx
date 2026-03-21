import BlockUi from "@/shared/ui/BlockUi/BlockUi";
import styles from "./AttendCard.module.scss";
import cn from "classnames";

interface AttendCardProps {
    title: string;
    description: string;
    number: string;
    appearance?: "left" | "right";
}

const AttendCard = ({ title, description, number, appearance }: AttendCardProps) => {
  return (
    <BlockUi className={cn(styles["attend-card"], {
      [styles["attend-card--left"]]: appearance === "left",
      [styles["attend-card--right"]]: appearance === "right",
    })}>
      <h3 className={styles["attend-card__title"]}>{title}</h3>
      <p className={styles["attend-card__description"]}>
        {description}
      </p>
      <span className={styles["attend-card__number"]}>{ number }</span>
    </BlockUi>
  );
};

export default AttendCard;