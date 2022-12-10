import styles from './Select.module.css'

export default function Select({text, name, options: categories, handleOnChange, isFetched})
{
    return (
        <div className={styles.selectWrap}>
            <label>
                {text}
                <select name={name} id={name} onChange={handleOnChange}>
                    <option>Select an option</option>
                    {isFetched && categories.map(category => <option key={category.id} value={category.id || ''}>{category.name}</option>)}
                </select>
            </label>
        </div>
    )
}