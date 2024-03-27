import { useState, useEffect } from 'react';
import Navbar from '../../elementos/navbar';
import CardRestaurantes from '../../elementos/CardRestaurantes';
import { Link } from "react-router-dom"
import styles from "./telaRestaurante.module.css"

function TelaRestaurantes() {
    const [restaurantes, setRestaurantes] = useState([]);



    useEffect(() => {
        async function fetchRestaurantes() {
            try {
                const response = await fetch('http://localhost:8000/restaurante');
                const data = await response.json();
                setRestaurantes(data);
            } catch (error) {
                console.error('Erro ao carregar os restaurantes:', error);
            }
        }

        fetchRestaurantes(); 
    }, []); 
 
    return (
        <div>
            <Navbar />
            <div className={styles.linkContainer}>
                <Link to='/criar-restaurante' className={styles.link}>Criar Restaurante</Link>
            </div>
            <CardRestaurantes restaurantes={restaurantes}/>
        </div>
    );
}

export default TelaRestaurantes;
