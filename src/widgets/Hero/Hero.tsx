import styles from "./Hero.module.scss";
import cn from "classnames";

interface HeroProps {
    className?: string;
}

const Hero = ({ className }: HeroProps) => {
    return (
        <section className={cn(styles["hero"], className)}>
            <h1>Hello world!</h1>
        </section>
    )
}

export default Hero;