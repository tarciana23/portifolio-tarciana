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
    max-width: 100%; 
    padding: 2em 1em;
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
          nome="Sistema bibliotecário"
          descricao="O sistema permite, inicialmente, realizar operações de CRUD com livros, e será expandido para incluir autores, usuários e controle de empréstimos."
          techs={[
            "Java 17 + ",
            "Spring Boot",
            "Spring Data JPA",
            "Lombok",
            "PostgreSQL"
          ]}
          link="https://github.com/tarciana23/sistema-bibliotecario"
        />
        <Projeto
          nome="Área Administartiva"
          descricao="Interface administrativa premium com visualização de dados através de gráficos e tabelas para análise estratégica."
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
          descricao="Plataforma hospitalar completa de profissionais, pacientes e consultas."
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
          descricao="Aplicação completa para criação, organização e gerenciamento de notas pessoais, com sistema de tags e busca avançada."
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
          descricao="Plataforma para busca e descoberta de filmes, integrada com API externa para mostrar informações detalhadas sobre títulos, elenco e avaliações."
          techs={[
            "React"
          ]}
          link="https://github.com/tarciana23/MoviesLib.git"
        />
        <Projeto
          nome="UserMax"
          descricao="Sistema completo de gerenciamento de usuários com operações CRUD, validações de dados e testes unitários abrangentes."
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
          link="Aplicação para organização de equipes, permitindo cadastrar e categorizar colaboradores por time e área de atuação."
        />
        <Projeto
          nome="TodoList"
          descricao="API robusta para gerenciamento de tarefas pessoais ou em equipe, com autenticação, categorização e status de conclusão."
          techs={[
            "Spring Boot","Spring MVC","Spring Data JPA","SpringDoc OpenAPI 3","MySQL"
          ]}
          link="https://github.com/tarciana23/todo-list.git"
        />
      </div>
    </SecaoTechs>
  );
}
