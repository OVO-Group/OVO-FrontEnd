import React, { useState } from "react";
import Input from "../elementos/Input";
import BotaoEnviarcodigo from "../eventos/botaoEnviarCodigo";
import { useNavigate } from "react-router-dom";

function TelaCodigoEmail() {
    const navigate = useNavigate();
    const [codigo, setCodigo] = useState('');

    async function ValidarCodigo() {
        try {
            const requestBody = { codigo: codigo };
            const response = await fetch('http://127.0.0.1:8000/login/verificacao', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });
            const data = await response.json();
            console.log(data);

            navigate('/restaurantes');
        } catch (error) {
            console.error('Erro ao enviar requisição:', error);
        }
    }

    return(
        <div className="card">
            <h1>Insira o código enviado:</h1>
            <Input 
                type='number'
                id='codigo'
                name='codigo'
                placeholder={'insira o código aqui'}
                value={codigo}
                onChange={(e) => setCodigo(e.target.value)}
            />
            <BotaoEnviarcodigo event={ValidarCodigo} text='Enviar'/>
        </div>
    );
}

export default TelaCodigoEmail;
