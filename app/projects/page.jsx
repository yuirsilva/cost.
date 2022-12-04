'use client'
import styles from './Projects.module.css'

import Message from '../../components/Message'
import LinkButton from './LinkButton'
import SKConcretica from '../../components/SKConcretica'
import ProjectCard from './ProjectCard'

import {useSearchParams} from 'next/navigation'
import {useQuery, QueryClient, QueryClientProvider, useMutation} from '@tanstack/react-query'
import Link from 'next/link'

const queryClient = new QueryClient()

export default function App()
{
    return (
        <QueryClientProvider client={queryClient}>
            <Projects />
        </QueryClientProvider>
    )
}

function Projects()
{
    const fetchProjects = async () =>
    {
        const res = await fetch('http://localhost:5000/projects')
        return res.json()
    }
    const {isLoading, isError, data} = useQuery(['projects'], fetchProjects)

    const deleteProject = useMutation(id =>
    {
        fetch(`http://localhost:5000/projects/${id}`, {method: 'DELETE'})
            .then(() => {queryClient.invalidateQueries('projects')})
    })

    const searchParams = useSearchParams()

    if(isLoading) return <div>Loading...</div>
    if(isError) return <div>Failed to fetch projects</div>

    let message = searchParams.get('state')

    return (
        <section className={styles.projectsSection}>
            <div className={styles.heading}>
                <h1 className={SKConcretica.className}>My Projects</h1>
                <LinkButton to='/newproject' text='Create project' />
            </div>
            {message && <Message type='success' msg={message} />}
            {data.length === 0 ? <div className={styles.emptyMessageWrap}>
                <div>Start by creating a project.</div>
                <Link href='/newproject'>Create project</Link>
            </div>: ''}
            <div className={styles.projectsWrap}>
                {data.length > 0 && data.map(project =>
                    <ProjectCard
                        id={project.id}
                        name={project.name}
                        key={project.id}
                        budget={project.budget}
                        category={project.category.name}
                        deleteProject={deleteProject}
                />)}
            </div>
        </section>
    )
}