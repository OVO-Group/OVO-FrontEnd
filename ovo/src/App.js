import './App.css';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import React from 'react';
import TelaCadastro from './components/paginas/telaEntrar';
import TelaCadastroFacebook from './components/paginas/telaEntrarFacebook';
import TelaCadastroGoogle from './components/paginas/telaEntrarGoogle';
import TelaCadastroCelular from './components/paginas/telaEntrarCelular';
import TelaCadastroEmail from './components/paginas/telaEntrarEmail';
import TelaCodigoEmail from './components/paginas/telaCodigoEmail';
import TelaRestaurantes from './components/paginas/telaRestaurantes';
import TelaCriarRestaurante from './components/paginas/paginasDeCriacao/telaCriarRestaurante';
import TelaEditarRestaurante from './components/paginas/paginasDeEdicao/telaEditarRestaurante';

function App() {
  return (
    <div>
        <Router>
                <Routes>
                    <Route exact path="/" element={<TelaCadastro />} />
                    <Route path="/cadastro-facebook" element={<TelaCadastroFacebook />} />
                    <Route path="/cadastro-google" element={<TelaCadastroGoogle />} />
                    <Route path="/cadastro-celular" element={<TelaCadastroCelular />} />
                    <Route path="/cadastro-email" element={<TelaCadastroEmail />} />
                    <Route path="/codigo-email" element={<TelaCodigoEmail />} />
                    <Route path="/restaurantes" element={<TelaRestaurantes />}/>
                    <Route path="/criar-restaurante" element={<TelaCriarRestaurante />}/>
                    <Route path="/editar-restaurante" element={<TelaEditarRestaurante />}/>
                </Routes>
        </Router>
    </div>
  );
}

export default App;