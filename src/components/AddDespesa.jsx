import { useState } from "react";

function AddDespesa() {
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState("");
  const [data, setData] = useState("");
  const [periodicidade, setPeriodicidade] = useState("");
  const [descricao, setDescricao] = useState("");

  return (
    <div className="container-gerenciar-despesa">
      <h1 id="titulo-gerenciar-despesa">Adicionar Despesa:</h1>
      <div className="container-gerenciar-despesa-inputs">
        <div className="editar-despesa-input">
          <h2>Nome</h2>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div className="editar-despesa-input">
          <h2>Valor</h2>
          <input
            type="number"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
          />
        </div>
        <div className="editar-despesa-input">
          <h2>Data</h2>
          <input
            type="date"
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
        </div>
        <div className="editar-despesa-input">
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
        <div className="editar-despesa-input">
          <h2>Descrição</h2>
          <textarea
            name="descricao-despesa"
            id="descricao-despesa"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          ></textarea>
        </div>

        <div className="editar-despesa-input">
          <ConcluidoAdicionar />
        </div>
      </div>
    </div>
  );
}

export default AddDespesa;
