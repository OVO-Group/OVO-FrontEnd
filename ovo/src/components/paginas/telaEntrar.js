import { useNavigate } from 'react-router-dom';
import BotaoLogin from "../elementos/BotaoLogin";

function TelaEntrar() {
    const navigate = useNavigate();

    const handleBotaoClick = (rota) => {
        navigate(rota);
    };


    return(
        <div className='card'>
            <h1>Falta pouco para matar a sua fome!</h1>
            <h2>Como deseja continuar?</h2>
            <BotaoLogin  descricao='Continuar com Facebook' onClick={() => handleBotaoClick('/cadastro-facebook')} />
            <BotaoLogin  descricao='Fazer Login com o Google' onClick={() => handleBotaoClick('/cadastro-google')} />
            <BotaoLogin  descricao='Celular' onClick={() => handleBotaoClick('/cadastro-celular')} />
            <BotaoLogin  descricao='Email' onClick={() => handleBotaoClick('/cadastro-email')} />
        </div>
    )

}

export default TelaEntrar;