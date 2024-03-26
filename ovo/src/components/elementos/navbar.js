import { Link } from "react-router-dom"
import styles from './navbar.module.css'

function Navbar() {
    return(
        <div className={styles.navbar}>
            <h1>OVO</h1>
            <Link to='/restaurantes' className={styles.itensNavBar}>Restaurantes</Link>
            <Link to='/enderecos' className={styles.itensNavBar}>Endereços</Link>
            <Link to='/perfil' className={styles.itensNavBar}>Perfil</Link>
            <Link to='/sacola' className={styles.itensNavBar}>Sacola</Link>
        </div>
    )
}

export default Navbar