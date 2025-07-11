import { useState } from "react";
import DespesaList from "../components/DespesaList";
import { useDespesas } from "../components/DespesasContexto";
import "../css/Home.css";

function Home() {
  const { data, setData } = useDespesas();

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
        {assinaturaF.length > 0 ? (
          (console.log(assinaturaF),
          (
            <span>
              <h2>Assinatura</h2>
              <DespesaList despesas={assinaturaF} tipoDespesa="despesaFixa" />
            </span>
          ))
        ) : (
          <></>
        )}

        {alimentacaoF.length > 0 ? (
          (console.log(alimentacaoF),
          (
            <span>
              <h2>Alimentação</h2>
              <DespesaList despesas={alimentacaoF} tipoDespesa="despesaFixa" />
            </span>
          ))
        ) : (
          <></>
        )}

        {lazerF.length > 0 ? (
          (console.log(lazerF),
          (
            <span>
              <h2>Lazer</h2>
              <DespesaList despesas={lazerF} tipoDespesa="despesaFixa" />
            </span>
          ))
        ) : (
          <></>
        )}

        {moradiaF.length > 0 ? (
          (console.log(moradiaF),
          (
            <span>
              <h2>Moradia</h2>
              <DespesaList despesas={moradiaF} tipoDespesa="despesaFixa" />
            </span>
          ))
        ) : (
          <></>
        )}

        {saudeF.length > 0 ? (
          (console.log(saudeF),
          (
            <span>
              <h2>Saúde</h2>
              <DespesaList despesas={saudeF} tipoDespesa="despesaFixa" />
            </span>
          ))
        ) : (
          <></>
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
        {assinaturaV.length > 0 ? (
          (console.log(assinaturaV),
          (
            <span>
              <h2>Assinatura</h2>
              <DespesaList
                despesas={assinaturaV}
                tipoDespesa="despesaVariaveis"
              />
            </span>
          ))
        ) : (
          <></>
        )}

        {alimentacaoV.length > 0 ? (
          (console.log(alimentacaoV),
          (
            <span>
              <h2>Alimentação</h2>
              <DespesaList
                despesas={alimentacaoV}
                tipoDespesa="despesaVariaveis"
              />
            </span>
          ))
        ) : (
          <></>
        )}

        {lazerV.length > 0 ? (
          (console.log(lazerV),
          (
            <span>
              <h2>Lazer</h2>
              <DespesaList despesas={lazerV} tipoDespesa="despesaVariaveis" />
            </span>
          ))
        ) : (
          <></>
        )}

        {moradiaV.length > 0 ? (
          (console.log(moradiaV),
          (
            <span>
              <h2>Moradia</h2>
              <DespesaList despesas={moradiaV} tipoDespesa="despesaVariaveis" />
            </span>
          ))
        ) : (
          <></>
        )}

        {saudeV.length > 0 ? (
          (console.log(saudeV),
          (
            <span>
              <h2>Saúde</h2>
              <DespesaList despesas={saudeV} tipoDespesa="despesaVariaveis" />
            </span>
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Home;
