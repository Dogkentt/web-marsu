import Button from "@/shared/ui/Button/Button";
import styles from "./Hero.module.scss";
import cn from "classnames";
import BlockUi from "@/shared/ui/BlockUi/BlockUi";
import Link from "next/link";

interface HeroProps {
    className?: string;
}

const Hero = ({ className }: HeroProps) => {
    return (
        <section id="home">
            <BlockUi className={cn(styles["hero"], className)} appearance="dark">
                <div className={styles["hero__header"]}>
                    <h3 className={styles["hero__header-date"]}>OCTOBER 15-17, 2052</h3>
                    <h3 className={styles["hero__header-location"]}>Horizon Convention Center, TechCity, Utopolis</h3>
                </div>

                <h1 className={styles["hero__title"]}>NEXT-GEN AI SUMMIT</h1>
                <p className={styles["hero__description"]}>Explore the cutting-edge innovations shaping the future of artificial intelligence. Join global leaders and visionaries for two days of insights, discussions, and breakthroughs.</p>
                
                {/* <Link href="#tickets" className={styles["hero__link"]}>
                    <Button
                        appearance="primary"
                        className={styles["hero__button"]}
                    >
                        <span>Early bird tickets</span>
                        <img src="icons/arrow.svg" alt="Arrow Right" />
                    </Button>
                </Link> */}
                <Button
                    appearance="primary"
                    className={styles["hero__button"]}
                    href="#tickets"
                >
                    <span>Early bird tickets</span>
                    <img src="icons/arrow.svg" alt="Arrow Right" />
                </Button>
            </BlockUi>
        </section>
    )
}

export default Hero;