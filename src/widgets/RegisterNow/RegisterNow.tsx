"use client"

import { HeaderSection } from "@/shared/ui/HeaderSection/HeaderSection";
import { formatTime } from "@/shared/libs/transformTime";
import styles from "./RegisterNow.module.scss"
import cn from "classnames";
import { useEffect, useState } from "react";

const RegisterNow = () => {
    const DAYS = 12;
    const HOURS = 5;
    const MINUTES = 30;
    // const seconds = 60 * MINUTES * HOURS * DAYS;

    const initialSeconds = (DAYS * 24 * 60 * 60) + (HOURS * 60 * 60) + (MINUTES * 60);
    const [timeLeft, setTimeLeft] = useState(initialSeconds);

    useEffect(() => {
        if (timeLeft <= 0) return;

        const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft]);
    
    return (
        <section className={cn(styles["register-now"], "mt")}>
            <HeaderSection 
                title="REGISTER NOW"
                text="Secure your spot at the Next-Gen AI Summit 2052 and join the future of AI innovation."
            />

            <article className={styles["register-now__card"]}>
                <h3 className={styles["register-now__card-title"]}>Early Bird Pricing Ends In:</h3>
                <h4 className={styles["register-now__card-timer"]}>{formatTime(timeLeft)}</h4>
                <div className={styles["register-now__card-timeline"]}>
                    <p>DAYS</p>
                    <p>HOURS</p>
                    <p>MINUTES</p>
                </div>
            </article>
        </section>
    )
}

export default RegisterNow;