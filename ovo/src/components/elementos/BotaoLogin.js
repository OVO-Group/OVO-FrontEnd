import styles from "./BotaoLogin.module.css"

function BotaoLogin({onClick, descricao}) {

    return(
        <div> 

            <button className={styles.button} onClick={onClick}>{descricao}</button>

        </div>
        
    )
}

export default BotaoLogin;