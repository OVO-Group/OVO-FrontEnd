import styles from "./CardRestaurantes.module.css"
import BotaoAcionador from "../eventos/botaoAcionador"
import ExcluirRestaurante from "../eventos/excluirRestaurante"
import { Link, useNavigate } from "react-router-dom"

function CardRestaurantes({restaurantes}) {
    const navigate = useNavigate();

    return(
        <div className={styles.container}>
            <ul className={styles.restaurantes}>
                {restaurantes.map(restaurante => (
                    <li className={styles.restaurantesItem} key={restaurante.id_restaurante}>
                            <Link to={`/restaurante/${restaurante.id_restaurante}`} className={styles.titulo}>{restaurante.nome_restaurante}</Link>
                            <p>{restaurante.sobre}</p>
                            <div className={styles.buttonContainer}>
                            <BotaoAcionador event={() => ExcluirRestaurante({ id_restaurante: restaurante.id_restaurante })} text='Excluir' />
                            <BotaoAcionador event={() => navigate('/editar-restaurante', { state: { id_restaurante: restaurante.id_restaurante } })} text='Editar'/>
                            </div>
                            
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CardRestaurantes