import './App.css';
import loginimage from "./assets/ovo.png";


function App() {
  return (
    <div className="conteiner">
      <div className='box imagemTelaLogin'>
        <img src={loginimage} alt= "login.png"/>
      </div>

      <div className='box telaLogin'>

        <h1 className="Title">Falta pouco para matar sua fome!</h1>

        <h2 className='subtitle'>Como deseja continuar?</h2>

        <div className='botoesIntegracao'>
        
          <button type="button" class="btn btn-primary btn-lg facebook">Facebook</button>
       
          <button type="button" class="btn btn-primary btn-lg google">Google</button>

        </div>

        <div className='botoesPadrao'>

            <button type="button" class="btn btn-primary btn-lg celular">Celular</button>
      
            <button type="button" class="btn btn-primary btn-lg email">E-mail</button>

        </div>
      </div>

    </div>
  );
}

export default App;
