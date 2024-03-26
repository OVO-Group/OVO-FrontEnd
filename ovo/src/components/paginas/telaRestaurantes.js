import { useState, useEffect } from 'react';
import Navbar from '../elementos/navbar';

function TelaRestaurantes() {
    const [restaurantes, setRestaurantes] = useState([]);

 
        async function fetchRestaurantes() {
            try {
                const response = await fetch('http://127.0.0.1:8000/restaurante');
                if (!response.ok) {
                    throw new Error('Não foi possível carregar os restaurantes');
                }
                const data = await response.json();
                setRestaurantes(data);
            } catch (error) {
                console.error('Erro ao carregar os restaurantes:', error);
            }
        }

        fetchRestaurantes();
 
    return (
        <div>
            <Navbar />
            <h2>Restaurantes</h2>
            <ul>
                {restaurantes.map(restaurante => (
                    <li key={restaurante.id}>{restaurante.nome}</li>
                ))}
            </ul>
        </div>
    );
}

export default TelaRestaurantes;
