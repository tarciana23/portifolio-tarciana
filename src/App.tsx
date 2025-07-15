import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from "styled-components";
import Footer from "./componentes/Footer";
import Header from "./componentes/Header";
import "./index.css";
import Inicio from "./Pages/Inicio";
import SobreMim from './Pages/SobreMim';
import Projetos from './Pages/Projetos';
import { Contato } from './Pages/Contato';
import Stacks from './Pages/Stacks';


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
            <Route path="/stacks" element={<Stacks />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/Contato" element={<Contato />} />
          </Routes>
        </Conteudo>
        <Footer />
      </Pagina>
    </Router>
  );
}

export default App;
