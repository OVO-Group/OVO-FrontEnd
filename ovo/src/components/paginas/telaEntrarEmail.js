import React, {useState} from "react"
import Input from "../elementos/Input"
import BotaoEnviarcodigo from "../eventos/botaoEnviarCodigo"
import { useNavigate } from "react-router-dom"

function TelaEntrarEmail() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')

    function EnviarCodigo() {
        alert(`Email digitado: ${email}`)
        navigate('/codigo-email')
    }

    return(
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
    )
}

export default TelaEntrarEmail