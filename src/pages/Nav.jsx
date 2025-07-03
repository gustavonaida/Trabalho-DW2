import "../css/Nav.css";
import logo from "../assets/images/logo.png";

export default function Nav() {
  return (
    <nav>
      <img
        src={logo}
        alt="Gerenciamento de Despesas"
        className="logo"
        onClick={() => (window.location.href = "#home-page")}
      />
      <div className="pages">
        <a href="#home-page">Início</a>
        <a href="#gerenciador-page">Gerenciar</a>
        <a href="#graficos-page">Gráficos</a>
      </div>
    </nav>
  );
}
