import BlockUi from "@/shared/ui/BlockUi/BlockUi";
import styles from "./AttendCard.module.scss";
import cn from "classnames";

interface AttendCardProps {
    title: string;
    description: string;
    appearance?: "left" | "right";
}

const AttendCard = ({ title, description, appearance }: AttendCardProps) => {
  return (
    <BlockUi className={cn(styles["attend-card"], {
      [styles["attend-card--left"]]: appearance === "left",
      [styles["attend-card--right"]]: appearance === "right",
    })}>
      <h3 className={styles["attend-card__title"]}>{title}</h3>
      <p className={styles["attend-card__description"]}>
        {description}
      </p>
    </BlockUi>
  );
};

export default AttendCard;