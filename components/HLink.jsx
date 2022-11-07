import Link from "next/link"
import styles from './HLink.module.css'

export default function HLink({href, main, hidden})
{
    return (
        <Link href={href}>
            <div className={styles.linkWrap}>
                <p className={styles.main}>{main}</p>
                <p className={styles.hidden}>{hidden}</p>
            </div>
        </Link>
    )
}