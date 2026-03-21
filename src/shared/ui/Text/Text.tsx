import cn from "classnames";
import styles from "./Text.module.scss";

interface TextProps {
    children: React.ReactNode;
    className?: string;
}

const Text = ({ children, className }: TextProps) => {
    return (
        <p className={cn(styles["text"], className)}>
            { children }
        </p>
    );
}

export default Text;