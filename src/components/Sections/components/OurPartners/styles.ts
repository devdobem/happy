import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  max-width: 90vw;
`;

export const Logo = styled.img`
  max-width: 150px;
  max-height: 150px;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    max-width: 100px;
    width: 100px;
  }
`;

export const FlexContainer = styled.div`
  flex-direction: column;
`
export const PartnersContainer = styled.div`
  padding: 20px 0;
  /* MOBILE */
  @media (max-width: 600px) {
    max-width: 90vw;
    width: 90vw;
  }
`
