import styles from './ProjectForm.module.css'
import Input from './Input'
import Select from './Select'
import Submit from './Submit'

export default function ProjectForm({submitButtonText})
{
    return (
        <form className={styles.form}>
            <Input type='text' text='Project name' name='name' placeholder='Project name' />
            <Input type='number' text='Project budget' name='budget' placeholder='Total budget' />
            <Select name='category_id' text='Select the category' />
            <Submit text={submitButtonText} />
        </form>
    )
}