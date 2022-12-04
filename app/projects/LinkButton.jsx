import styles from './LinkButton.module.css'
import Link from 'next/link'

export default function LinkButton({to, text})
{
    return (
        <div className={styles.buttonWrap}>
            <Link href={to} className={styles.button}>{text}</Link>
        </div>
    )
}