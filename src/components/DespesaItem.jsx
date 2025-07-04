import "../css/DespesaItem.css";

export default function DespesaItem({ dados }) {
  return (
    <div className="despesa-item">
      <h3>{dados.nome}</h3>
      <p>{dados.valor}</p>
      <p>{dados.data}</p>
    </div>
  );
}
