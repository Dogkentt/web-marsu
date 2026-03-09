'use client'

import Button from "@/shared/ui/Button/Button"
import Link from "next/link"
import asideDataItems from "@/shared/data/aside_items.json"
import cn from "classnames"
import styles from "./Header.module.scss"
import { useScrollSpy } from "@/shared/libs/useScroolSpy"

// Массив создаётся один раз, а не на каждый рендер
const sectionIds = asideDataItems.map(item => item.link);
console.log(sectionIds);

export const Header = () => {
    const activeId = useScrollSpy({ ids: sectionIds });
console.log(activeId);

    return (
        <header className={cn('container', styles["header"])}>
            <Link href="/#" className={styles["header__logotype"]}>
                nexus
            </Link>

            <ul className={styles["header__nav"]}>
                { asideDataItems?.map((item, i) => (
                    <li key={i}>
                        <Link href={`/#${item.link}`}>
                            <Button
                                appearance={activeId === item.link ? 'outlined' : 'text'}
                            >
                                { item.title }
                            </Button>
                        </Link>
                    </li>
                ))}
            </ul>
        </header>
    )
}