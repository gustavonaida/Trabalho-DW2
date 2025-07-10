import { useState } from "react";
import "../css/Gerenciador.css";

function EditarDespesaVariavel({ despesa, index }) {
  const [nome, setNome] = useState(despesa.nome);
  const [valor, setValor] = useState(despesa.valor);
  const [data, setData] = useState(despesa.data);
  const [descricao, setDescricao] = useState(despesa.descricao);
  return (
    <div className="container-gerenciar-despesa">
      <h1 id="titulo-gerenciar-despesa">Editar Despesa:</h1>
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
          <h2>Descrição</h2>
          <textarea
            name="descricao-despesa"
            id="descricao-despesa"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          ></textarea>
        </div>

        <div className="despesa-input">
          <ButtonEditarDespesa
            index={index}
            novaDespesa={{
              nome,
              valor,
              data,
              descricao,
            }}
            tipoDespesa={"despesaVariavel"}
          />
        </div>
      </div>
    </div>
  );
}

export default EditarDespesaVariavel;
