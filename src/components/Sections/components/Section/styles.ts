import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;

  padding-left: 182px;
  padding-right: 182px;
  box-sizing: border-box;

  @media screen and (min-width: 480px) {
    padding-right: 70px;
    padding-left: 70px;
  }
`

export const ChildrenContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (min-width: 480px) {
    flex-direction: column;
  }
`
