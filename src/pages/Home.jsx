import { useState } from "react";
import { useDespesas } from "../components/DespesasContexto";
import DespesaList from "../components/DespesaList";
import DespesaListCategoria from "../components/DespesaListCategoria";
import ConversorMoeda from "../services/ConversorMoeda"; // ⬅️ Importado aqui
import "../css/Home.css";

function Home() {
  const { data } = useDespesas();
  const [valor, setValor] = useState(""); // ⬅️ Estado para o conversor

  const [alimentacaoF, setAlimentacaoF] = useState(
    data.despesaFixa.filter((item) => item.categoria === "Alimentação")
  );
  const [assinaturaF, setAssinaturaF] = useState(
    data.despesaFixa.filter((item) => item.categoria === "Assinatura")
  );
  const [lazerF, setLazerF] = useState(
    data.despesaFixa.filter((item) => item.categoria === "Lazer")
  );
  const [moradiaF, setMoradiaF] = useState(
    data.despesaFixa.filter((item) => item.categoria === "Moradia")
  );
  const [saudeF, setSaudeF] = useState(
    data.despesaFixa.filter((item) => item.categoria === "Saúde")
  );

  const [alimentacaoV, setAlimentacaoV] = useState(
    data.despesaVariavel.filter((item) => item.categoria === "Alimentação")
  );
  const [assinaturaV, setAssinaturaV] = useState(
    data.despesaVariavel.filter((item) => item.categoria === "Assinatura")
  );
  const [lazerV, setLazerV] = useState(
    data.despesaVariavel.filter((item) => item.categoria === "Lazer")
  );
  const [moradiaV, setMoradiaV] = useState(
    data.despesaVariavel.filter((item) => item.categoria === "Moradia")
  );
  const [saudeV, setSaudeV] = useState(
    data.despesaVariavel.filter((item) => item.categoria === "Saúde")
  );

  return (
    <div id="home-page">
      <h1>
        Despesas Fixas: R${" "}
        {data.despesaFixa
          .reduce((total, item) => total + Number(item.valor), 0)
          .toFixed(2)}
      </h1>
      <DespesaList despesas={data.despesaFixa} tipoDespesa="despesaFixa" />

      <div className="categorias-fixas">
        <h1>Categorias:</h1>

        {assinaturaF.length > 0 && (
          <span>
            <h2>Assinatura</h2>
            <DespesaListCategoria
              despesas={assinaturaF}
              tipoDespesa="despesaFixa"
            />
          </span>
        )}

        {alimentacaoF.length > 0 && (
          <span>
            <h2>Alimentação</h2>
            <DespesaListCategoria
              despesas={alimentacaoF}
              tipoDespesa="despesaFixa"
            />
          </span>
        )}

        {lazerF.length > 0 && (
          <span>
            <h2>Lazer</h2>
            <DespesaListCategoria despesas={lazerF} tipoDespesa="despesaFixa" />
          </span>
        )}

        {moradiaF.length > 0 && (
          <span>
            <h2>Moradia</h2>
            <DespesaListCategoria
              despesas={moradiaF}
              tipoDespesa="despesaFixa"
            />
          </span>
        )}

        {saudeF.length > 0 && (
          <span>
            <h2>Saúde</h2>
            <DespesaListCategoria despesas={saudeF} tipoDespesa="despesaFixa" />
          </span>
        )}
      </div>

      <h1>
        Despesas Variáveis: R${" "}
        {data.despesaVariavel
          .reduce((total, item) => total + Number(item.valor), 0)
          .toFixed(2)}
      </h1>
      <DespesaList
        despesas={data.despesaVariavel}
        tipoDespesa="despesaVariavel"
      />

      <div className="categorias-variaveis">
        <h1>Categorias:</h1>

        {assinaturaV.length > 0 && (
          <span>
            <h2>Assinatura</h2>
            <DespesaListCategoria
              despesas={assinaturaV}
              tipoDespesa="despesaVariaveis"
            />
          </span>
        )}

        {alimentacaoV.length > 0 && (
          <span>
            <h2>Alimentação</h2>
            <DespesaListCategoria
              despesas={alimentacaoV}
              tipoDespesa="despesaVariaveis"
            />
          </span>
        )}

        {lazerV.length > 0 && (
          <span>
            <h2>Lazer</h2>
            <DespesaListCategoria
              despesas={lazerV}
              tipoDespesa="despesaVariaveis"
            />
          </span>
        )}

        {moradiaV.length > 0 && (
          <span>
            <h2>Moradia</h2>
            <DespesaListCategoria
              despesas={moradiaV}
              tipoDespesa="despesaVariaveis"
            />
          </span>
        )}

        {saudeV.length > 0 && (
          <span>
            <h2>Saúde</h2>
            <DespesaListCategoria
              despesas={saudeV}
              tipoDespesa="despesaVariaveis"
            />
          </span>
        )}
      </div>

      {/* 🔽 Conversor de Moedas adicionado abaixo */}
      <div className="conversor-container" style={{ marginTop: "3rem" }}>
        <h1>Conversor de Moeda</h1>
        <input
          type="number"
          placeholder="Digite um valor em BRL"
          onChange={(e) => setValor(e.target.value)}
        />
        <ConversorMoeda valorParaConverter={valor} />
      </div>
    </div>
  );
}

export default Home;
