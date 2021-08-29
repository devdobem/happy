import styled from 'styled-components'

export const Container = styled.section`
  max-width: 100vw;

  padding-left: 80px;
  padding-right: ${({ hasPaddingRight }) => hasPaddingRight ? 80 : 0}px;

  box-sizing: border-box;

  margin-top: 100px;

  /* MOBILE */
  @media screen and (max-width: 480px) {
    padding-right: 20px;
    padding-left: 20px;
    margin-top: 80px;

    max-width: fit-content;
  }
`

export const ChildrenContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (min-width: 480px) {
    flex-direction: column;
  }
`
