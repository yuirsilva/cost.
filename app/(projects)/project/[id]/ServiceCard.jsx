'use client'
import projStyles from '../../projects/ProjectCard.module.css'
import styles from './ServiceCard.module.css'

import {useState} from 'react'

export default function ServiceCard({id, name, cost, description, handleRemove})
{
    const [removed, setRemoved] = useState(false)

    const remove = event =>
    {
        event.preventDefault()
        setRemoved(true)
        setTimeout(() =>
        {
            handleRemove(id, cost)
        }, 900)
    }

    return (
        <div className={`${projStyles.projectCard} ${styles.serviceCard} ${removed ? styles.removed : ''}`}>
            <h4>{name}</h4>
            <p>Total cost: ${cost}</p>
            <p>{description}</p>
            <div className={projStyles.actionButtons}>
                <button onClick={remove}>Delete</button>
            </div>
        </div>
    )
}