import styled from 'styled-components'

export const Section = styled.section`
  height: 100vh;
  @media (min-width: 600px) {
    background-image: url(/images/banner.png);
  }
  background-repeat: no-repeat;
  background-position: top right;
  background-size: contain;
`

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  @media (min-width: 600px) {
    padding: 20px 80px;
  }
`

export const ColoredLogo = styled.img`
  @media (min-width: 600px) {
  width: 150px;
  }
`

export const OrgName = styled.h1`
  position: absolute;
  width: 800px;
  height: 126px;
  padding-left: 65px;
  top: 303px;
  font-weight: 700;
  font-size: 48px;
  color: #0656B0;
`

export const OrgSlogan = styled.h2`
  position: absolute;
  width: 663px;
  height: 74px;
  padding-left: 65px;
  top: 453px;
  font-weight: 300;
`
