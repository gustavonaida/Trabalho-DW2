import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import "../css/Graficos.css";
import GraficoVariavel from "../components/GraficoVariavel";
import GraficoFixa from "../components/GraficoFixa";


const generateColor = (index) => {
  const hue = (index * 137.508) % 360;
  return `hsl(${hue}, 70%, 60%)`;
};

export default function Graficos({despesas}) {
  return (
    <div id="graficos-page">
      <GraficoVariavel despesasVariaveis={despesas.despesaVariavel} />
      <GraficoFixa  despesasFixas={despesas.despesaFixa}/>
      <h1>Gráficos de Despesas Fixas e Variáveis</h1>

      <div className="grafico-duplo">
       


      </div>
    </div>
  );
}
