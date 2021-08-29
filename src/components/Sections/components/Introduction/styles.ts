import styled from 'styled-components'

export const Section = styled.section`
  max-height: 100vh;
  height: 100vh;

  display: flex;

  /* MOBILE */
  background-image: url(/images/bellowbanner.png);
  background-repeat: no-repeat;
  background-position: bottom right;
  background-size: contain;
  background-size: 420px;


  /* DESKTOP */
  @media (min-width: 600px) {
    height: 100vh;
    background-image: url(/images/banner.png);
    background-repeat: no-repeat;
    background-position: top right;
    background-size: contain;
  }
`

export const Header = styled.div`
  top: 0;
  position: absolute;

  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  max-width: 100vw;
  width: 100vw;
  height: 100px;
  max-height: 100px;
`

export const ColoredLogo = styled.img`
  width: 200px;
  margin-top: 20px;
  margin-left: 80px;

  @media (max-width: 600px) {
    width: 250px;
    margin-left: 20px;
  }
`

export const OrgName = styled.h1`
  font-weight: 700;
  font-size: 48px;
  color: #0656B0;

  line-height: 0;

  ::first-letter {
    color: #83BF04;
  }

  max-width: 800px;

  @media screen and (max-width: 480px) {
    height: fit-content;
    line-height: 1;
    margin-bottom: -10px
  }
`

export const OrgTextsContainer = styled.div`
  height: calc(100vh - 100px);

  align-self: flex-end;

  display: flex;

  justify-content: center;
  flex-direction: column;

  padding: 0 80px;
  @media (max-width: 600px) {
    padding: 0 20px;
  }
`

export const OrgSlogan = styled.h2`
  font-weight: 300;
  width: 40vw;

  @media screen and (max-width: 480px) {
    height: fit-content;

    width: 80vw;
    justify-self: flex-end;
  }
`
