import { useState } from "react"
import Input from "../elementos/Input"
import BotaoEnviarcodigo from "../eventos/botaoEnviarCodigo"
import { useNavigate } from "react-router-dom"


function TelaCodigoEmail() {
    const navigate = useNavigate()
    const [codigo, setCodigo] = useState('')

    function ValidarCodigo() {
        alert(`Codigo validado com sucesso: ${codigo}`)
        navigate('/restaurantes')
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
    )
}

export default TelaCodigoEmail