
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    placeholder?: string;
    appearance?: "primary" | "secondary";
    error?: string;
}

import styles from "./Textarea.module.scss"
import cn from "classnames";

export const Textarea = ({ placeholder, appearance = "primary", error, ...props }: TextareaProps) => {
    return (
        <>
            <textarea
                {...props}
                placeholder={placeholder}
                className={cn(styles["textarea"], {
                    [styles["textarea--error"]]: error,
                    [styles["textarea--primary"]]: appearance === "primary",
                    [styles["textarea--secondary"]]: appearance === "secondary",
                })}
            />

            { error && <p className={styles["textarea__error"]}>{error}</p> }
        </>
    )
}
