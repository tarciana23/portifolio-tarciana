import styled from "styled-components";

const H2Estilizado = styled.h2`
 color: var(--linear-color-third);
  opacity: 0;
  transform: translateX(-20px);
  animation: slideIn 0.6s forwards;
  
  @keyframes slideIn {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

interface TituloSecaoInterfcace{
    titulo: string;
}

export default function  TituloSecao({titulo} : TituloSecaoInterfcace){
    return(
        <H2Estilizado>{titulo}</H2Estilizado>
    )
}