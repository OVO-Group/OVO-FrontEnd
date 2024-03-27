import styles from "./CardRestaurantes.module.css"
import BotaoAcionador from "../eventos/botaoAcionador"
import ExcluirRestaurante from "../eventos/excluirRestaurante"

function CardRestaurantes({restaurantes}) {
    return(
        <div className={styles.container}>
            <ul className={styles.restaurantes}>
                {restaurantes.map(restaurante => (
                    <li className={styles.restaurantesItem} key={restaurante.id_restaurante}>
                            <h1>{restaurante.nome_restaurante}</h1>
                            <p>{restaurante.sobre}</p>
                            <div className={styles.buttonContainer}>
                            <BotaoAcionador event={() => ExcluirRestaurante({ id_restaurante: restaurante.id_restaurante })} text='Excluir' />
                            <BotaoAcionador text='Editar'/>
                            </div>
                            
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CardRestaurantes