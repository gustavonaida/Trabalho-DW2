import DespesaItem from "./DespesaItem";
import { Link } from "react-router-dom";

function DespesaList({ despesas, tipoDespesa }) {
  return (
    <>
      <div className="container-despesas">
        {despesas.map((item, index) => (
          <Link key={index} to={`/gerenciar/despesa-${tipoDespesa}-${index}`}>
            <DespesaItem id={index} dados={item} tipoDespesa={tipoDespesa} />
          </Link>
        ))}
        <div className="despesa-item" id="adicionar-despesa">
          +
        </div>
      </div>
    </>
  );
}

export default DespesaList;
