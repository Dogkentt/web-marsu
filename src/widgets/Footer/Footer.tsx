"use client"

import styles from "./Footer.module.scss";
import cn from "classnames";
import Button from "@/shared/ui/Button/Button";
import { Input } from "@/shared/ui/Input/Input";
import { SubmitHandler, useForm } from "react-hook-form"

import { IconFacebook, IconLinkedIn, IconInstagram, IconYouTube } from "@/shared/ui/Icons/Icons";
import footerData from "@/shared/data/footer_items.json";
import { useEffect, useState } from "react";

interface ResponseData {
    email: string;
}

export const Footer = () => {
    const [isSuccess, setIsSuccess] = useState(false);

    const {    
        register,
        handleSubmit,
        reset,
        formState: { errors }, 
    } = useForm<ResponseData>();

    const onSubmit: SubmitHandler<ResponseData> = (data) => {
        console.log(data);
        setIsSuccess(true);
        reset();
    }

    useEffect(() => {
        if (isSuccess) {
            const timer = setTimeout(() => {
                setIsSuccess(false);
            }, 2500);

            return () => clearTimeout(timer);
        }
    }, [isSuccess]);

    return (
        <footer className={cn(styles["footer"],  "container")}>
            <div className={styles["footer__container"]}>
                <div className={styles["footer__info"]}>
                    <h4 className={styles["footer__info-title"]}>Next-Gen AI Summit 2026</h4>

                    <ul className={styles["footer__info-list"]}>
                        { footerData.map((item, i) => (
                            <li key={i} className={styles["footer__info-item"]}><a href={item.link}>{ item.title }</a></li>
                        )) }
                    </ul>

                    <p className={styles["footer__info-copy"]}>© 2052 Next-Gen AI Summit. All rights reserved.</p>
                </div>

                <div className={styles["footer__subscribe"]}>
                    <h4 className={styles["footer__subscribe-title"]}>Stay updated</h4>
                    <p className={styles["footer__subscribe-text"]}>Subscribe for event updates & exclusive content.</p>

                    <form className={styles["footer__form"]} onSubmit={handleSubmit(onSubmit)}>
                        <Input 
                            type="email" 
                            placeholder="Email" 
                            className={styles["footer__form-input"]} 
                            {...register("email", { required: true, pattern: /^\S+@\S+$/i })} 
                            error={errors.email && "Please enter a valid email address"}
                        />
            
                        <Button 
                            type="submit" 
                            className={styles["footer__form-button"]}
                            appearance="secondary"
                        >
                            { isSuccess ? "Subscribed!" : "Stay updated" }
                        </Button>
                    </form>

                    <h4 className={styles["footer__subscribe-title"]}>Follow us</h4>
                    <ul className={styles["footer__subscribe-list"]}>
                        {/* <li><a href="#"><img src="/icons/facebook-logo.svg" alt="Facebook" /></a></li> */}
                        <li className={styles["footer__subscribe-item"]}><a href="#"><IconFacebook /></a></li>
                        <li className={styles["footer__subscribe-item"]}><a href="#"><IconLinkedIn /></a></li>
                        <li className={styles["footer__subscribe-item"]}><a href="#"><IconInstagram /></a></li>
                        <li className={styles["footer__subscribe-item"]}><a href="#"><IconYouTube /></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}