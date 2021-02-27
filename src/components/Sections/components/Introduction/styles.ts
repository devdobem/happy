import styled from 'styled-components'

export const Section = styled.section`
  height: 100vh;
  background-image: url(/images/banner.png);
  background-repeat: no-repeat;
  background-position: top right;
`

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 80px;
`

export const ColoredLogo = styled.img`
  width: 150px;
`

export const OrgName = styled.h1`
  position: absolute;
  width: 800px;
  height: 126px;
  left: calc(50% - 680px/2 - 234px);
  top: 303px;

  font-weight: 700;
  font-size: 48px;
  color: #0656B0;
`

export const OrgSlogan = styled.h2`
  position: absolute;
  width: 663px;
  height: 74px;
  left: calc(50% - 675px/2 - 235.5px);
  top: 453px;

  font-weight: 300;
`
