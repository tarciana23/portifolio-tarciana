import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from "styled-components";
import Footer from "./componentes/Footer";
import Header from "./componentes/Header";
import "./index.css";
import Inicio from "./Pages/Inicio";
import SobreMim from './Pages/SobreMim';
import Techs from './Pages/Techs';
import Projetos from './Pages/Projetos';


const Pagina = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Conteudo = styled.main`
  flex: 1; 
`;

function App() {
  return (
    <Router>
      <Pagina>
        <Header />
        <Conteudo>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/sobre" element={<SobreMim />} />
            <Route path="/techs" element={<Techs />} />
            <Route path="/projetos" element={<Projetos />} />
          </Routes>
        </Conteudo>
        <Footer />
      </Pagina>
    </Router>
  );
}

export default App;
