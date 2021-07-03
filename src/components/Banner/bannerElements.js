import styled from 'styled-components';

export const BannerContainer=styled.div`
  max-width: 100%;
  flex-grow: 1;

  @media screen and (max-width:768px){
    display:none;
  }
`;

export const BannerImage=styled.img`
  height: 33rem;
  display: flex;
  overflow: hidden;
  width: 100%;
`