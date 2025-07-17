import { Link } from "react-router-dom";
import foto from "../../assets/minha_foto.png";
import styled, { keyframes } from "styled-components";

const SecaoEstilizada = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em 4em;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1em 2em;
  }
`;

const Destaque = styled.span`
  background: linear-gradient(90deg, #00c0fd, #f80ab4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
`;

const ApresentacaoEstilizada = styled.div`
  p {
    font-weight: 700;
    font-size: 3em;
    line-height: 1.2;
    color: var(--font-color-primary);
    overflow-wrap: normal;
    word-break: normal;
    white-space: normal;

    @media (max-width: 768px) {
      font-size: 1.8em;
      max-width: 90vw;
      margin: 2em 2em;
      text-align: center;
    }
  }
`;

const FotoEstilizada = styled.div`
  background: linear-gradient(
    90deg,
    var(--linear-color-primary),
    var(--linear-color-secondary)
  );
  padding: 10px;
  border-radius: 50%;
  display: inline-block;
  animation: pulseGlow 4s ease-in-out infinite;

  img {
    width: 21em;
    height: 21em;
    border-radius: 50%;
    display: block;
  }

  @keyframes pulseGlow {
    0% {
      box-shadow: 0 0 8px rgba(255, 255, 255, 0.1);
    }
    50% {
      box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
    }
    100% {
      box-shadow: 0 0 8px rgba(255, 255, 255, 0.1);
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;


export const ContainerLinks = styled.div`
  display: inline-flex;
  gap: 0.5em;
  flex-wrap: wrap;
  margin-top: 48px;

  @media (max-width: 768px) {
    display: none;
    flex-direction: column;
    align-items: center;
  }
`;

const fadeZoom = keyframes`
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

interface LinkProps {
  delay?: string;
}

export const LinkEstilizado = styled.a<LinkProps>`
  display: inline-block;
  font-size: 1.5em;
  font-weight: bold;
  color: var(--linear-color-third);
  text-decoration: none;
  cursor: pointer;
  position: relative;

  opacity: 0;
  transform: scale(0.95);
  animation: ${fadeZoom} 0.8s ease forwards;
  animation-delay: ${(props) => props.delay || "0s"};

  &:hover {
    color: var(--solid-heading);
    transform: scale(1.02);
    transition: transform 0.2s ease;
  }
  &:last-child::after {
    content: "";
    margin: 0;
  }
`;

const LinkSemEstilo = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export default function Inicio() {
  return (
    <>
     <LinkSemEstilo to="/Contato">
      <SecaoEstilizada>
        <ApresentacaoEstilizada>
          <p>
            Olá!
            <br /> Sou a Tarciana,
            <br /> Desenvolvedora FullStack <Destaque>(Java e React)</Destaque>
          </p>
        </ApresentacaoEstilizada>
        <FotoEstilizada>
          <img src={foto} />
        </FotoEstilizada>
      </SecaoEstilizada>
      </LinkSemEstilo>
    </>
  );
}
