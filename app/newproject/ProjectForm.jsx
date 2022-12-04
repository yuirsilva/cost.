'use client'
import styles from './ProjectForm.module.css'

import {useEffect, useState} from 'react'

import Input from './Input'
import Select from './Select'
import Submit from './Submit'

export default function ProjectForm({handleSubmit, projectData, submitButtonText})
{
    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})

    const getCategories = async () =>
    {
        const response = await fetch('http://localhost:5000/categories', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const result = await response.json()
        setCategories(result)
    }

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

    useEffect(() =>
    {
        getCategories()
    }, [])

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input type='text' text='Project name' name='name' placeholder='Project name' handleOnChange={handleChange} value={project.name ? project.name : ''} />
            <Input type='number' text='Project budget' name='budget' placeholder='Total budget' handleOnChange={handleChange} value={project.budget ? project.budget : ''} />
            <Select name='category_id' text='Select the category' options={categories} handleOnChange={handleCategory} />
            <Submit text={submitButtonText} />
        </form>
    )
}