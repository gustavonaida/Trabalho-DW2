import { Link } from "react-router-dom";
import DespesaItem from "./DespesaItem";
import ButtonAddDespesa from "../components/ButtonAddDespesa";

function DespesaList({ despesas, tipoDespesa }) {
  return (
    <>
      <div className="container-despesas">
        {despesas.map((item, index) => (
          <Link key={index} to={`/gerenciar/despesa-${tipoDespesa}-${index}`}>
            <DespesaItem id={index} dados={item} tipoDespesa={tipoDespesa} />
          </Link>
        ))}
        <Link to={`/gerenciar`}>
          <ButtonAddDespesa />
        </Link>
      </div>
    </>
  );
}

export default DespesaList;
