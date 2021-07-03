import styled from "styled-components"; 

export const Section=styled.section`
    display:flex;
    flex-direction: column;
    background-color: ${props => props.theme.pageBackground};
`;

export const Container=styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(23rem, 28rem));
    gap: 4rem;
    justify-content: center;
    padding: 0 2rem;
`;