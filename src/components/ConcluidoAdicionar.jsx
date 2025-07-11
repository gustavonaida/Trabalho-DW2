import { useDespesas } from "./DespesasContexto";
import { useNavigate } from "react-router-dom";

function ConcluidoAdicionar({ novaDespesa, tipoDespesa }) {
  const { data, setData } = useDespesas();
  const navigate = useNavigate();

  const handleClick = () => {
    setData((prev) => {
      if (tipoDespesa === "despesaVariavel") {
        return {
          ...prev,
          despesaVariavel: [...prev.despesaVariavel, novaDespesa],
        };
      } else {
        return {
          ...prev,
          despesaFixa: [...prev.despesaFixa, novaDespesa],
        };
      }
    });
    navigate("/");
  };

  return (
    <button className="concluido-adicionar-btn" onClick={handleClick}>
      Adicionar
    </button>
  );
}

export default ConcluidoAdicionar;
