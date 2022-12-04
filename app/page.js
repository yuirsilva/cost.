import styles from './Home.module.css'

import Image from 'next/image'

import SKConcretica from '../components/SKConcretica'
import CallToAction from '../components/CallToAction'

export default function Home()
{
    return (
        <>
            <div className={`${SKConcretica.className} ${styles.intro}`}>
                <div style={{ "--index": 0 }}>コ</div>
                <div style={{ "--index": 1.5 }}>ス</div>
                <div style={{ "--index": 3 }}>ト</div>
                <div style={{ "--index": 4.5 }}>。</div>
            </div>
            <section className={styles.homeSection}>
                <h1 className={SKConcretica.className}>The best way to</h1>
                <div className={styles.headingRow}>
                    <h1 className={SKConcretica.className}>manage costs.</h1>
                    <CallToAction />
                </div>
                <Image
                    alt='Little guys collecting coins from a tree'
                    src='/collecting.svg'
                    width={950}
                    height={950}
                    priority
                />
            </section>
        </>
    )
}