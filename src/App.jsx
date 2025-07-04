import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./pages/Nav";
import Home from "./pages/Home";
import Gerenciador from "./pages/Gerenciador";
import Graficos from "./pages/Graficos";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gerenciar" element={<Gerenciador />} />
        <Route path="/graficos" element={<Graficos />} />
      </Routes>
    </Router>
  );
}

export default App;
