import { Section } from '../Section'
import { RegularText } from '../../../Typography/components/RegularText'

import { Image, Container } from './styles'

export function OurHistory () {
  return (
    <Container>
      <Image src="/images/our-history.png" />

      <Section sectionId="historia" title='Nossa história' paddingTop={60}>
        <RegularText text={`Nosso projeto nasceu no bairro El Maadi, no Cairo, em janeiro de 2020, na The Good Shepherd School - uma escola de refugiados, para e por refugiados, majoritariamente do Sudão do Sul e da Síria. Nosso presidente, Bruno Meneghessi, aplicou um curso de atenção em saúde e montou um material para que os professores mantivessem o ensino de temas como higiene pessoal e prevenção de doenças para os alunos.

Agora, com uma equipe muito mais capacitada e com mais experiência, continuamos, no Brasil, o projeto de levar educação em saúde para populações em situação de vulnerabilidade. Acreditamos no poder da educação como ferramenta e, acima de tudo, acreditamos que a ação é a única opção.
`}
        />
      </Section>
    </Container>
  )
}
