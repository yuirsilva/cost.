'use client'
import styles from './NewProject.module.css'

import Image from 'next/image'
import {useRouter, useSearchParams, usePathname} from 'next/navigation'

import ProjectForm from './ProjectForm'
import SKConcretica from '../../components/SKConcretica'

export default function NewProject()
{
    const router = useRouter()
    const searchParams = useSearchParams()

    const getProjects = async (project) =>
    {
        const response = await fetch('http://localhost:5000/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        })
        const result = await response.json()

        router.push('/projects?state="Project successfuly created!"')
    }

    const createPost = (project) =>
    {
        project.cost = 0
        project.services = []

        getProjects(project)
    }

    return (
        <section className={styles.newProjectContainer}>
            <div className={styles.formWrap}>
                <h1 className={SKConcretica.className}>Create Project</h1>
                <ProjectForm handleSubmit={createPost} submitButtonText='Create Project' />
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