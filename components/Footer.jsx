import SKConcreticaFont from "./SKConcretica"
import styles from './Footer.module.css'

import {FaInstagram, FaLinkedin} from 'react-icons/fa'
import Link from 'next/link'

export default function Footer()
{
    return (
        <footer className={styles.footer}>
            <p className={SKConcreticaFont.className}>&copy; {new Date().getFullYear()} コスト。 All rights reserved.</p>
            <div className={styles.socialList}>
                <Link href='https://instagram.com' target='_blank'>
                    <FaInstagram />
                </Link>
                <Link href='https://linkedin.com' target='_blank'>
                    <FaLinkedin />
                </Link>
            </div>
        </footer>
    )
}