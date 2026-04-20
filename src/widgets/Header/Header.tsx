'use client'

import Button from "@/shared/ui/Button/Button"
import Link from "next/link"
import asideDataItems from "@/shared/data/aside_items.json"
import cn from "classnames"
import styles from "./Header.module.scss"
import { useScrollSpy } from "@/shared/libs/useScroolSpy"
import { useState } from "react"

const sectionIds = asideDataItems.map(item => item.link);

export const Header = () => {
    const activeId = useScrollSpy({ ids: sectionIds });
    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

    return (
        <header className={cn('container', styles["header"])}>
            <Link href="/#" className={styles["header__logotype"]}>
                nexus
            </Link>

            <button 
                className={cn(styles["header__burger"], { 
                    [styles["header__burger--active"]]: isOpenMenu 
                })} 
                onClick={() => setIsOpenMenu(prev => !prev)}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <nav className={cn(styles["header__nav-wrapper"], { [styles["header__nav-wrapper--active"]]: isOpenMenu })}>
                <ul className={cn(styles["header__nav"])}>
                    { asideDataItems?.map((item, i) => (
                        <li key={i} className={styles["header__nav-item"]}>
                            <Button
                                appearance={activeId === item.link ? 'outlined' : 'text'}
                                className={styles["header__nav-button"]}
                                href={`/#${item.link}`}
                            >
                                { item.title }
                            </Button>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}