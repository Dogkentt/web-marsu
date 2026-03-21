import styles from "./HeaderSection.module.scss";
import cn from "classnames";
import TitleSection from "@/shared/ui/Title/Title";
import TextSection from "@/shared/ui/Text/Text";

interface HeaderSectionProps {
    title: React.ReactNode;
    text: React.ReactNode;
    className?: string;
}

export const HeaderSection = ({ title, text, className }: HeaderSectionProps) => {
    return (
        <div className={cn(styles["header-section"], className)}>
            <TitleSection className={styles["header-section__title"]}>
                { title }
            </TitleSection>
            <TextSection className={styles["header-section__text"]}>
                { text }
            </TextSection>
        </div>
    );
}