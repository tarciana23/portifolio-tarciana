import styled from "styled-components";

const H2Estilizado = styled.h3`
    color: var(--solid-heading);
    margin-bottom: 0.5em;
`;

interface SubtituloSecaoInterfcace{
    titulo: string;
}

export default function  Subtitulo({titulo}:SubtituloSecaoInterfcace){
    return(
        <H2Estilizado>{titulo}</H2Estilizado>
    )
}