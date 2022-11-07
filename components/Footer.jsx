import SKConcreticaFont from "./SKConcretica"
import styles from './Footer.module.css'

import {FaInstagram, FaLinkedin} from 'react-icons/fa'

export default function Footer()
{
    return (
        <footer className={styles.footer}>
            <p className={SKConcreticaFont.className}>&copy; {new Date().getFullYear()} コスト。 All rights reserved.</p>
            <div className={styles.socialList}>
                <FaInstagram />
                <FaLinkedin />
            </div>
        </footer>
    )
}