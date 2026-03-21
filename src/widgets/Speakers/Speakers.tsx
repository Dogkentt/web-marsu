import { HeaderSection } from "@/shared/ui/HeaderSection/HeaderSection";
import cn from "classnames";
import styles from "./Speakers.module.scss";
import Link from "next/link";
import Button from "@/shared/ui/Button/Button";
import { IconArrow } from "@/shared/ui/Icons/Icons";

import SpeakersData from "@/shared/data/speakers_list.json";
import { SpeakerCard } from "@/shared/ui/SpeakerCard/SpeakerCard";

const Speakers = () => {
    return (
        <section id="speakers" className={styles["speakers"]}>
            <HeaderSection 
                title="KEYNOTE SPEAKERS"
                text="Meet the industry leaders shaping the future of AI."
            />

            <div className={styles["speakers__list"]}>
                {SpeakersData.map((speaker, index) => (
                    <SpeakerCard
                        image={speaker.image}
                        name={speaker.name}
                        job={speaker.job}
                        key={index}
                    />
                ))}
            </div>

            <Link href="#" className={styles["speakers__link"]}>
                <Button appearance="outlined">
                    And more
                    <IconArrow />
                </Button>
            </Link>
        </section>
    );
};

export default Speakers;