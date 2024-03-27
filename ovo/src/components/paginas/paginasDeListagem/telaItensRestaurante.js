import { useParams } from "react-router-dom";
import Navbar from "../../elementos/navbar";
import { useEffect, useState } from "react";
import styles from "./telaItensRestaurante.module.css";
import CardItens from "../../elementos/CardItens";

function TelaItensRestaurante () {
    const { id_restaurante } = useParams();

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

        fetchRestaurante()

    } , [id_restaurante]);


    const [produtos, setProdutos] = useState([]);



    useEffect(() => {
        async function fetchProdutos() {
            try {
                const response = await fetch(`http://localhost:8000/produtos/${id_restaurante}`);
                const data = await response.json();
                setProdutos(data);
            } catch (error) {
                console.error('Erro ao carregar os produtos:', error);
            }
        }

        fetchProdutos(); 
    }, [id_restaurante]); 

    return(
        <div>
            <Navbar />
            <div className={styles.container}>
                <h1>{nome_restaurante}</h1>
                <p>{sobre}</p>
                <p>{endereco}</p>
                <p>{cnpj}</p>
            </div>
            <CardItens produtos={produtos}/>
        </div>
        
    )
}

export default TelaItensRestaurante