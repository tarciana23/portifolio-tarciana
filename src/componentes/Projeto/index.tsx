import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

const SectionProjeto = styled.div`
  width: 17rem;
  height: 15rem;
  text-align: justify;
  background-color: var(--box-content);
  color: var(--light-content);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  margin: 1rem 0;
  overflow: auto;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &::-webkit-scrollbar {
    width: 1px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--dark-mode);
    border-radius: 10px;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }

  h4 {
    font-size: 1.5rem;
    color: var(--linear-color-primary);
    margin-bottom: 0.5rem;
    text-align: center;

    a{
        text-decoration: none;
        color: var(--linear-color-primary);
    }
  }

  p {
    margin-bottom: 0.5rem;
    line-height: 1.6;
  }

  p:last-child {
    font-weight: bold;
    color: var(--solid-heading);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    h4 {
      font-size: 1.25rem;
    }
  }
`;

interface ProjetoDados {
  nome: string;
  descricao: string;
  techs: string[];
  link: string;
}

export default function Projeto({
  nome,
  descricao,
  techs,
  link,
}: ProjetoDados) {
  return (
    <SectionProjeto>
      <h4>{nome} <a href={link} target="_blank">
        <FaGithub />
      </a></h4>
      <p>{descricao}</p>
      <p>Techs: {techs.join(", ")}</p>
      
    </SectionProjeto>
  );
}
