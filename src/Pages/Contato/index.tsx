import { AiOutlineFilePdf } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

import curriculo from "../../assets/Curriculo_tarciana_fullstack.pdf";

import styled from "styled-components";

const SecaoSobre = styled.section`
  max-width: 900px;
  margin: 0 auto;
  padding: 3em 1em;
  color: var(--subtitle-color);

  p {
    text-align: center;
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const PrimeiroTitulo = styled.p`
  font-weight: bold;
  margin-bottom: 0.3em;
  color: var(--linear-color-primary);
  opacity: 0;
  transform: translateX(-20px);
  animation: slideIn 0.6s forwards;

  @keyframes slideIn {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const SegundoTitulo = styled.p`
  font-style: italic;
  color: var(--solid-heading);
  word-break: break-word;
  overflow-wrap: anywhere;
  opacity: 0;
  transform: translateY(10px);
  animation: fadeInUp 0.6s 0.4s forwards;

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ListaContado = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 1em;
  padding: 1em 0;
  opacity: 0;
  transform: scale(0.95);
  animation: fadeInScale 0.6s 0.8s forwards;

  @keyframes fadeInScale {
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 1em;
    padding: 1em 0;
    color: var(--solid-heading);
  }

  li {
    list-style-type: none;
    display: flex;
    align-items: center;
    gap: 0.5em;

    cursor: pointer;
    position: relative;
    font-weight: 500;
    transition: color 0.3s;

    &::after {
      content: "";
      position: absolute;
      bottom: -3px;
      left: 0;
      width: 0%;
      height: 2px;
      background: var(--linear-color-third);
      transition: width 0.3s ease-in-out;
    }

    &:hover {
      color: var(--linear-color-third);
    }

    &:hover::after {
      width: 100%;
    }

    svg {
      transition: transform 0.3s ease;
    }

    &:hover svg {
      transform: scale(1.1);
      color: var(--linear-color-third);
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.2em;

    li {
      font-size: 1.1rem;
    }

    svg {
      width: 22px;
      height: 22px;
    }
  }
`;

export function Contato() {
  return (
    <SecaoSobre>
      <PrimeiroTitulo>Entre em contato!</PrimeiroTitulo>
      <SegundoTitulo>tarcianasoliveira23@gmail.com</SegundoTitulo>
      <ListaContado>
        <li>
          <a 
            href={curriculo} 
            download="Curriculo_Tarciana_Fullstack.pdf"
          >
            Meu currículo : <AiOutlineFilePdf size={24} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/tarciana-souza-oliveira-72127021a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Meu linkedin: <CiLinkedin size={24} />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/tarciana23"
            target="_blank"
            rel="noopener noreferrer"
          >
            Meu GitHub: <FaGithub size={24} />
          </a>
        </li>
      </ListaContado>
    </SecaoSobre>
  );
}
