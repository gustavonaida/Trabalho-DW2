import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import "../css/Graficos.css";


function GraficoFixa({despesasFixas}){

    const generateColor = (index) => {
  const hue = (index * 137.508) % 360;
  return `hsl(${hue}, 70%, 60%)`;
};

    return( <div>
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
        </div>)
}

export default GraficoFixa;