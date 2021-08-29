import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;

  @media screen and (max-width: 1000px) {
    flex-direction: column-reverse;

    margin-bottom: 50px;
  }
`

export const Image = styled.img`
  width: 35vw;
  height: 31.5vw;

  margin-right: 1.5vw;

  @media screen and (max-width: 1000px) {
    align-self: flex-start;
    width: 600px;
    object-fit: cover;
    height: 500px;
  }

  @media screen and (max-width: 600px) {
    width: 400px;
    object-fit: cover;
    height: 320px;
  }
`
