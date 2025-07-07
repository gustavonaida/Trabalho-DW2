import { Link } from "react-router-dom";
import DespesaItem from "./DespesaItem";
import ButtonAddDespesa from "../components/ButtonAddDespesa";
import { useState } from "react";
import AddDespesa from "./AddDespesa";

function DespesaList({ despesas, tipoDespesa }) {
  const [mostrarAdicionarDespesa, setMostrarAdicionarDespesa] = useState(false);
  return (
    <>
      <div className="container-despesas">
        {despesas.map((item, index) => (
          <Link key={index} to={`/gerenciar/despesa-${tipoDespesa}-${index}`}>
            <DespesaItem id={index} dados={item} tipoDespesa={tipoDespesa} />
          </Link>
        ))}
        <ButtonAddDespesa onClick={() => setMostrarAdicionarDespesa(true)} />
        {mostrarAdicionarDespesa ? <AddDespesa /> : <></>}
      </div>
    </>
  );
}

export default DespesaList;
