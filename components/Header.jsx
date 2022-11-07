import Link from "next/link";
import HLink from "./HLink";
import SKConcreticaFont from "./SKConcretica";

import styles from './Header.module.css'

export default function Header({ headerRefValue, onLoad })
{
    return (
        <header className={styles.mainHeader}>
            <Link href='/' className={`${SKConcreticaFont.className} ${styles.logo}`}>コスト。</Link>
            <nav className={styles.navbar}>
                <HLink href='/' main='Home' hidden='Vision' />
                <HLink href='/projects' main='Projects' hidden='Love' />
                <HLink href='/company' main='Company' hidden='Friends' />
                <HLink href='/contact' main='Contact' hidden='Talk' />
            </nav>
        </header>
    )
}