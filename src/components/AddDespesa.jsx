import { useState, useContext } from "react";
import ConcluidoAdicionar from "./ConcluidoAdicionar";
import "../css/Gerenciador.css";
import { useDespesas } from "./DespesasContexto"; // ou "../components/DespesasContexto" se estiver em outro lugar

function AddDespesa() {
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState("");
  const [periodicidade, setPeriodicidade] = useState("");
  const [tipoDespesa, setTipoDespesa] = useState("");
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("");

  const { data, setData } = useDespesas(); // pegando o array atual de despesas

  const limparCampos = () => {
    setNome("");
    setValor("");
    setData("");
    setPeriodicidade("");
    setDescricao("");
    setCategoria("");
    setTipoDespesa("");
  };

  const posicao =
    tipoDespesa === "despesaFixa"
      ? data?.despesaFixa?.length ?? 0
      : data?.despesaVariavel?.length ?? 0;

  const novaDespesa =
    tipoDespesa === "despesaFixa"
      ? {
          nome,
          valor,
          data,
          periodicidade,
          descricao,
          categoria,
          posicao,
        }
      : {
          nome,
          valor,
          data,
          descricao,
          categoria,
          posicao,
        };

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
            value={tipoDespesa}
            onChange={(e) => setTipoDespesa(e.target.value)}
          >
            <option value="">Selecione</option>
            <option value="despesaFixa">Despesa fixa</option>
            <option value="despesaVariavel">Despesa variável</option>
          </select>
        </div>

        {tipoDespesa === "despesaFixa" && (
          <div className="despesa-input">
            <h2>Periodicidade</h2>
            <select
              value={periodicidade}
              onChange={(e) => setPeriodicidade(e.target.value)}
            >
              <option value="">Selecione</option>
              <option value="semana">Semana</option>
              <option value="mês">Mês</option>
              <option value="ano">Ano</option>
            </select>
          </div>
        )}

        <div className="despesa-input">
          <h2>Descrição</h2>
          <textarea
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
        </div>

        <div className="despesa-input">
          <h2>Categoria</h2>
          <select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="">Selecione</option>
            <option value="Assinatura">Assinatura</option>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Moradia">Moradia</option>
            <option value="Saúde">Saúde</option>
          </select>
        </div>

        <div className="despesa-input">
          <ConcluidoAdicionar
            novaDespesa={novaDespesa}
            tipoDespesa={tipoDespesa}
            onClick={limparCampos}
          />
        </div>
      </div>
    </div>
  );
}

export default AddDespesa;
