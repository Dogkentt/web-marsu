import cn from "classnames"
import style from "./BlockUi.module.scss"

interface BlockUiProps {
    children: React.ReactNode;
    className?: string;
    appearance?: Appearance;
    id?: string;
}
type Appearance = "dark" | "light" | "primary";

const BlockUi = ({ children, className, appearance = "dark", ...props }: BlockUiProps) => {
    return (
        <div className={cn(style["block"], className, {
            [style["block--dark"]]: appearance === "dark",
            [style["block--light"]]: appearance === "light",
            [style["block--primary"]]: appearance === "primary",
        })}
            {...props}
        >
            { children }
        </div>
    );
}

export default BlockUi;