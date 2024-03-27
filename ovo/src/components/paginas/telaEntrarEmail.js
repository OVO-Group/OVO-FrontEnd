import React, { useState } from "react";
import Input from "../elementos/Input";
import BotaoEnviarcodigo from "../eventos/botaoEnviarCodigo";
import { useNavigate } from "react-router-dom";

function TelaEntrarEmail() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');

    async function EnviarCodigo() {
        try {
            const requestBody = { email: email };
            const response = await fetch('http://127.0.0.1:8000/login/email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });
            const data = await response.json();
            console.log(data);
            navigate('/codigo-email');
        } catch (error) {
            console.error('Erro ao enviar requisição:', error);
        }
    }

    return (
        <div className="card">
            <h1>Informe seu e-mail:</h1>
            <Input 
                type='email' 
                id='email' 
                name='email' 
                placeholder='exemplo@email.com' 
                value={email}
                onChange={(e) => setEmail(e.target.value)} // o onChange serve para atualizar o use state
            />
            <BotaoEnviarcodigo event={EnviarCodigo} text='Enviar'/>
        </div>
    );
}

export default TelaEntrarEmail;
