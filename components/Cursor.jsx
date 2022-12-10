'use client'
import styles from './Cursor.module.css'

import {useState, useEffect} from 'react'
import {motion} from 'framer-motion'

export default function Cursor()
{
    const [position, setPosition] = useState({x: 0, y: 0})
    const [cursorVariant, setCursorVariant] = useState('default')

    const handlePointerMove = mm =>
    {
        setPosition({x: mm.pageX, y: mm.pageY})
    }

    useEffect(() =>
    {
        window.addEventListener('pointermove', handlePointerMove)

        return () =>
        {
            window.removeEventListener('pointermove', handlePointerMove)
        }
    }, [])

    const variants =
    {
        default: {
            x: position.x,
            y: position.y
        }
    }

    return (
        <motion.div
            className={styles.cursor}
            variants={variants}
            animate={cursorVariant}
            transition={{
                default: {
                    duration: 0.6,
                    ease: [0, 0, 0, 1]
                }
            }}
        />
    )
}