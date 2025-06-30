import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      <div className="colunas">
        <h1>Despesas Fixas:</h1>
        <div className="coluna-despesas-fixas"></div>
        <h1>Despesas Variáveis:</h1>
        <div className="coluna-despesas-variaveis"></div>
      </div>

      <div className="grafico">grafico</div>
    </div>
  );
}

export default Home;
