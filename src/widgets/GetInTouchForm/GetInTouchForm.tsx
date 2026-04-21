"use client"

import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "@/shared/ui/Button/Button";
import { Input } from "@/shared/ui/Input/Input";
import { Textarea } from "@/shared/ui/Textarea/Textarea";

import styles from "./GetInTouchForm.module.scss";

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export const GetInTouchForm = () => {
    const [isSuccess, setIsSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log(data);
        setIsSuccess(true);
        reset();
    };

    useEffect(() => {
        if (isSuccess) {
            const timer = setTimeout(() => {
                setIsSuccess(false);
            }, 2500);

            return () => clearTimeout(timer);
        }
    }, [isSuccess]);

    return (
        <form className={styles["get-in-touch__form"]} onSubmit={handleSubmit(onSubmit)}>
            <h4 className={styles["get-in-touch__form-title"]}>get in touch</h4>
            <p className={styles["get-in-touch__form-description"]}>Reach out with inquiries about tickets, partnerships, or event details.</p>

            <Input
                placeholder="Name"
                appearance="secondary"
                {...register("name", { required: true })}
                error={errors.name ? "Please enter your name" : undefined}
            />
            <Input
                placeholder="Email"
                appearance="secondary"
                {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                error={errors.email ? "Please enter a valid email address" : undefined}
            />
            <Input
                placeholder="Subject"
                appearance="secondary"
                {...register("subject", { required: true })}
                error={errors.subject ? "Please enter a subject" : undefined}
            />

            <Textarea
                placeholder="Message"
                appearance="secondary"
                {...register("message", { required: true })}
                error={errors.message ? "Please enter a message" : undefined}
            />

            <Button 
                type="submit" 
                appearance="primary" 
                className={styles["get-in-touch__form-button"]} 
                disabled={isSuccess}
            >
                { isSuccess ? "Message sent!" : "Send Message" }
            </Button>
        </form>
    );
}