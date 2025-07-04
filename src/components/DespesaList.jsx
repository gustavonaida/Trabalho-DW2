import DespesaItem from "./DespesaItem";

function DespesaList({ despesas }) {
  return (
    <>
      <div className="container-despesa-fixa">
        {despesas.map((item, index) => (
          <DespesaItem key={index} dados={item} />
        ))}
      </div>
    </>
  );
}

export default DespesaList;
