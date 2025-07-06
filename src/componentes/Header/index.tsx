import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../../assets/logo.svg"

const HeaderEstilizado = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 2em;
  position: relative;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const BotaoMenu = styled.button`
  display: none;
  background: none;
  border: none;
  color: var(--light-content);
  font-size: 2rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 1.2em;
    right: 2em;
  }
`;

const ListaEstilizada = styled.ul<{ aberto?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;

  li {
    list-style-type: none;
  }

  a {
    text-decoration: none;
    color: var(--light-content);
    transition: 0.3s ease-in-out;

    &:hover {
      background-image: linear-gradient(
        90deg,
        var(--linear-color-primary),
        var(--linear-color-secondary)
      );
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      -webkit-text-fill-color: transparent;
    }

    svg {
      width: 1.5em;
      height: 1.5em;
      fill: var(--light-content);
      transition: 0.3s ease-in-out;
    }
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    flex-direction: column;
    width: 100%;
    background-color: var(--background-color);
    padding: 1em 0;
    display: ${({ aberto }) => (aberto ? "flex" : "none")};
  }
`;

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <HeaderEstilizado>
      <img src={logo} alt="Logo" />

      <BotaoMenu onClick={() => setMenuAberto(!menuAberto)}>
        {menuAberto ? <FiX /> : <FiMenu />}
      </BotaoMenu>

      <ListaEstilizada aberto={menuAberto}>
        <li>
          <Link to="/" onClick={() => setMenuAberto(false)}>Início</Link>
        </li>
        <li>
          <Link to="/sobre" onClick={() => setMenuAberto(false)}>Sobre Mim</Link>
        </li>
        <li>
          <Link to="/techs" onClick={() => setMenuAberto(false)}>Techs</Link>
        </li>
        <li>
          <Link to="/projetos" onClick={() => setMenuAberto(false)}>Projetos</Link>
        </li>
        <li>
          <Link to="/contato" onClick={() => setMenuAberto(false)}>Contato</Link>
        </li>
      </ListaEstilizada>

      <ListaEstilizada aberto={menuAberto}>
        <li>
          <a href="https://github.com/tarciana23" target="_blank">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="mailto:tarcianasoliveira23@gmail.com" target="_blank">
            <MdEmail />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/tarciana-souza-oliveira-72127021a/" target="_blank">
            <FaLinkedin />
          </a>
        </li>
      </ListaEstilizada>
    </HeaderEstilizado>
  );
}
