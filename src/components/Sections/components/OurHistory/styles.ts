import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
`

export const Image = styled.img`
  width: 35vw;
  height: 31.5vw;

  margin-right: 1.5vw;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`
