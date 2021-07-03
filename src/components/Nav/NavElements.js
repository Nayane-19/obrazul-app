import styled from 'styled-components';


export const NavContent=styled.div`
    display:flex;
    flex-direction: row;
    padding: 0 4rem;
    background: #1a62d6;
    max-heigth: 5rem;
    place-content: space-between;
    gap: 2rem;

    @media screen and (max-width: 768px){
        display: flex;
        flex-direction: column;
        padding: 2rem;
        align-items: center;
        justify-content: center;
    }
`

export const Image=styled.img`
    width:250px;
`

export const Paragraph=styled.p`
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white);
    font-family: 'Montserrat Alternates', sans-serif;

    @media screen and (max-width: 768px){
        text-align: center;
    }
`;


export const ButtonTheme=styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
`

export const Toggle=styled.button`
    cursor: pointer;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    border: none;
    color: ${props => props.theme.titleColor};
    &:focus {
        outline: none;
    }
    transition: all .5s ease;
`;