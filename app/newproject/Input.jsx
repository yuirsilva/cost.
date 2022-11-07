import styles from './Input.module.css'

export default function Input({type, text, name, placeholder, handleOnChange, value})
{
    return (
        <div className={styles.inputWrap}>
            <label>
                {text}
                <input
                    type={type}
                    name={name}
                    id={name}
                    placeholder={placeholder}
                    onChange={handleOnChange}
                    value={value}
                />
            </label>
        </div>
    )
}