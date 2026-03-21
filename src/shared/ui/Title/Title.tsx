import cn from "classnames";
import styles from "./Title.module.scss";

interface TitleProps {
    children: React.ReactNode;
    className?: string;
}

const Title = ({ children, className }: TitleProps) => {
    return (
        <h2 className={cn(styles["title"], className)}>
            { children }
        </h2>
    );
}

export default Title;