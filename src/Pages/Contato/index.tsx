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

  p:first-child {
    font-weight: bold;
    margin-bottom: 0.3em;
    color: var(--linear-color-primary);
  }

  p:last-child {
    font-style: italic;
    color: var(--solid-heading);
  }
`;

export function Contato() {
  return (
    <SecaoSobre>
      <p>Entre em contato por: </p>
      <p>tarcianasoliveira23@gmail.com</p>
    </SecaoSobre>
  );
}
