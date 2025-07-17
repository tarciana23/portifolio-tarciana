import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../../assets/logo.svg";

const HeaderEstilizado = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2em 4em;
  position: relative;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 2em 2em;
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
    position: relative;
    list-style-type: none;
    font-size: 1.2rem;
  }

  a {
    color: var(--light-content);
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: var(--linear-color-primary);
    }

    &::after {
      content: attr(data-tooltip);
      position: absolute;
      bottom: -1.8em;
      left: 50%;
      transform: translateX(-50%);
      background-color: var(--font-color-primary);
      color: white;
      padding: 0.3em 0.6em;
      border-radius: 0.3em;
      font-size: 0.8rem;
      white-space: nowrap;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s ease;
    }

    &:hover::after {
      opacity: 1;
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

    &::after {
      display: none;
    }
  }
`;

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <HeaderEstilizado>
      <Link to="/">
        {" "}
        <img src={logo} alt="Logo" />
      </Link>

      <BotaoMenu onClick={() => setMenuAberto(!menuAberto)}>
        {menuAberto ? <FiX /> : <FiMenu />}
      </BotaoMenu>

      <ListaEstilizada aberto={menuAberto}>
        <li>
          <Link to="/" onClick={() => setMenuAberto(false)}>
            Início
          </Link>
        </li>
        <li>
          <Link to="/sobre" onClick={() => setMenuAberto(false)}>
            Sobre Mim
          </Link>
        </li>
        <li>
          <Link to="/stacks" onClick={() => setMenuAberto(false)}>
            Stacks
          </Link>
        </li>
        <li>
          <Link to="/projetos" onClick={() => setMenuAberto(false)}>
            Projetos
          </Link>
        </li>
        <li>
          <Link to="/contato" onClick={() => setMenuAberto(false)}>
            Contato
          </Link>
        </li>
      </ListaEstilizada>
    </HeaderEstilizado>
  );
}
