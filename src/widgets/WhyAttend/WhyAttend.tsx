import { HeaderSection } from "@/shared/ui/HeaderSection/HeaderSection";
import AttendCard from "@/shared/ui/AttendCard/AttendCard";
import styles from "./WhyAttend.module.scss";
import cn from "classnames";

import AttendData from "@/shared/data/attend_list.json";

const WhyAttend = () => {
    return (
        <section id="why-attend">
            <HeaderSection 
                title="WHY ATTEND?"
                text="Discover why Next-Gen AI Summit is the must-attend event for AI professionals, innovators, and industry leaders."
            />

            <div className={styles["why-attend__list"]}>
                { AttendData.map((item, index) => (
                    <AttendCard
                        key={index}
                        title={item.title}
                        description={item.text}
                        appearance={index >= 2 ? "left" : "right"}
                    />
                )) }
            </div>
        </section>
    );
};

export default WhyAttend;