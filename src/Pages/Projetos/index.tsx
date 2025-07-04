import styled from "styled-components";
import Projeto from "../../componentes/Projeto";

const SecaoTechs = styled.section`
  max-width: 900px;
  margin: 0 auto;
  padding: 3em 1em;
  color: var(--subtitle-color);
  text-align: center;

  .grid-techs {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    justify-items: center;
    margin-top: 3rem;
  }

  @media (max-width: 768px) {
    .grid-techs {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 480px) {
    .grid-techs {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default function Projetos() {
  return (
    <SecaoTechs>
      <div className="grid-techs">
        <Projeto
          nome="Área Administartiva"
          descricao="Dashboard: Página principal com tabela, gráficos e informações."
          techs={[
            "React",
            "Typescript",
            "Styled-Components",
            "MUI",
            "Recharts",
          ]}
          link="https://github.com/tarciana23/area_admistrativa.git"
        />
        <Projeto
          nome="VollMed"
          descricao="Api para gerenciamento de um hospital."
          techs={[
            "Java",
            "Spring Boot",
            "MySQL",
            "Flyway",
            "Spring Data",
            "Spring Security"
          ]}
          link="https://github.com/tarciana23/vollMed.git"
        />
        <Projeto
          nome="RocketNotes"
          descricao="Sistema para gerenciamento de notas"
          techs={[
            "React",
            "Node",
            "Styled-Components",
            "Node",
            "Express"
          ]}
          link="https://github.com/tarciana23/RocketNotes.git"
        />
        <Projeto
          nome="MoviesLib"
          descricao="Site para busca de filmes"
          techs={[
            "React"
          ]}
          link="https://github.com/tarciana23/MoviesLib.git"
        />
        <Projeto
          nome="UserMax"
          descricao="Crud completo para gerenciamento de usuários"
          techs={[
            "Java",
            "Spring Boot",
            "H2",
            "Lombok",
            "JUnit",
            "Mockito"
          ]}
          link="https://github.com/tarciana23/cadastro-usuario"
        />
        <Projeto
          nome="Organo"
          descricao="Gerenciador de funcionários"
          techs={[
            "React"
          ]}
          link="https://github.com/tarciana23/organo.git"
        />
      </div>
    </SecaoTechs>
  );
}
