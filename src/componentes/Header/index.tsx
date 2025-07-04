import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import styled from "styled-components";
import logo from "../../assets/logo.svg"
import { Link } from "react-router-dom";

const HeaderEstilizado = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 2em;
`;

const ListaEstilizada = styled.ul`
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

`;

export default function Header() {
  return (
    <HeaderEstilizado>
      <img src={logo}/>
      <ListaEstilizada>
        <li>
          <Link to="/">Início</Link>
        </li>
        <li>
          <Link to="/sobre">Sobre Mim</Link>
        </li>
        <li>
          <Link to="/techs">Techs</Link>
        </li>
        <li>
          <Link to="/projetos">Projetos</Link>
        </li>
        <li>
          <a href="#">Contato</a>
        </li>
      </ListaEstilizada>
      <ListaEstilizada>
        <li>
          <a href="https://github.com/tarciana23" target="_blank">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="mailto:tarcianasoliveira23@gmail.com">
            <MdEmail />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/tarciana-souza-oliveira-72127021a/">
            <FaLinkedin />
          </a>
        </li>
      </ListaEstilizada>
    </HeaderEstilizado>
  );
}
