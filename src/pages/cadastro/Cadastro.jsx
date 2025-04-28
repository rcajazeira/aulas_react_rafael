import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");

  const navigate = useNavigate();

  async function cadastrar(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:3001/produtos", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({
        nome,
        descricao,
        preco,
      }),
    });

    navigate("/");
  }
  return (
    <div>
      <form>
        <div>
          <label htmlFor="nome">Nome do produto:</label>
          <input
            required
            onInput={(event) => setNome(event.target.value)}
            type="text"
            name="nome"
          />
        </div>
        <div>
          <label htmlFor="">Descrição do produto</label>
          <textarea
            required
            onInput={(event) => setDescricao(event.target.value)}
            name="descricao"
            id=""
          ></textarea>
        </div>
        <div>
          <label htmlFor="preco">Preço do produto</label>
          <input
            required
            onInput={(event) => setPreco(event.target.value)}
            type="number"
            name="preco"
            step="0.01"
          />
        </div>
        <button onClick={cadastrar}>
          <b>Cadastrar Produto</b>
        </button>
      </form>
    </div>
  );
}
