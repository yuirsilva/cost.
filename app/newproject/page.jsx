'use client'
import styles from './NewProject.module.css'

import Image from 'next/image'
import {useRouter} from 'next/navigation'
import {useMutation, QueryClientProvider, QueryClient} from '@tanstack/react-query'

import ProjectForm from './ProjectForm'
import SKConcretica from '../../components/SKConcretica'

const queryClient = new QueryClient()

export default function NewProjectWrap()
{
    return (
        <QueryClientProvider client={queryClient}>
            <NewProject />
        </QueryClientProvider>
    )
}

function NewProject()
{
    const router = useRouter()

    const addProject = async (project) =>
    {
        const res = await fetch('http://localhost:5000/projects',
        {
            method: 'POST',
            headers:
            {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        })
        return res.json()
    }
    const {mutate} = useMutation(addProject)

    const createPost = (project) =>
    {
        project.cost = 0
        project.services = []
        project.creationDate = new Date().toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'})

        mutate(project)
        router.push('/projects?state="Project successfuly created!"')
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