import styled from 'styled-components'

export const Container = styled.div`
  width: 520px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media(max-width: 600px) {
  height: 400px;
  width: 300px;
  }
`

export const Title = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  color: #0D133D;
`

export const Picture = styled.img`
  @media(max-width: 600px) {
  width: 400px;
}
`

export const Text = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  color: #0D133D;
`
