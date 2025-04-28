//import { Scanner } from "@yudiel/react-qr-scanner";
//import styles from './index.module.css';
import Movie from "../../components/Movie/Movie";
import { useState, useEffect  } from "react";
import styles from "./index.module.css";

export default function Index() {
  const [produtos, setProdutos] = useState([])
  
  async function getProdutoData() {
    const response = await fetch("http://localhost:3001/produtos")
    const data = await response.json()
    setProdutos(data)
  }
  useEffect(() => getProdutoData, [])
  return (
    <>
      <div>
        {produtos.map((produto)=>{
          return (
            <div key={produto.id}>
              <h2>{produto.nome}</h2>
              <p>{produto.descricacao}</p>
              <span>{produto.preco}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}
