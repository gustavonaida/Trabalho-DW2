import { useParams } from "react-router-dom";
import EditarDespesaFixa from "../components/EditarDespesaFixa";
import EditarDespesaVariavel from "../components/EditarDespesaVariavel";

function EditarDespesa({ despesas }) {
  const { id } = useParams();

  if (id.includes("despesa-fixa")) {
    return <EditarDespesaFixa />;
  } else {
    return <EditarDespesaVariavel />;
  }
}

export default EditarDespesa;
