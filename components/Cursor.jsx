'use client'
import styles from './Cursor.module.css'
import { useEffect, useRef } from 'react'

export default function Cursor()
{
    const pointerRef = useRef({x: 0, y: 0})
    const cursorPos = useRef({x: 0, y:0})
    const cursor = useRef(0)
    const requestRef = useRef(0)

    useEffect(() =>
    {
        document.addEventListener('pointermove', mouseMove)
        tick()

        return () =>
        {
            window.removeEventListener('pointermove', mouseMove)
        }
    })

    const mouseMove = (mm) =>
    {
        cursorPos.current.x = mm.clientX
        cursorPos.current.y = mm.clientY
    }

    const lerp = (start, end, amt) =>
    {
        return (1 - amt) * start + amt * end
    }

    const tick = () =>
    {
        pointerRef.current.x = lerp(pointerRef.current.x, cursorPos.current.x, 0.06)
        pointerRef.current.y = lerp(pointerRef.current.y, cursorPos.current.y, 0.06)

        cursor.current.style.top = pointerRef.current.y + 'px'
        cursor.current.style.left = pointerRef.current.x + 'px'

        requestRef.current = requestAnimationFrame(tick)
    }

    return (
        <>
            <div ref={cursor} className={styles.cursor} />
        </>
    )
}