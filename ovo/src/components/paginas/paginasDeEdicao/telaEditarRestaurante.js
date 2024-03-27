import Navbar from "../../elementos/navbar";
import Input from "../../elementos/Input";
import BotaoAcionador from "../../eventos/botaoAcionador";
import { useNavigate } from "react-router-dom";
import styles from "./telaEditarRestaurante.module.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function TelaEditarRestaurante() {
  const location = useLocation();
  const { id_restaurante } = location.state;
  const navigate = useNavigate();

  const [nome_restaurante, setNomeRestaurante] = useState("");
  const [sobre, setSobre] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [horario_funcionamento, setHorario_funcionamento] = useState("");
  const [id_tipo_entrega, setId_tipo_entrega] = useState("");

  useEffect(() => {
    async function fetchRestaurante() {
      try {
        const response = await fetch(
          `http://localhost:8000/restaurante/${id_restaurante}`
        );
        if (!response.ok) {
          throw new Error("Erro ao carregar restaurante");
        }
        const data = await response.json();
        setNomeRestaurante(data.nome_restaurante);
        setSobre(data.sobre);
        setEndereco(data.endereco);
        setCnpj(data.cnpj);
        setHorario_funcionamento(data.horario_funcionamento);
        setId_tipo_entrega(data.id_tipo_entrega);
      } catch (error) {
        console.error("Erro ao carregar o restaurante:", error);
      }
    }

    fetchRestaurante();
  }, [id_restaurante]);

  function editarRestaurante() {
    const restauranteData = {
      nome_restaurante: nome_restaurante,
      sobre: sobre,
      endereco: endereco,
      cnpj: cnpj,
      horario_funcionamento: horario_funcionamento,
      id_tipo_entrega: id_tipo_entrega,
    };

    fetch(`http://localhost:8000/restaurante/editar/${id_restaurante}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(restauranteData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao enviar requisição");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Restaurante editado com sucesso:", data);
        alert("Restaurante editado com sucesso");
        navigate("/restaurantes");
      })
      .catch((error) => {
        console.error("Erro ao editar restaurante:", error);
      });
  }

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <h1>Editar restaurante</h1>
        <Input
          type="text"
          name="nome_restaurante"
          placeholder="Nome do restaurante"
          value={nome_restaurante}
          onChange={(e) => setNomeRestaurante(e.target.value)}
        />
        <Input
          type="text"
          name="sobre"
          placeholder="Sobre o restaurante"
          value={sobre}
          onChange={(e) => setSobre(e.target.value)}
        />
        <Input
          type="text"
          name="endereco"
          placeholder="Endereço"
          value={endereco}
          onChange={(e) => setEndereco(e.target.value)}
        />
        <Input
          type="number"
          name="cnpj"
          placeholder="CNPJ"
          value={cnpj}
          onChange={(e) => setCnpj(e.target.value)}
        />
        <Input
          type="text"
          name="horario_funcionamento"
          placeholder="Horário de funcionamento"
          value={horario_funcionamento}
          onChange={(e) => setHorario_funcionamento(e.target.value)}
        />
        <Input
          type="number"
          list="tipos"
          id="input-tipos"
          name="tipos"
          placeholder="Tipo de entrega"
          value={id_tipo_entrega}
          onChange={(e) => setId_tipo_entrega(e.target.value)}
        />
        <BotaoAcionador event={editarRestaurante} text="Editar" />
      </div>
    </div>
  );
}

export default TelaEditarRestaurante;
