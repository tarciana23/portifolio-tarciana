import styled from "styled-components";

const FooterEstilizado = styled.footer`
  color: var(--light-content);
  padding: 1em 2em;
  text-align: center; 
  
  &:hover{

  }

`;


export default function Footer() {
  return (
    <FooterEstilizado>
      <p>Desenvolvido por Tarciana Oliveira.</p>
    </FooterEstilizado>
  );
}
