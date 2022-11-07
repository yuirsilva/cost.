import styles from './Select.module.css'

export default function Select({text, name, options, handleOnChange, value})
{
    return (
        <div className={styles.selectWrap}>
            <label>
                {text}
                <select name={name} id={name}>
                    <option>Select an option</option>
                </select>
            </label>
        </div>
    )
}