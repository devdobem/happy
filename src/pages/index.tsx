import { ReactNode } from 'react'
import styled from 'styled-components'

/**
 * Component.
 */
export default function Home() {
  return (
    <>
      <Section>
        <FullLogo />
        <Menu />
        <PageTitle
          title="Health awareness promotion program by the youth"
          slogan="Levar a atenção em saúde para aqueles que precisam no Brasil e no mundo"
        />
      </Section>

      <Section>
        <SectionTitle>Nossa história</SectionTitle>
        <Text>
          No bairro El Maadi, no Cairo, em janeiro de 2020, com o projeto The
          Good Shepherd School’s Health Awareness Course. Uma escola de
          refugiados, para e por refugiados, majoritariamente do Sudão do Sul e
          da Síria. Nosso presidente, Bruno Meneghessi, chegou à escola com a
          premissa de dar aula de inglês para os alunos, o que logo percebeu ser
          um desperdício de tempo para aquela situação. Toda a escola funciona
          100% em inglês e eles possuíam uma vasta carga horária de gramática
          inglesa, muito maior que o efeito que poderia ser obtido em cinco
          semanas apenas. Pensando na melhor forma de ter algum impacto positivo
          com seu trabalho, conversou com a coordenação da escola sobre a
          possibilidade de realizar um curso de atenção em saúde com os jovens,
          que foi muito bem recebido.
        </Text>
      </Section>

      <Section>
        <SectionTitle>Nosso time</SectionTitle>
        <MembersList>
          <Member name="Marcel Zanluca" position="CTO" />
          <Member name="Marcel Zanluca" position="CTO" />
          <Member name="Marcel Zanluca" position="CTO" />
          <Member name="Marcel Zanluca" position="CTO" />
          <Member name="Marcel Zanluca" position="CTO" />
          <Member name="Marcel Zanluca" position="CTO" />
          <Member name="Marcel Zanluca" position="CTO" />
          <Member name="Marcel Zanluca" position="CTO" />
        </MembersList>
      </Section>

      <Section>
        <SectionTitle>Nossos projetos</SectionTitle>
      </Section>
    </>
  )
}

/**
 * Others components.
 */

function FullLogo() {
  return <img src="/images/logo-full.png" alt="Happy logo" />
}

const SectionContainer = styled.div``

type SectionProps = { children: ReactNode }
function Section({ children }: SectionProps) {
  return <SectionContainer>{children}</SectionContainer>
}

type PageTitleProps = { title: string; slogan: string }
function PageTitle({
  title = 'No title yet!',
  slogan = 'No slogan yet!'
}: PageTitleProps) {
  return (
    <>
      <h1>{title}</h1>
      <h2>{slogan}</h2>
    </>
  )
}

function Menu() {
  return (
    <nav>
      <ul>
        <li>Início</li>
        <li>Sobre</li>
        <li>Projetos</li>
        <li>Contribua</li>
        <li>Contato</li>
      </ul>
    </nav>
  )
}

type SectionTitleProps = { children: ReactNode }
function SectionTitle({ children }: SectionTitleProps) {
  return <h3>{children}</h3>
}

type TextProps = { children: ReactNode }
function Text({ children }: TextProps) {
  return <p>{children}</p>
}

type MembersProps = { children: ReactNode }
function MembersList({ children }: MembersProps) {
  return <div>{children}</div>
}

type MemberProps = { name: string; position: string }
function Member({
  name = 'No name yet!',
  position = 'No position yet!'
}: MemberProps) {
  return (
    <div>
      <span>{name}</span>
      <span>{position}</span>
    </div>
  )
}
