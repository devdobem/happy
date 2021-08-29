import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  padding: 40px 0;
  padding-left: 40px;

  @media screen and (max-width: 900px) {
    align-items: flex-start;
    flex-direction: column-reverse;

    padding-left: 0;
  }
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Image = styled.img`
  height: 200px;

  margin-top: 80px;

  @media screen and (max-width: 900px) {
    align-self: center;
  }
`;
