import styles from './botaoAcionador.module.css'

function BotaoAcionador({event, text}) {
    return(
        <div className={styles.container}>
            <button className={styles.button} onClick={event}>{text}</button>
        </div>
    )
}

export default BotaoAcionador