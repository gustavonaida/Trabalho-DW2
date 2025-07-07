import { Outlet } from "react-router-dom";
import "../css/Gerenciador.css";
import AddDespesa from "../components/AddDespesa";
import ButtonAddDespesa from "../components/ButtonAddDespesa";

export default function Gerenciador({ funcao }) {
  return (
    <div id="gerenciador-page">
      <h1>Gerenciar Despesa:</h1>
      <div className="componentes">
        <Outlet />
        <AddDespesa OnClick={funcao} />
        {/* <ButtonAddDespesa /> */}
      </div>
    </div>
  );
}
