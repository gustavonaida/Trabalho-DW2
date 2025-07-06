import { useParams } from "react-router-dom";
import EditarDespesaFixa from "../components/EditarDespesaFixa";
import EditarDespesaVariavel from "../components/EditarDespesaVariavel";

function EditarDespesa({ despesas }) {
  const { id } = useParams();
  const posicao = Number(id.slice(-1));

  if (id.includes("despesa-fixa")) {
    return (
      <EditarDespesaFixa
        despesa={despesas.despesaFixa[Number(posicao)]}
        index={posicao}
      />
    );
  } else {
    return (
      <EditarDespesaVariavel
        despesa={despesas.despesaVariavel[Number(posicao)]}
        index={posicao}
      />
    );
  }
}

export default EditarDespesa;
