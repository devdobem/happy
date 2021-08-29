import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-end;
`

export const Image = styled.img`
  align-self: flex-end;

  /* MOBILE */
  @media screen and (max-width: 480px) {
    margin-top: 20px;

    max-width: fit-content;
  }
`
