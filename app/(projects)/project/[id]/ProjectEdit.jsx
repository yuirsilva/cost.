'use client'
import styles from './ProjectEdit.module.css'
import ProjectForm from '../../../newproject/ProjectForm'
import Message from '../../../../components/Message'
import ServiceForm from './ServiceForm'
import ServiceCard from './ServiceCard'

import {useQuery, useMutation, QueryClientProvider, QueryClient} from '@tanstack/react-query'
import {useState} from 'react'
import Image from 'next/image'
import {v4 as uuidv4} from 'uuid'

const queryClient = new QueryClient()

export default function ProjectEditWrap(props)
{
    return (
        <QueryClientProvider client={queryClient}>
            <ProjectEdit {...props} />
        </QueryClientProvider>
    )
}

function ProjectEdit({id})
{
    const [showProjectForm, setShowProjectForm] = useState(false)
    const [showServiceForm, setShowServiceForm] = useState(false)
    const [message, setMessage] = useState()
    const [typeMessage, setTypeMessage] = useState()


    const fetchProject = async id =>
    {
        const res = await fetch(`http://localhost:5000/projects/${id}`)
        return res.json()
    }

    const patchProject = async data =>
    {
        const res = await fetch(`http://localhost:5000/projects/${data.id}`,
        {
            method: 'PATCH',
            headers:
            {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        return res.json()
    }
    const {mutate: updateProject} = useMutation(patchProject, {onSuccess: () => {
        queryClient.invalidateQueries({queryKey: ['project']})
    }})

    const updateProjectWithService = async data =>
    {
        await fetch(`http://localhost:5000/projects/${data.id}`,
        {
            method: 'PATCH',
            headers:
            {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }
    const {mutate: addService} = useMutation(updateProjectWithService, {onSuccess: () => {
        queryClient.invalidateQueries({queryKey: ['project']})
    }})

    const rService = async projectUpdated =>
    {
        const res = await fetch(`http://localhost:5000/projects/${projectUpdated.id}`,
        {
            method: 'PATCH',
            headers:
            {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(projectUpdated)
        })
        return res.json()
    }
    const {mutate: removeServiceFromProject} = useMutation(rService, {onSuccess: () => {
        queryClient.invalidateQueries({queryKey: ['project']})
    }})

    const {isLoading, isError, data, isFetched} = useQuery(['project'], fetchProject.bind(this, id))

    if(isLoading) return <div>Loading...</div>
    if(isError) return <div>Failed to fetch projects</div>

    const editProject = async data =>
    {
        setMessage('')
        // budget validation
        if(data.budget < data.cost)
        {
            setMessage('The budget cannot be less than the cost of the project')
            setTypeMessage('error')
            return false
        }

        updateProject(data)

        setShowProjectForm(!showProjectForm)
        setMessage('Project updated!')
        setTypeMessage('success')
    }

    const createService = async data =>
    {
        setMessage('')
        const lastService = data.services[data.services.length - 1]

        lastService.id = uuidv4()

        const newCost = parseFloat(data.cost) + parseFloat(lastService.cost)

        if(newCost > parseFloat(data.budget))
        {
            setMessage('Budget exceeded, please verify the service value.')
            setTypeMessage('error')
            data.services.pop()
            return false
        }

        data.cost = newCost

        // update project
        addService(data)
        setShowServiceForm(!showServiceForm)
    }

    const removeService = (id, cost) =>
    {
        const servicesUpdate = data.services.filter(service => service.id !== id)
        const projectUpdated = data
        projectUpdated.services = servicesUpdate
        projectUpdated.cost = parseFloat(projectUpdated.cost - parseFloat(cost))

        removeServiceFromProject(projectUpdated)
        setMessage('Service removed')
    }

    const toggleProjectForm = () => setShowProjectForm(!showProjectForm)
    const toggleServiceForm = () => setShowServiceForm(!showServiceForm)

    return (
        <>
            {message && <Message type={typeMessage} msg={message} />}
            <div className={`${styles.projectDetails} ${styles[data.category.name.toLowerCase()]}`}>
                <h1>Project: {data.name}</h1>
                <button className={`${styles.editButton} ${styles[data.category.name.toLowerCase()+'After']}`} onClick={toggleProjectForm}>
                    <span>Edit project</span>
                    <span style={{top: !showProjectForm ? '50%' : '-100%'}} className={styles.firstSpan}>Edit project</span>
                    <span style={{top: !showProjectForm ? '150%' : '50%'}} className={styles.lastSpan}>Close</span>
                </button>
                {/* project details */}
                {!showProjectForm
                ?   (<div style={{alignItems: !showProjectForm && 'flex-start'}} className={styles.projectInfo}>
                        <p><span>Project budget</span> ${data.budget}</p>
                        <p><span>Date created</span> {data.creationDate}</p>
                        <div><span>Category</span> <p className={styles.category}>{data.category.name}</p></div>
                        <p><span>Total</span> ${data.cost}</p>
                    </div>)
                // project form
                :   (<div className={styles.projectInfo}>
                        <Image alt='Little guys searching something' src='/searching.svg' width={1000} height={550} />
                        <div className={styles.projectFormWrap}>
                            <ProjectForm handleSubmit={editProject} submitButtonText='Confirm' projectData={isFetched && data} />
                        </div>
                    </div>)}
            </div>
            <div className={`${styles.serviceFormContainer} ${styles[data.category.name.toLowerCase()]}`}>
                <h2 style={{marginBottom: !showServiceForm ? '0' : '2rem'}}>Add a service</h2>
                <button className={`${styles.editButton} ${styles[data.category.name.toLowerCase()+'After']}`} onClick={toggleServiceForm}>
                    <span>Add service</span>
                    <span style={{top: !showServiceForm ? '50%' : '-100%'}} className={styles.firstSpan}>Add service</span>
                    <span style={{top: !showServiceForm ? '150%' : '50%'}} className={styles.lastSpan}>Close</span>
                </button>
                <div className={styles.projectInfo}>
                    {showServiceForm && <ServiceForm handleSubmit={createService.bind(this, data)} BtnText='Add service' projectData={data} />}
                </div>
            </div>
            <div className={`${styles.serviceContainer} ${styles[data.category.name.toLowerCase()]}`}>
                <h2>Services</h2>
                {data.services.length > 0 && data.services.map(service =>
                    <ServiceCard
                        key={service.id}
                        id={service.id}
                        name={service.name}
                        cost={service.cost}
                        description={service.description}
                        handleRemove={removeService}
                    />
                )}
                {data.services.length === 0 && <p>There are no registered services.</p>}
            </div>
        </>
    )
}