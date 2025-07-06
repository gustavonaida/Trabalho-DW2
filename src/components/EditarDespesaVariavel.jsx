import "../css/EditarDespesa.css";

function EditarDespesaVariavel({ despesa, index }) {
  return (
    <div className="container-editar-despesa">
      <h2>Nome</h2>
      <input type="text" value={despesa.nome} />
    </div>
  );
}

export default EditarDespesaVariavel;
