import { useState } from "react";
import Input from "../elementos/Input";
import BotaoEnviarcodigo from "../eventos/botaoEnviarCodigo";

function TelaEntrarCelular() {
    const [celular, setCelular] = useState('')

    function EnviarCodigo() {
        alert(`Código enviado para o celular: ${celular}`)
    }

    return(
        <div className="card">
            <h1>Informe seu celular</h1>
            <Input 
                type='tel'
                id='celular'
                name='celular'
                placeholder='(XX) XXXXX-XXXX'
                value={celular}
                onChange={(e) => setCelular(e.target.value)}
            />
            <BotaoEnviarcodigo event={EnviarCodigo} text='Enviar'/>
        </div>
    )
}

export default TelaEntrarCelular;