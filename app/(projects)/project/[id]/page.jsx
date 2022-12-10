import styles from './Project.module.css'
import ProjectEdit from './ProjectEdit'

export default function Project({params: {id}})
{
    return (
        <section className={styles.projectSection}>
            <ProjectEdit id={id} />
        </section>
    )
}