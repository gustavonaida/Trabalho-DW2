import { useDespesas } from "./DespesasContexto";
import { useNavigate } from "react-router-dom";

function ButtonEditarDespesa({ index, novaDespesa, tipoDespesa }) {
  const { data, setData } = useDespesas();
  const navigate = useNavigate();

  const handleClick = () => {
    setData((despesa) => {
      if (tipoDespesa === "despesaVariavel") {
        return {
          ...despesa,
          despesaVariavel: [...despesa.despesaVariavel, novaDespesa],
        };
      } else {
        return {
          ...despesa,
          despesaFixa: [...despesa.despesaFixa, novaDespesa],
        };
      }
    });
    navigate("/");
  };

  return (
    <button className="concluido-adicionar-btn" onClick={handleClick}>
      Salvar
    </button>
  );
}

export default ButtonEditarDespesa;
