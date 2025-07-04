import styled from "styled-components";

const SecaoSobre = styled.section`
  max-width: 900px;
  margin: 0 auto;
  padding: 3em 1em;
  color: var(--subtitle-color);
`;

const Bloco = styled.div`
  margin-bottom: 1.5em;

  h2, h3 {
    color: var(--solid-heading);
    margin-bottom: 0.5em;
  }

  p {
    line-height: 1.6;
    font-size: 1.1em;
  }
`;

const Item = styled.div`
  padding: 0.5em 0;
  margin-bottom: 1em;
  border-bottom: 1px solid var(--box-content);

  p:first-child {
    font-weight: bold;
    margin-bottom: 0.3em;
  }

  p:last-child {
    font-style: italic;
    color: var(--font-color-primary);
  }
`;


export default function SobreMim() {
  return (
    <SecaoSobre>
      <Bloco>
        <h2>Sobre mim</h2>
        <p>
          Sou graduada em Ciência da Computação e atuo como desenvolvedora
          fullstack, com foco em React no front-end e Java no back-end. Tenho
          facilidade em aprender novas tecnologias, sou proativa na resolução de
          problemas e comprometida com a entrega de soluções eficientes,
          escaláveis e de alta qualidade.
        </p>
      </Bloco>

      <Bloco>
        <h3>Experiências</h3>
        <Item>
          <p>Secretaria de Saúde VCA</p>
          <p>Desenvolvedora Web</p>
        </Item>
        <Item>
          <p>Freelancer</p>
          <p>Desenvolvedora Front-End</p>
        </Item>
        <Item>
          <p>DBC Company</p>
          <p>Estagiária Fullstack</p>
        </Item>
        <Item>
          <p>Sicredi</p>
          <p>Desenvolvedora Backend</p>
        </Item>
      </Bloco>

      <Bloco>
        <h3>Educação</h3>
        <Item>
          <p>Ciência da Computação</p>
          <p>Universidade Estadual da Bahia</p>
        </Item>
      </Bloco>
    </SecaoSobre>
  );
}
