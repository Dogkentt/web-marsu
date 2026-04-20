import cn from 'classnames';
import styles from './Button.module.scss';
import Link from 'next/link';

interface ButtonProps {
    children: React.ReactNode;
    appearance?: ButtonAppearance;
    className?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    href?: string;
    type?: "button" | "submit" | "reset";
}
type ButtonAppearance = "text" | "outlined" | "primary" | "secondary";

const Button = ({ children, appearance = "text", className, onClick, href, type = "button", ...props }: ButtonProps) => {
    if (href) {
        return (
            <Link href={href} className={cn(styles["button"], styles["button--link"], className, {
                [styles["button--text"]]: appearance == "text",
                [styles["button--outlined"]]: appearance == "outlined",
                [styles["button--primary"]]: appearance == "primary",
                [styles["button--secondary"]]: appearance == "secondary",
            })} {...props}>
                { children }
            </Link>
        );
    }

    return (
        <button 
            className={cn(styles["button"], className, {
                [styles["button--text"]]: appearance == "text",
                [styles["button--outlined"]]: appearance == "outlined",
                [styles["button--primary"]]: appearance == "primary",
                [styles["button--secondary"]]: appearance == "secondary",
            })}
            onClick={onClick}
            type={type}
            {...props}
        >
            { children }
        </button>
    );
}
export default Button;