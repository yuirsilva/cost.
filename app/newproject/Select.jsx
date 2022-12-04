import styles from './Select.module.css'

export default function Select({text, name, options, handleOnChange})
{
    return (
        <div className={styles.selectWrap}>
            <label>
                {text}
                <select name={name} id={name} onChange={handleOnChange}>
                    <option>Select an option</option>
                    {options.map(option => <option key={option.id} value={option.id || ''}>{option.name}</option>)}
                </select>
            </label>
        </div>
    )
}