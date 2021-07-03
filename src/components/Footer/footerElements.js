import styled from 'styled-components';

export const FooterContainer=styled.div`
    display: flex;
    place-content: space-between;
    padding: 4rem 8rem;
    height: 100%;
    background: #1a62d6;
    align-items: center;
    margin-top: 5rem;
    flex-direction: row-reverse;

    @media screen and (max-width: 768px){
        padding: 4rem 4rem;
    }

`;

export const FooterTop=styled.div`
    cursor:pointer;

    svg {
        width: 4rem;
        background: #fff;
        border-radius: 20%;
        color:#000;
        font-size: 3rem;
    }
`;

export const FooterContent=styled.div`
    display:flex;
    flex-direction:column;
    gap:1rem;

    @media screen and (max-width: 540px){
        display:none;
    }
`


export const SocialIcons = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 5%;
gap: 2rem;
`;

export const SocialIconLink = styled.a`
color:#fff;
font-size: 40px;
margin-bottom: 0.2em;
flex: none;
align-items: center;
display: inline-flex;
justify-content: center;
height: 4rem;
width: 4rem;
font-style: inherit;
font-weight: inherit;


    

:hover {

  text-decoration: none;
}
`;