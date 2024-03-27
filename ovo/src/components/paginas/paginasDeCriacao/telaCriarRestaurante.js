import Navbar from "../../elementos/navbar"
import Input from "../../elementos/Input"
import { useState } from "react"
import BotaoAcionador from "../../eventos/botaoAcionador"
import { useNavigate } from "react-router-dom"
import styles from "./telaCriarRestaurante.module.css"

function TelaCriarRestaurante() {

    const navigate = useNavigate()

    const [nome_restaurante, setNomeRestaurante] = useState('')
    const [sobre, setSobre] = useState('')
    const [endereco, setEndereco] = useState('')
    const [cnpj, setCnpj] = useState('')
    const [horario_funcionamento, setHorario_funcionamento] = useState('')
    const [id_tipo_entrega, setId_tipo_entrega] = useState('')

    function CriarRestaurante(){

        const restauranteData = {
            nome_restaurante: nome_restaurante,
            sobre: sobre,
            endereco: endereco,
            cnpj: cnpj,
            horario_funcionamento: horario_funcionamento,
            id_tipo_entrega: id_tipo_entrega
        };
    
        // Realize a requisição POST usando fetch
        fetch('http://localhost:8000/restaurante/criar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(restauranteData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao enviar requisição');
            }
            return response.json();
        })
        .then(data => {
            console.log('Restaurante criado com sucesso:', data);
            alert('Restaurante criado com sucesso')
            navigate('/restaurantes')

        })
        .catch(error => {
            console.error('Erro ao criar restaurante:', error);
        });
        
    }

    return(
        <div>
            <Navbar />
            <div className={styles.container}>
                <h1>Novo restaurante</h1>
                <Input 
                type='text'
                name='nome_restaurante'
                placeholder='nome do restaurante'
                value={nome_restaurante}
                onChange={(e) => setNomeRestaurante(e.target.value)}
                />
                <Input 
                type='text'
                name='sobre'
                placeholder='sobre o restaurante'
                value={sobre}
                onChange={(e) => setSobre(e.target.value)}
                />
                <Input 
                type='text'
                name='endereco'
                placeholder='endereço'
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
                />
                <Input 
                type='number'
                name='cnpj'
                placeholder='CNPJ'
                value={cnpj}
                onChange={(e) => setCnpj(e.target.value)}
                />
                <Input 
                type='text'
                name='horario_funcionamento'
                placeholder='horário de funcionamento'
                value={horario_funcionamento}
                onChange={(e) => setHorario_funcionamento(e.target.value)}
                />
                <Input 
                type='number'
                list='tipos' 
                id='input-tipos' 
                name='tipos'
                placeholder='Tipo de entrega'
                value={id_tipo_entrega}
                onChange={(e) => setId_tipo_entrega(e.target.value)}
                />
                <BotaoAcionador event={CriarRestaurante} text='Criar'/>
            </div>
        </div>
    )
}

export default TelaCriarRestaurante