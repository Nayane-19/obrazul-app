import styled from 'styled-components';



export const CardContainer=styled.div`
    overflow: hidden;
    box-shadow: 0 2px 20px #e1e5ee;
    border-radius: 1rem;
    border: solid 1px cornflowerblue;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: white;
    transition: transform 200ms ease-in;
    margin-top:6rem;
    :hover {
        transform: scale(1.02);
      }
`;

export const CardBody=styled.div`
`;

export const CardImg=styled.img`
    height: 25rem;
    width: 100%;
    object-fit: cover;
    border-radius: 10%;
`;

export const CardTitle=styled.h2`   
    padding: 2rem 1rem 1rem;
    font-size: 2rem;
`;

export const CardContent=styled.p`
    padding: 1rem; 
    font-size: 1.5rem;
`;

export const CardButton=styled.button`
    padding: 1rem;
    font-family: inherit;
    font-weight: bold;
    font-size: 2rem;
    margin: 1rem;
    border: 2px solid cornflowerblue;
    background: transparent;
    color: cornflowerblue;
    border-radius: 0.2rem;
    transition: background 200ms ease-in, color 200ms ease-in;
    :hover {
    background: cornflowerblue;
    color: var(--black);
  }
`;