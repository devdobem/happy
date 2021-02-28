import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  padding: 40px 0;
  padding-left: 40px;

  @media screen and (max-width: 900px) {
    flex-direction: column-reverse;
    align-items: flex-start;
  }
`

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ButtonContainer = styled.div`
  align-self: flex-end;
`

export const Image = styled.img`
  height: 200px;

  @media screen and (max-width: 900px) {
    display: none;
  }
`
