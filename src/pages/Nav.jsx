import "../css/Nav.css";

export default function Nav() {
  return (
    <nav>
      <h1>Gerenciador de Despesas</h1>
      <div className="pages">
        <a href="#home-page">Início</a>
        <a href="#gerenciador-page">Gerenciar Despesas</a>
        <a href="#graficos-page">Gráficos</a>
      </div>
    </nav>
  );
}
