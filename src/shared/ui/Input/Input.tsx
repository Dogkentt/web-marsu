
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    type?: string;
    placeholder?: string;
    appearance?: "primary" | "secondary";
    error?: string;
}

import styles from "./Input.module.scss"
import cn from "classnames";

export const Input = ({ type = "text", placeholder, appearance = "primary", error, ...props }: InputProps) => {
    return (
        <>
            <input 
                {...props}
                type={type}
                placeholder={placeholder}
                className={cn(styles["input"], {
                    [styles["input--error"]]: error,
                    [styles["input--primary"]]: appearance === "primary",
                    [styles["input--secondary"]]: appearance === "secondary",
                })}
            />

            { error && <p className={styles["input__error"]}>{error}</p> }
        </>
    )
}
