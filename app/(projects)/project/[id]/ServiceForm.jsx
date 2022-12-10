'use client'
import styles from './ServiceForm.module.css'
import Input from '../../../newproject/Input'
import Submit from '../../../newproject/Submit'

import {useState} from 'react'

export default function ServiceForm({handleSubmit, BtnText, projectData})
{
    const [service, setService] = useState({})

    const submit = event =>
    {
        event.preventDefault()
        projectData.services.push(service)
        handleSubmit(projectData)
    }

    const handleChange = event =>
    {
        setService({...service, [event.target.name]: event.target.value})
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input type='text' text='Service name' name='name' placeholder='Type the service name' handleOnChange={handleChange} />
            <Input type='number' text='Service cost' name='cost' placeholder='Type the total value' handleOnChange={handleChange} />
            <Input type='text' text='Service description' name='description' placeholder='Type the service description' handleOnChange={handleChange} />
            <Submit text={BtnText} />
        </form>
    )
}