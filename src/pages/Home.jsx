import DespesaList from "../components/DespesaList";
import { useDespesas } from "../components/DespesasContexto";
import "../css/Home.css";

function Home() {
  const { data, setData } = useDespesas();
  return (
    <div id="home-page">
      <h1>Despesas Fixas:</h1>
      <DespesaList despesas={data.despesaFixa} tipoDespesa="despesaFixa" />
      <h1>Despesas Variáveis:</h1>
      <DespesaList
        despesas={data.despesaVariavel}
        tipoDespesa="despesaVariavel"
      />
    </div>
  );
}

export default Home;
