import styles from './botaoEnviarCodigo.module.css'

function BotaoEnviarcodigo({event, text}) {
    return(
        <div>
            <button className={styles.button} onClick={event}>{text}</button>
        </div>
    )
}

export default BotaoEnviarcodigo