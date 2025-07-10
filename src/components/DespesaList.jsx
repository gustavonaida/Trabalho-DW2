import { Link } from "react-router-dom";
import DespesaItem from "./DespesaItem";

function DespesaList({ despesas, tipoDespesa }) {
  return (
    <>
      <div className="container-despesas">
        {despesas.map((item, index) => (
          <Link key={index} to={`/gerenciar/despesa-${tipoDespesa}-${index}`}>
            <DespesaItem id={index} dados={item} tipoDespesa={tipoDespesa} />
          </Link>
        ))}
        <Link to={"/gerenciar"}>
          <div className="despesa-item" id="adicionar-despesa">
            +
          </div>
        </Link>
      </div>
    </>
  );
}

export default DespesaList;
