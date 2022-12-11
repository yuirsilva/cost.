'use client'
import styles from './ProjectForm.module.css'

import {useState} from 'react'
import {QueryClient, QueryClientProvider, useQuery} from '@tanstack/react-query'

import Input from './Input'
import Select from './Select'
import Submit from './Submit'

const queryClient = new QueryClient()

export default function ProjectFormWrap(props)
{
    return (
        <QueryClientProvider client={queryClient}>
            <ProjectForm {...props} />
        </QueryClientProvider>
    )
}

function ProjectForm({handleSubmit, projectData, submitButtonText})
{
    const [project, setProject] = useState(projectData || {})

    const getCategories = async () =>
    {
        const res = await fetch('http://localhost:5000/categories', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return res.json()
    }
    const {data: categories, isFetched} = useQuery(['category'], getCategories)

    const submit = event =>
    {
        event.preventDefault()
        handleSubmit(project)
    }

    const handleChange = event =>
    {
        setProject({...project, [event.target.name]: event.target.value})
    }

    const handleCategory = event =>
    {
        setProject({...project, category: {
            id: event.target.value,
            name: event.target.options[event.target.selectedIndex].text
        }})
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input type='text' text='Project name' name='name' placeholder='Project name' handleOnChange={handleChange} value={project.name ? project.name : ''} />
            <Input type='number' text='Project budget' name='budget' placeholder='Total budget' handleOnChange={handleChange} value={project.budget ? project.budget : ''} />
            <Select name='category_id' text='Select the category' isFetched={isFetched} options={categories} handleOnChange={handleCategory} />
            <Submit text={submitButtonText} />
        </form>
    )
}