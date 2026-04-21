import { IconFacebook, IconInstagram, IconLinkedIn, IconYouTube } from "@/shared/ui/Icons/Icons"
import cn from "classnames"
import { GetInTouchForm } from "@/widgets/GetInTouchForm/GetInTouchForm";

import styles from "./ConnectWithUs.module.scss"
import BlockUi from "@/shared/ui/BlockUi/BlockUi";

const ConnectWithUs = () => {
    return (
        <section className={cn(styles["connect-with-us"], "margin-top")}>
            <div className={styles["connect-with-us__container"]}>
                <h2 className={styles["connect-with-us__title"]}>We’re here to connect and assist you</h2>
                <p className={styles["connect-with-us__description"]}>Have questions about the summit? Need help with registration or travel? Our team is ready to assist you.</p>

                <div className={styles["connect-with-us__contacts"]}>
                    <div className={styles["connect-with-us__contacts-item"]}>
                        <h3 className={styles["connect-with-us__contacts-item-title"]}>Contact Us</h3>
                        <a className={styles["connect-with-us__contacts-item-detail"]} href="tel:+31201234567">+31 20 123 4567</a>
                    </div>

                    <div className={styles["connect-with-us__contacts-item"]}>
                        <h3 className={styles["connect-with-us__contacts-item-title"]}>Event Location</h3>
                        <p className={styles["connect-with-us__contacts-item-detail"]}>Horizon Convention Center Amsterdam, Netherlands</p>
                    </div>

                    <div className={styles["connect-with-us__contacts-item"]}>
                        <h3 className={styles["connect-with-us__contacts-item-title"]}>Email</h3>
                        <a className={styles["connect-with-us__contacts-item-detail"]} href="mailto:info@nexus.com">info@nexus.com</a>
                    </div>

                    <div className={styles["connect-with-us__contacts-item"]}>
                        <h3 className={styles["connect-with-us__contacts-item-title"]}>Follow Us</h3>
                        
                        <ul className={styles["connect-with-us__contacts-socials"]}>
                            <li className={styles["connect-with-us__contacts-socials-item"]}><a href="#"><IconFacebook /></a></li>
                            <li className={styles["connect-with-us__contacts-socials-item"]}><a href="#"><IconLinkedIn /></a></li>
                            <li className={styles["connect-with-us__contacts-socials-item"]}><a href="#"><IconInstagram /></a></li>
                            <li className={styles["connect-with-us__contacts-socials-item"]}><a href="#"><IconYouTube /></a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <BlockUi appearance="light" className={styles["connect-with-us__form-wrapper"]} >
                <GetInTouchForm />
            </BlockUi>
        </section>
    );
}

export default ConnectWithUs;