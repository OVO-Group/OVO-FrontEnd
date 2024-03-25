import { Link } from "react-router-dom"
import styles from './navbar.module.css'

function Navbar() {
    return(
        <div className={styles.navbar}>
            <h1>OVO</h1>
            <Link to='/restaurante'>Restaurantes</Link>
            <Link to='/endereco'>Endereços</Link>
            <Link to='/perfil'>Perfil</Link>
            <Link to='/sacola'>Sacola</Link>
        </div>
    )
}

export default Navbar