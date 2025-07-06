import React from "react";
import "../css/Graficos.css";
import GraficoComparativo from "../components/GraficoComparativo";
import GraficoFixa from "../components/GraficoFixa";
import GraficoVariavel from "../components/GraficoVariavel";

export default function Graficos({ despesas }) {
  return (
    <div id="graficos-page">
      <h1>Gráficos de Despesas Fixas e Variáveis</h1>

      <div className="grafico-todos">
        <div className="grafico-individual">
          <GraficoComparativo
            despesasFixas={despesas.despesaFixa}
            despesasVariaveis={despesas.despesaVariavel}
          />
        </div>

        <div className="grafico-individual">
          <GraficoFixa despesasFixas={despesas.despesaFixa} />
        </div>

        <div className="grafico-individual">
          <GraficoVariavel despesasVariaveis={despesas.despesaVariavel} />
        </div>
      </div>
    </div>
  );
}
