function ConcluidoAdicionar({ funcao, novaDespesa, tipoDespesa }) {
  function handleClick() {
    if (tipoDespesa === "despesaFixa") {
      const newDespesa = {
        nome: novaDespesa.nome,
        valor: novaDespesa.valor,
        data: novaDespesa.data,
        periodicidade: novaDespesa.periodicidade,
        descricao: novaDespesa.descricao,
      };
      return funcao(newDespesa, tipoDespesa);
    } else {
      const newDespesa = {
        nome: novaDespesa.nome,
        valor: novaDespesa.valor,
        data: novaDespesa.data,
        descricao: novaDespesa.descricao,
      };
      return funcao(newDespesa, tipoDespesa);
    }
  }

  return (
    <button className="concluido-adicionar-btn" onClick={handleClick}>
      Adicionar
    </button>
  );
}

export default ConcluidoAdicionar;
