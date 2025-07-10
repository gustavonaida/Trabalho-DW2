import { createContext, useContext, useState } from "react";

const DespesasContext = createContext();

export function DespesasProvider({ children }) {
  const [data, setData] = useState({
    despesaVariavel: [
      {
        nome: "Coca-Cola Light",
        valor: 6,
        data: "2025-06-25",
        descricao: "Refrigerante comprado no mercado",
      },
      {
        nome: "Lanche no Burger King",
        valor: 34.5,
        data: "2025-06-28",
        descricao: "Almoço no shopping",
      },
      {
        nome: "Uber para faculdade",
        valor: 12,
        data: "2025-06-27",
        descricao: "Transporte até a faculdade",
      },
      {
        nome: "Ingresso de cinema",
        valor: 22,
        data: "2025-06-30",
        descricao: "Sessão de cinema à noite",
      },
      {
        nome: "Pastel da feira",
        valor: 9,
        data: "2025-07-01",
        descricao: "Lanche de quarta-feira na feira",
      },
    ],
    despesaFixa: [
      {
        nome: "Plano Spotify",
        valor: 21.9,
        data: "2025-01-10",
        periodicidade: "mês",
        descricao: "Assinatura mensal de música",
      },
      {
        nome: "Internet Vivo Fibra",
        valor: 99.9,
        data: "2025-01-05",
        periodicidade: "mês",
        descricao: "Serviço de internet residencial",
      },
      {
        nome: "Netflix",
        valor: 39.9,
        data: "2025-01-15",
        periodicidade: "mês",
        descricao: "Assinatura de streaming",
      },
      {
        nome: "Aluguel",
        valor: 750,
        data: "2025-01-01",
        periodicidade: "mês",
        descricao: "Aluguel do apartamento",
      },
      {
        nome: "Plano de saúde",
        valor: 189.9,
        data: "2025-01-12",
        periodicidade: "mês",
        descricao: "Mensalidade do convênio médico",
      },
    ],
  });

  return (
    <DespesasContext.Provider value={{ data, setData }}>
      {children}
    </DespesasContext.Provider>
  );
}
export function useDespesas() {
  return useContext(DespesasContext);
}
