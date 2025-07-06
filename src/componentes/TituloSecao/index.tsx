import styled from "styled-components";

const H2Estilizado = styled.h2`
    color: var(--solid-heading);
    margin-bottom: 0.5em;
    text-align: left;
`;

interface TituloSecaoInterfcace{
    titulo: string;
}

export default function  TituloSecao({titulo} : TituloSecaoInterfcace){
    return(
        <H2Estilizado>{titulo}</H2Estilizado>
    )
}