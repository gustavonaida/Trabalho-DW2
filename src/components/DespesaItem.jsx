import "../css/DespesaItem.css";

export default function DespesaItem({ dados, id, tipoDespesa }) {
  return (
    <div className="despesa-item" id={`despesa-${tipoDespesa}-${id}`}>
      <h3>{dados.nome}</h3>
      <div className="despesa-item-descricao">
        <div className="despesa-item-descricao-valor">
          <h4>Valor:</h4>
          <p>{dados.valor}</p>
        </div>
        <div className="despesa-item-descricao-data">
          <h4>Data:</h4>
          <p>{dados.data}</p>
        </div>
      </div>
    </div>
  );
}
