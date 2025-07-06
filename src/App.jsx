import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./pages/Nav";
import Home from "./pages/Home";
import Gerenciador from "./pages/Gerenciador";
import Graficos from "./pages/Graficos";
import EditarDespesa from "./pages/EditarDespesa";
import { useState } from "react";

function App() {
  const [data, setData] = useState({
    despesaVariavel: [
      {
        nome: "Coca-Cola Light",
        valor: 6,
        data: "2025-06-25",
      },
      {
        nome: "Lanche no Burger King",
        valor: 34.5,
        data: "2025-06-28",
      },
      {
        nome: "Uber para faculdade",
        valor: 12,
        data: "2025-06-27",
      },
      {
        nome: "Ingresso de cinema",
        valor: 22,
        data: "2025-06-30",
      },
      {
        nome: "Pastel da feira",
        valor: 9,
        data: "2025-07-01",
      },
    ],
    despesaFixa: [
      {
        nome: "Plano Spotify",
        valor: 21.9,
        data: "2025-01-10",
        periodicidade: "mês",
      },
      {
        nome: "Internet Vivo Fibra",
        valor: 99.9,
        data: "2025-01-05",
        periodicidade: "mês",
      },
      {
        nome: "Netflix",
        valor: 39.9,
        data: "2025-01-15",
        periodicidade: "mês",
      },
      {
        nome: "Aluguel",
        valor: 750,
        data: "2025-01-01",
        periodicidade: "mês",
      },
      {
        nome: "Plano de saúde",
        valor: 189.9,
        data: "2025-01-12",
        periodicidade: "mês",
      },
    ],
  });
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home dados={data} />} />
        <Route path="/gerenciar" element={<Gerenciador />}>
          <Route path=":id" element={<EditarDespesa despesas={data} />} />
        </Route>
        <Route path="/graficos" element={<Graficos />} />
      </Routes>
    </Router>
  );
}

export default App;
