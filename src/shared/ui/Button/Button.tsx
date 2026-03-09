import cn from 'classnames';
import styles from './Button.module.scss';

interface ButtonProps {
    children: React.ReactNode;
    appearance?: ButtonAppearance;
    className?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
type ButtonAppearance = "text" | "outlined" | "primary" | "secondary";

const Button = ({ children, appearance = "text", className, onClick, ...props }: ButtonProps) => {
    return (
        <button 
            className={cn(styles["button"], className, {
                [styles["button--text"]]: appearance == "text",
                [styles["button--outlined"]]: appearance == "outlined",
                [styles["button--primary"]]: appearance == "primary",
                [styles["button--secondary"]]: appearance == "secondary",
            })}
            onClick={onClick}
            {...props}
        >
            { children }
        </button>
    );
}
export default Button;