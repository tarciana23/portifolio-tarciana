import styled from "styled-components";
import { Link } from "react-router-dom";

const FooterEstilizado = styled.footer`
  background: radial-gradient(
    circle at bottom right,
    rgba(4, 32, 41, 0.1),
  var(--dark-mode) 60%
  );
  color: var(--light-content);
  padding: 2em 1em 2em 1em;
  text-align: center;

  p {
    text-align: center;
  }
`;

const ListaFooter = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  display: flex;
  justify-content: center;
  gap: 1em;
  flex-wrap: wrap;

  li a {
    text-decoration: none;
    color: var(--light-content);
    font-weight: 500;
    transition: color 0.3s ease, text-decoration 0.3s ease;

    &:hover {
      color: var(--linear-color-third);
      text-decoration: underline;
    }
  }

  @media (max-width: 600px) {
    align-items: center;
    gap: 0.em;
  }
`;

export default function Footer() {
  return (
    <FooterEstilizado>
      <ListaFooter>
        <li>
          <Link to="/">Início</Link>
        </li>
        <li>
          <Link to="/sobre">Sobre Mim</Link>
        </li>
        <li>
          <Link to="/stacks">Stacks</Link>
        </li>
        <li>
          <Link to="/projetos">Projetos</Link>
        </li>
        <li>
          <Link to="/contato">Contato</Link>
        </li>
      </ListaFooter>
      <p>Desenvolvido por Tarciana Oliveira.</p>
    </FooterEstilizado>
  );
}
