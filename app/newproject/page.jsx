import styles from './NewProject.module.css'
import ProjectForm from './ProjectForm'
import SKConcretica from '../../components/SKConcretica'
import Image from 'next/image'

export default function NewProject()
{
    return (
        <section className={styles.newProjectContainer}>
            <div className={styles.formWrap}>
                <h1 className={SKConcretica.className}>Create Project</h1>
                <ProjectForm submitButtonText='Create Project' />
            </div>
            <Image
                alt='Little guys saving coins'
                src='/saving.svg'
                width={700}
                height={500}
                priority
            />
        </section>
    )
}