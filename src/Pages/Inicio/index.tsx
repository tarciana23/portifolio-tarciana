import foto from "../../assets/minha_foto.jpg";
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

const ApresentacaoEstilizada = styled.div`
  p {
    font-weight: 700;
    font-size: 3em;
    line-height: 1.2;
    color: var(--font-color-primary);
    word-break: break-word;
    overflow-wrap: anywhere;

    @media (max-width: 768px) {
      font-size: 1.8em;
      max-width: 90vw;
      margin: 2rem 0 0 0;
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

  img {
    width: 21em;
    height: 21em;
    border-radius: 50%;
    display: block;
    background: white;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const ContainerLinks = styled.div`
  display: inline-flex;
  gap: 0.5em;
  flex-wrap: wrap;
  margin-top: 48px;

  @media (max-width: 768px) {
    display: flex;
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

export default function Inicio() {
  return (
    <>
      <SecaoEstilizada>
        <ApresentacaoEstilizada>
          <p>
            Olá!
            <br /> Sou a Tarciana,
            <br /> Desenvolvedora FullStack (Java e React).
          </p>

          <ContainerLinks>
            <LinkEstilizado href="/stacks" delay="0.3s">
              Stacks
            </LinkEstilizado>
            <LinkEstilizado href="/projetos" delay="0.6s">
              Projetos
            </LinkEstilizado>
            <LinkEstilizado href="/contato" delay="0.9s">
              Fale comigo
            </LinkEstilizado>
          </ContainerLinks>
        </ApresentacaoEstilizada>
        <FotoEstilizada>
          <img src={foto} />
        </FotoEstilizada>
      </SecaoEstilizada>
    </>
  );
}
