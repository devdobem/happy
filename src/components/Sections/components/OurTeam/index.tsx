import { Section } from '../Section'

import Carousel, { ResponsiveType } from 'react-multi-carousel'


import {
  AngledContainer,
  PeopleContainer,
  PersonContainer,
  PersonImage,
  PersonName,
  PersonRole
} from './styles'

export function OurTeam () {
  const team = [
    {
      image: 'https://lh3.googleusercontent.com/ogw/ADGmqu8Hj_Vub3r8m4yI1JyWv7z2of7oIZpPfTau4MMJDw=s32-c-mo',
      name: 'Vinicius Axt',
      role: 'Desenvolvedor'
    },
    {
      image: 'https://lh3.googleusercontent.com/ogw/ADGmqu8Hj_Vub3r8m4yI1JyWv7z2of7oIZpPfTau4MMJDw=s32-c-mo',
      name: 'Vinicius Axt',
      role: 'Desenvolvedor'
    },
    {
      image: 'https://lh3.googleusercontent.com/ogw/ADGmqu8Hj_Vub3r8m4yI1JyWv7z2of7oIZpPfTau4MMJDw=s32-c-mo',
      name: 'Vinicius Axt',
      role: 'Desenvolvedor'
    },
    {
      image: 'https://lh3.googleusercontent.com/ogw/ADGmqu8Hj_Vub3r8m4yI1JyWv7z2of7oIZpPfTau4MMJDw=s32-c-mo',
      name: 'Vinicius Axt',
      role: 'Desenvolvedor'
    },
    {
      image: 'https://lh3.googleusercontent.com/ogw/ADGmqu8Hj_Vub3r8m4yI1JyWv7z2of7oIZpPfTau4MMJDw=s32-c-mo',
      name: 'Vinicius Axt',
      role: 'Desenvolvedor'
    },
    {
      image: 'https://lh3.googleusercontent.com/ogw/ADGmqu8Hj_Vub3r8m4yI1JyWv7z2of7oIZpPfTau4MMJDw=s32-c-mo',
      name: 'Vinicius Axt',
      role: 'Desenvolvedor'
    },
  ]

  /**
   * Corousel configurations.
   */
  const responsive: ResponsiveType = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      partialVisibilityGutter: 40
    },
    desktop: {
      breakpoint: { max: 3000, min: 1300 },
      items: 5,
      partialVisibilityGutter: 40
    },
    smallDesktop: {
      breakpoint: { max: 1300, min: 1200 },
      items: 4,
      partialVisibilityGutter: 40
    },
    tablet: {
      breakpoint: { max: 1200, min: 1090 },
      items: 3,
      partialVisibilityGutter: 40
    },
    smallTablet: {
      breakpoint: { max: 1090, min: 700 },
      items: 3,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 2,
      partialVisibilityGutter: 40
    }
  }

  return (
    <AngledContainer>
        <Section hasPaddingRight={false} sectionId="time" title='Nosso time' hasUnderline>
          <PeopleContainer>
            <Carousel
              swipeable
              showDots
              infinite
              partialVisible
              responsive={responsive}
            >
            {team.map(({ image, name, role }) => (
              <PersonContainer key={name}>
                <PersonImage src={image} />
                <PersonName>{name}</PersonName>
                <PersonRole>{role}</PersonRole>
              </PersonContainer>
            ))}
            </Carousel>
          </PeopleContainer>
        </Section>
    </AngledContainer>
  )
}
