import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import "../css/Graficos.css";


function GraficoVariavel({ despesasVariaveis }) {
  const generateColor = (index) => {
    const hue = (index * 137.508) % 360;
    return `hsl(${hue}, 70%, 60%)`;
  };

  if (despesasVariaveis.length === 0) {
    return <p>Nenhuma despesa variável registrada.</p>;
  }

  return (
    <div>
      <h2>Despesas Variáveis</h2>
      <PieChart width={550} height={300}>
        <Pie
          data={despesasVariaveis}
          cx="50%"
          cy="50%"
          outerRadius={100}
          label={({ nome, percent }) =>
            `${nome} (${(percent * 100).toFixed(0)}%)`
          }
          dataKey="valor"
        >
          {despesasVariaveis.map((entry, index) => (
            <Cell key={`cell-${entry.nome}`} fill={generateColor(index)} />
          ))}
        </Pie>
        <Tooltip formatter={(value) => `R$ ${value}`} />
        <Legend />
      </PieChart>
    </div>
  );
}

export default GraficoVariavel;