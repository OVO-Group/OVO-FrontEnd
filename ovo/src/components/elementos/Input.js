import styles from './Input.module.css'

function Input({text, type, id, name, pattern, placeholder, onChange, value}) {
    return(
        <div>
            <form className={styles.form}>
                <label htmlFor="input">{text}</label>
                <input 
                    type={type} 
                    id={id} 
                    name={name} 
                    pattern={pattern} 
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}></input>
            </form>
        </div>

    )
}

export default Input