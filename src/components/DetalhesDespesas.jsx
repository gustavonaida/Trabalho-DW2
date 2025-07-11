import { useState } from "react";
import "../css/DetalhesDespesas.css";
import { useDespesas } from "./DespesasContexto";

function DetalhesDespesas({ despesa }) {
  const { data, setData } = useDespesas();
  const [despesaSelecionada, setDespesaSelecionada] = useState(despesa);
  return (
    <div className="item-despesa">
      <div className="despesa-alerta">
        <h2>{despesaSelecionada.nome}</h2>
        <p>Valor: R$ {despesaSelecionada.valor}</p>
        <p>Data: {despesaSelecionada.data}</p>
        <p>Categoria: {despesaSelecionada.categoria}</p>
        <p>Descrição: {despesaSelecionada.descricao}</p>
      </div>
    </div>
  );
}

export default DetalhesDespesas;
