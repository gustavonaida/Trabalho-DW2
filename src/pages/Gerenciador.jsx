import { Outlet } from "react-router-dom";
import "../css/Gerenciador.css";

export default function Gerenciador() {
  return (
    <div id="gerenciador-page">
      <h1>Gerenciar Despesa:</h1>
      <Outlet />
    </div>
  );
}
