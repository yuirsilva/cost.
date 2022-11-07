import Link from 'next/link'
import Image from 'next/image'
import styles from './Home.module.css'

import SKConcretica from '../components/SKConcretica'

export default function Home()
{
    return (
        <section className={styles.homeSection}>
            <h1 className={SKConcretica.className}>The best way to</h1>
            <div className={styles.headingRow}>
                <h1 className={SKConcretica.className}>manage costs.</h1>
                <Link className={SKConcretica.className} href='/newproject'>
                    <div className={styles.linkCircle}></div>
                    Create project ↗
                </Link>
            </div>
            <Image
                alt='Little guys collecting coins from a tree'
                src='/collecting.svg'
                width={950}
                height={950}
                priority
            />
        </section>
    )
}