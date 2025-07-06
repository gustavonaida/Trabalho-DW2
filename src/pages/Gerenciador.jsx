import { useState } from "react";
import { Outlet } from "react-router-dom";
import "../css/Gerenciador.css";
import AddDespesa from "../components/AddDespesa";
import ButtonAddDespesa from "../components/ButtonAddDespesa";

export default function Gerenciador(mostrar = false) {
  const [mostrarAdicionar, setMostrarAdicionar] = useState(false);
  return (
    <div id="gerenciador-page">
      <h1>Gerenciar Despesa:</h1>
      <div className="componentes">
        <Outlet />
        {mostrarAdicionar || mostrar ? (
          <AddDespesa />
        ) : (
          <ButtonAddDespesa onClick={() => setMostrarAdicionar(true)} />
        )}
      </div>
    </div>
  );
}
