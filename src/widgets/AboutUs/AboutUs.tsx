import BlockUi from "@/shared/ui/BlockUi/BlockUi";
import styles from "./AboutUs.module.scss"
import Link from "next/link";
import Button from "@/shared/ui/Button/Button";
import cn from "classnames";
import { IconArrow } from "@/shared/ui/Icons/Icons";
import Image from "next/image";

const AboutUs = () => {
    return (
        <section className={styles["about-us"]}>
            <BlockUi className={cn(styles["about-us__block"], styles["about-us__block--first"])} appearance="primary">
                <h2 className={styles["about-us__block-title"]}>Speakers</h2>
                <div className={styles["about-us__block-info"]}>
                    <Link href={`#`} className={styles["about-us__block-info-link"]}>
                        <IconArrow />
                    </Link>
                    <p className={cn(styles["about-us__block-description"], styles["about-us__block-info-description"])}>
                        Hear from global AI leaders, researchers, and entrepreneurs who are defining the future of artificial intelligence.
                    </p>
                </div>
                <div className={styles["about-us__block-speakers"]}>
                    <div className={styles["about-us__block-speakers-avatars"]}>
                        <Image src="/images/reviews/human-one.png" alt="Speaker One" width={74} height={74} />
                        <Image src="/images/reviews/human-two.png" alt="Speaker Two" width={74} height={74} />
                        <Image src="/images/reviews/human-three.png" alt="Speaker Three" width={74} height={74} />
                        <Image src="/images/reviews/human-four.png" alt="Speaker Four" width={74} height={74} />
                    </div>

                    <Button href={`#`} appearance="outlined" className={styles["about-us__block-speakers-link"]}>
                        And more
                        <IconArrow />
                    </Button>
                </div>
            </BlockUi>

            <div className={styles["about-us__blocks"]}>
                <BlockUi className={styles["about-us__block"]} appearance="primary">
                    <h2 className={styles["about-us__block-title"]}>Technologies</h2>
                    <p className={styles["about-us__block-description"]}>Explore advanced machine learning, natural language processing, AI-driven automation, and emerging cybersecurity applications.</p>
                </BlockUi>

                <BlockUi className={cn(styles["about-us__block"], styles["about-us__block--light"])} appearance="light">
                    <h2 className={styles["about-us__block-title"]}>Networking Opportunities</h2>
                    <p className={styles["about-us__block-description"]}>Enjoy exclusive networking sessions, roundtables, and social events to foster collaboration and spark new partnerships.</p>
                </BlockUi>
            </div>
        </section>
    )
}

export default AboutUs;