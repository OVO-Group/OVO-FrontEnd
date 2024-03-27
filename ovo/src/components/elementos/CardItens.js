import styles from "./CardItens.module.css"
import BotaoAcionador from "../eventos/botaoAcionador"


function CardItens({produtos}) {
    return(
        <div className={styles.container}>
            <ul className={styles.produtos}>
                {produtos.map(produto => (
                    <li className={styles.produtosItem} key={produto.id_produto}>
                            <h1>{produto.nome}</h1>
                            <p>{produto.descricao}</p>
                            <p>R${produto.preco}</p>
                            <div className={styles.buttonContainer}>
                            <BotaoAcionador text='Excluir' />
                            <BotaoAcionador text='Editar'/>
                            </div>
                            
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CardItens