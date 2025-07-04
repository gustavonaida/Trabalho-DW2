import "../css/Nav.css";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <Link to="/">
        <img
          src={logo}
          alt="Gerenciamento de Despesas"
          className="logo"
          onClick={() => (window.location.href = "#home-page")}
        />
      </Link>
      <div className="pages">
        <Link to="/">Início</Link>
        <Link to="/gerenciar">Gerenciar</Link>
        <Link to="/graficos">Graficos</Link>
      </div>
    </nav>
  );
}
