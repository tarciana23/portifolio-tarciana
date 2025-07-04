import foto from "../../assets/minha_foto.jpg";
import styled from "styled-components";

const SecaoEstilizada = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1em 2em;
`;

const ApresentacaoEstilizada = styled.div`
  p {
    font-weight: 700;
    font-size: 3em;
    color: var(--font-color-primary);
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
`;

export default function Inicio() {
  return (
    <>
      <SecaoEstilizada>
        <ApresentacaoEstilizada>
          <p>
            Olá,<br></br> Meu nome é Tarciana<br></br> e sou Desenvolvedora
            FullStack
          </p>
        </ApresentacaoEstilizada>
        <FotoEstilizada>
          <img src={foto} />
        </FotoEstilizada>
      </SecaoEstilizada>
    </>
  );
}
