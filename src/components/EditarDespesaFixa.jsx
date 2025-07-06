import { useState } from "react";
import "../css/EditarDespesa.css";

function EditarDespesaFixa({ despesa, index }) {
  const [nome, setNome] = useState(despesa.nome);
  const [valor, setValor] = useState(despesa.valor);
  const [data, setData] = useState(despesa.data);
  const [periodicidade, setPeriodicidade] = useState(despesa.periodicidade);
  return (
    <div className="container-editar-despesa">
      <h2>Nome</h2>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <h2>Valor</h2>
      <input
        type="number"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />

      <h2>Data</h2>
      <input
        type="date"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />

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
  );
}

export default EditarDespesaFixa;
