import Carousel from 're-carousel'

import { Section } from '../Section'

import { RegularText } from '../../../Typography/components/RegularText'

import {
  AngledContainer,
  Container,
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
  return (
    <AngledContainer>
      <Container>
        <Section title='Nosso time' hasUnderline>
          <PeopleContainer>
            <Carousel>
              {team.map(({ image, name, role }) => (
                <PersonContainer>
                  <PersonImage src={image} />
                  <PersonName>{name}</PersonName>
                  <PersonRole>{role}</PersonRole>
                </PersonContainer>
              ))}
            </Carousel>
          </PeopleContainer>
        </Section>
      </Container>
    </AngledContainer>
  )
}
