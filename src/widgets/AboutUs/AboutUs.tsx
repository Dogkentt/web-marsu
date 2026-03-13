import BlockUi from "@/shared/ui/BlockUi/BlockUi";
import styles from "./AboutUs.module.scss"
import Link from "next/link";
import Button from "@/shared/ui/Button/Button";

const AboutUs = () => {
    return (
        <section className={styles["about-us"]}>
            <BlockUi appearance="primary">
                <h3>Speakers</h3>
                <div>
                    <Link href={`#`}>
                        {/* svg icon or image */}
                    </Link>
                    <p>
                        Hear from global AI leaders, researchers, and entrepreneurs who are defining the future of artificial intelligence.
                    </p>
                </div>
                <div>
                    {/* avatr images croup */}

                    <Link href={`#`}>
                        <Button>
                            And more
                        </Button>
                    </Link>
                </div>
            </BlockUi>

            <div>
                {/* shared component card */}

                {/* shared component card */}
            </div>
        </section>
    )
}

export default AboutUs;