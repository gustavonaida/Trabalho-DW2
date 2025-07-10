import { useState } from "react";
import ConcluidoAdicionar from "./ConcluidoAdicionar";
import "../css/Gerenciador.css";

function AddDespesa() {
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState("");
  const [data, setData] = useState("");
  const [periodicidade, setPeriodicidade] = useState("");
  const [descricao, setDescricao] = useState("");

  return (
    <div className="container-gerenciar-despesa">
      <h1 id="titulo-adicionar-despesa">Adicionar Despesa:</h1>
      <div className="container-gerenciar-despesa-inputs">
        <div className="despesa-input">
          <h2>Nome</h2>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div className="despesa-input">
          <h2>Valor</h2>
          <input
            type="number"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
          />
        </div>
        <div className="despesa-input">
          <h2>Data</h2>
          <input
            type="date"
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
        </div>
        <div className="despesa-input">
          <h2>Tipo de Despesa</h2>
          <select
            name="tipo-despesa"
            id="tipo-despesa"
            onChange={(e) => setPeriodicidade(e.target.value)}
            value={periodicidade}
          >
            <option value="">Selecione</option>
            <option value="despesaFixa">Despesa fixa</option>
            <option value="despesaVariavel">Despesa variável</option>
          </select>
        </div>

        {periodicidade === "despesaFixa" && (
          <div className="despesa-input">
            <h2>Periodicidade</h2>
            <select
              value={periodicidade}
              onChange={(e) => setPeriodicidade(e.target.value)}
              name="periodicidade"
              id="periodicidade-despesa"
            >
              <option value="semana">Semana</option>
              <option value="mês">Mês</option>
              <option value="ano">Ano</option>
            </select>
          </div>
        )}

        <div className="despesa-input">
          <h2>Descrição</h2>
          <textarea
            name="descricao-despesa"
            id="descricao-despesa"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          ></textarea>
        </div>

        <div className="despesa-input">
          <ConcluidoAdicionar
            novaDespesa={
              periodicidade
                ? {
                    nome,
                    valor,
                    data,
                    periodicidade,
                    descricao,
                  }
                : {
                    nome,
                    valor,
                    data,
                    descricao,
                  }
            }
            tipoDespesa={periodicidade ? "despesaFixa" : "despesaVariavel"}
            onClick={() => {
              setData("");
              setDescricao("");
              setNome("");
              setPeriodicidade("");
              setValor("");
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default AddDespesa;
