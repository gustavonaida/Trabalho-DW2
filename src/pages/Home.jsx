import DespesaList from "../components/DespesaList";
import { useDespesas } from "../components/DespesasContexto";
import "../css/Home.css";

function Home() {
  const { data, setData } = useDespesas();

  return (
    <div id="home-page">
      <h1>
        Despesas Fixas: R${" "}
        {data.despesaFixa
          .reduce((total, item) => total + Number(item.valor), 0)
          .toFixed(2)}
      </h1>
      <DespesaList despesas={data.despesaFixa} tipoDespesa="despesaFixa" />
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
    </div>
  );
}

export default Home;
