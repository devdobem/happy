import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 0 72px;
  height: 129px;
  background: #0656B0;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    padding-top: 20px;
  }
`;

export const Logo = styled.p``;

