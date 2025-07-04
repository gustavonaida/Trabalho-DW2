import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./pages/Nav";
import Home from "./pages/Home";
import Gerenciador from "./pages/Gerenciador";
import Graficos from "./pages/Graficos";
import { useState } from "react";

function App() {
  const [data, setData] = useState({
    despesaVariavel: [
      {
        nome: "Coca-Cola Light",
        valor: 6,
        data: "2025-06-25",
      },
    ],
    despesaFixa: [
      {
        nome: "Plano Spotify",
        valor: 21.9,
        data: "2025-01-10",
        periodicidade: "mês",
      },
    ],
  });
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home dados={data} />} />
        <Route path="/gerenciar" element={<Gerenciador />} />
        <Route path="/graficos" element={<Graficos />} />
      </Routes>
    </Router>
  );
}

export default App;
