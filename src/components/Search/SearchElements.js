import styled from "styled-components"; 
import { FaSearch } from "react-icons/fa";


export const SearchContainer=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const SearchContent=styled.div`
    position: relative;
    width: 400px;
`

export const FormSearch=styled.form`

`;

export const InputSearch=styled.input`
    width: 100%;
    font-size: 2rem;
    padding: 0.8rem;
    color: var(--black);
    border-radius: 6px;
    outline: none;
    border: none;

    path {
        color: var(--deep-dark);
      }
`;

export const FaSearchCustom=styled(FaSearch)`
    position: absolute;
    width: 2rem;
    right: 1rem;
`