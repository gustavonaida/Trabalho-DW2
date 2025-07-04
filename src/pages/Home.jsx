import DespesaList from "../components/DespesaList";
import "../css/Home.css";

function Home({ dados }) {
  return (
    <div id="home-page">
      <h1>Despesas Fixas:</h1>
      <DespesaList despesas={dados.despesaFixa} />
      <h1>Despesas Variáveis:</h1>
      <DespesaList despesas={dados.despesaVariavel} />
    </div>
  );
}

export default Home;
