import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import "../css/Graficos.css";

const despesasFixas = [
  { name: "Aluguel", value: 680 },
  { name: "Energia", value: 300 },
  { name: "Internet", value: 100 },
];

const despesasVariaveis = [
  { name: "Mercado", value: 600 },
  { name: "Lazer", value: 300 },
  { name: "Transporte", value: 300 },
];

const generateColor = (index) => {
  const hue = (index * 137.508) % 360;
  return `hsl(${hue}, 70%, 60%)`;
};

export default function Graficos() {
  return (
    <div id="graficos-page">
      <h1>Gráficos de Despesas Fixas e Variáveis</h1>

      <div className="grafico-duplo">
        <div>
          <h2>Despesas Fixas</h2>
          <PieChart width={550} height={300}>
            <Pie
              data={despesasFixas}
              cx="50%"
              cy="50%"
              outerRadius={100}
              label={({ name, percent }) =>
                `${name} (${(percent * 100).toFixed(0)}%)`
              }
              dataKey="value"
            >
              {despesasFixas.map((entry, index) => (
                <Cell key={index} fill={generateColor(index)} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => `R$ ${value}`} />
            <Legend />
          </PieChart>
        </div>

        <div>
          <h2>Despesas Variáveis</h2>
          <PieChart width={550} height={300}>
            <Pie
              data={despesasVariaveis}
              cx="50%"
              cy="50%"
              outerRadius={100}
              label={({ name, percent }) =>
                `${name} (${(percent * 100).toFixed(0)}%)`
              }
              dataKey="value"
            >
              {despesasVariaveis.map((entry, index) => (
                <Cell key={index} fill={generateColor(index)} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => `R$ ${value}`} />
            <Legend />
          </PieChart>
        </div>
      </div>
    </div>
  );
}
