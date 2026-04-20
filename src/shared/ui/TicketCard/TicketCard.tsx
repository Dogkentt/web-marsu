import Button from "@/shared/ui/Button/Button"
import { IconArrow } from "@/shared/ui/Icons/Icons"
import cn from "classnames"

import styles from "./TicketCard.module.scss"

interface TicketCardProps {
    title: string;
    text?: string;
    price: number;
    appearance: TicketCardType;
}

export type TicketCardType = "secondary" | "primary"

export const TicketCard = ({ title, text, price, appearance }: TicketCardProps) => {
    return (
        <div className={cn(styles["ticket-card"], {
            [styles["ticket-card--primary"]]: appearance === "primary",
            [styles["ticket-card--secondary"]]: appearance === "secondary",
        })}>
            <h3 className={styles["ticket-card__title"]}>{ title }</h3>
            { text && <p className={styles["ticket-card__text"]}>{ text }</p> }
            <h4 className={styles["ticket-card__price"]}>€{ price }</h4>

            <Button className={cn(styles["ticket-card__button"], {
                [styles["ticket-card__button--secondary"]]: appearance === "primary",
                [styles["ticket-card__button--primary"]]: appearance !== "primary",
            })} 
                appearance={appearance !== "primary" ? "primary" : undefined}
                href="#"    
            >
                Get your ticket
                <IconArrow />
            </Button>
        </div>
    )
}