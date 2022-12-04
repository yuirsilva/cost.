import styles from './CallToAction.module.css'

import Link from 'next/link'

import SKConcretica from '../components/SKConcretica'

export default function CallToAction()
{
    return (
        <Link className={`${SKConcretica.className} ${styles.CTA}`} href='/newproject'>
            <div className={styles.fillBtn}></div>
            <div className={styles.wordsWrap}>
                <div className={styles.lettersWrap}>
                    <div className={styles.letter} style={{ "--index": 0 }}>
                        <span>C</span>
                        <span data-text='c'></span>
                        <span data-text='c'></span>
                    </div>
                    <div className={styles.letter} style={{ "--index": 1 }}>
                        <span>r</span>
                        <span data-text='r'></span>
                        <span data-text='r'></span>
                    </div>
                    <div className={styles.letter} style={{ "--index": 2 }}>
                        <span>e</span>
                        <span data-text='e'></span>
                        <span data-text='e'></span>
                    </div>
                    <div className={styles.letter} style={{ "--index": 3 }}>
                        <span>a</span>
                        <span data-text='a'></span>
                        <span data-text='a'></span>
                    </div>
                    <div className={styles.letter} style={{ "--index": 4 }}>
                        <span>t</span>
                        <span data-text='t'></span>
                        <span data-text='t'></span>
                    </div>
                    <div className={styles.letter} style={{ "--index": 5 }}>
                        <span>e</span>
                        <span data-text='e'></span>
                        <span data-text='e'></span>
                    </div>
                </div>
                <div className={styles.lettersWrap}>
                    <div className={styles.letter} style={{ "--index": 0 }}>
                        <span>P</span>
                        <span data-text='p'></span>
                        <span data-text='p'></span>
                    </div>
                    <div className={styles.letter} style={{ "--index": 1 }}>
                        <span>r</span>
                        <span data-text='r'></span>
                        <span data-text='r'></span>
                    </div>
                    <div className={styles.letter} style={{ "--index": 2 }}>
                        <span>o</span>
                        <span data-text='o'></span>
                        <span data-text='o'></span>
                    </div>
                    <div className={styles.letter} style={{ "--index": 3 }}>
                        <span>j</span>
                        <span data-text='j'></span>
                        <span data-text='j'></span>
                    </div>
                    <div className={styles.letter} style={{ "--index": 4 }}>
                        <span>e</span>
                        <span data-text='e'></span>
                        <span data-text='e'></span>
                    </div>
                    <div className={styles.letter} style={{ "--index": 5 }}>
                        <span>c</span>
                        <span data-text='c'></span>
                        <span data-text='c'></span>
                    </div>
                    <div className={styles.letter} style={{ "--index": 6 }}>
                        <span>t</span>
                        <span data-text='t'></span>
                        <span data-text='t'></span>
                    </div>
                </div>
                <div className={styles.lettersWrap}>
                    <div className={styles.letter} style={{ "--index": 0 }}>
                        <span>↗</span>
                        <span data-text='↗'></span>
                        <span data-text='↗'></span>
                    </div>
                </div>
            </div>
        </Link>
    )
}