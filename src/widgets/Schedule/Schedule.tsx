import { HeaderSection } from "@/shared/ui/HeaderSection/HeaderSection";
import styles from "./Schedule.module.scss";
import BlockUi from "@/shared/ui/BlockUi/BlockUi";
import scheduleItemsData from "@/shared/data/schedule_items.json"
import Button from "@/shared/ui/Button/Button";
import { IconArrow } from "@/shared/ui/Icons/Icons";
import Link from "next/link";

const Schedule = () => {
    return (
        <section id="schedule" className={styles["schedule-wrap"]}>
            <HeaderSection 
                title="AGENDA"
                text="October 15-17, 2052 | Horizon Convention Center, Amsterdam"
            />

            <article className={styles["schedule"]}>
                <BlockUi className={styles["schedule__list"]} appearance="dark">
                    { scheduleItemsData.map((item, i) => (
                        <div className={styles["schedule__item"]} key={i}>
                            <h3 className={styles["schedule__item-time"]}>Day { item.day } <br /> { item.time }</h3>

                            <div className={styles["schedule__item-info"]}>
                                <h3 className={styles["schedule__item-title"]}>{ item.title }</h3>
                                <p className={styles["schedule__item-text"]}>{ item.text }</p>
                            </div>
                        </div>
                    )) }

                    <Button appearance="primary" href="#" className={styles["schedule__link"]}>
                        View detailed schedule
                        <IconArrow />
                    </Button>
                </BlockUi>
            </article>
        </section>
    )
}

export default Schedule;