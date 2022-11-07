import styles from './Submit.module.css'

export default function Submit({text})
{
    return (
        <div>
            <button className={styles.submitButton}>{text}</button>
        </div>
    )
}