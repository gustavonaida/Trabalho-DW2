import RemoverDespesa from "./RemoverDespesa";
import { Link } from "react-router-dom";
import DespesaItem from "./DespesaItem";

function DespesaList({ despesas, tipoDespesa }) {
  return (
    <>
      <div className="container-despesas">
        {despesas.map((item, index) => (
          <div key={index} className="despesa-item">
            <RemoverDespesa index={index} tipoDespesa={`${tipoDespesa}`} />
            <Link to={`/gerenciar/${tipoDespesa}-${index}`}>
              <DespesaItem id={index} dados={item} tipoDespesa={tipoDespesa} />
            </Link>
          </div>
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
