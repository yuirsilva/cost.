'use client'
import styles from './ProjectCard.module.css'

import Link from 'next/link'
import {useState} from 'react'

export default function ProjectCard({id, name, budget, category, deleteProject})
{
    const [removed, setRemoved] = useState(false)

    const remove = e =>
    {
        e.preventDefault()
        setRemoved(true)
        setTimeout(() =>
        {
            deleteProject.mutate(id)
        }, 900)
    }

    return (
        <div className={`${styles.projectCard} ${styles[category.toLowerCase()]} ${removed ? styles.removed : ''}`}>
            <p className={styles.categoryText}>{category}</p>
            <h3>{name}</h3>
            <p>Budget: ${budget}</p>
            <div className={styles.actionButtons}>
                <button onClick={remove}>Delete</button>
                <Link href={`/project/${id}`}>Edit</Link>
            </div>
        </div>
    )
}