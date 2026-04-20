import cn from "classnames";
import Image from "next/image";
import styles from './SliderCard.module.scss'


interface SliderCardProps {
    title: string;
    text: string;
    authorImagePath: string;
    authorName: string;
    authorJob: string;
    type: SliderCardTypes;
}
export type SliderCardTypes = "prev" | "active" | "next";

export const SliderCard = ({ title, text, authorImagePath, authorName, authorJob, type }: SliderCardProps) => {
    return (
        <div className={cn(styles["card"], {
            [styles["card--prev"]]: type == "prev",
            [styles["card--active"]]: type == "active",
            [styles["card--next"]]: type == "next",
        })}>
            <h3 className={styles["card__title"]}>{ title }</h3>
            <p className={styles["card__text"]}>"{ text }"</p>
            <div className={styles["card__author"]}>
                <Image className={styles["card__author-image"]} src={authorImagePath} width={50} height={50} alt={authorName + ' / ' + authorJob} />

                <div className={styles["card__author-info"]}>
                    <p className={styles["card__author-name"]}>{ authorName }</p>
                    <p className={styles["card__author-job"]}>{ authorJob }</p>
                </div>
            </div>
        </div>
    )
}