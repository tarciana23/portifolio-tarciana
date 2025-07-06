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
    word-break: break-word;
    overflow-wrap: anywhere;
  }

   @media (max-width: 768px) {
    font-size: 1rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
