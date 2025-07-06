function ConcluidoAdicionar({ onClick, novaDespesa }) {
  return (
    <button className="concluido-adicionar-btn" onClick={onClick(novaDespesa)}>
      Adicionar
    </button>
  );
}

export default ConcluidoAdicionar;
