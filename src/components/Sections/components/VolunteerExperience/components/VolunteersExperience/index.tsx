/**
 * Styles.
 */
import { Container } from './styles';
import { Section } from '../../../Section';
import { VolunteerContainer } from '../VolunteerContainer';
import { useState } from 'react';

/**
 * Type definitions.
 */
export interface IVolunteer {
  name: string;
  image_url: string;
  quote: string;
}
/**
 * Component.
 */


export function VolunteersExperience() {
  const [volunteers, setVolunteers] = useState<IVolunteer[]>([
    {
      name: "Pedro Leite 1",
      image_url: "https://media-exp1.licdn.com/dms/image/C4D03AQGGw0UpAHrDvA/profile-displayphoto-shrink_200_200/0/1595105611809?e=1618444800&v=beta&t=0sXCPBInFVyw5BTY0SsizsILSAnQxt1L6vaXQ11g7w0",
      quote: "Comi o cu de quem ta lendo Comi o cu de quem ta lendo Comi o cu de quem ta lendo Comi o cu de quem ta lendo Comi o cu de quem ta lendo Comi o cu de quem ta lendo Comi o cu de quem ta lendo Comi o cu de quem ta lendo Comi o cu de quem ta lendo Comi o cu de quem ta lendo"
    },
    {
      name: "Pedro Leite 2",
      image_url: "https://media-exp1.licdn.com/dms/image/C4D03AQGGw0UpAHrDvA/profile-displayphoto-shrink_200_200/0/1595105611809?e=1618444800&v=beta&t=0sXCPBInFVyw5BTY0SsizsILSAnQxt1L6vaXQ11g7w0",
      quote: "Comi o cu de quem ta lendo Comi o cu de quem ta lendo Comi o cu de quem ta lendo Comi o cu de quem ta lendo Comi o cu de quem ta lendo Comi o cu de quem ta lendo Comi o cu de quem ta lendo Comi o cu de quem ta lendo Comi o cu de quem ta lendo Comi o cu de quem ta lendo"
    },
    {
      name: "Pedro Leite 3",
      image_url: "https://media-exp1.licdn.com/dms/image/C4D03AQGGw0UpAHrDvA/profile-displayphoto-shrink_200_200/0/1595105611809?e=1618444800&v=beta&t=0sXCPBInFVyw5BTY0SsizsILSAnQxt1L6vaXQ11g7w0",
      quote: "Comi o cu de quem ta lendo Comi o cu de quem ta lendo Comi o cu de quem ta lendo Comi o cu de quem ta lendo Comi o cu de quem ta lendo Comi o cu de quem ta lendo Comi o cu de quem ta lendo Comi o cu de quem ta lendo Comi o cu de quem ta lendo Comi o cu de quem ta lendo"
    }
  ])

  return (
    <Section title="Experiência dos nossos voluntários" hasUnderline>
      <Container>
        {
          volunteers.map((volunteer) => {
            <VolunteerContainer
              key={volunteer.name}
              name={volunteer.name}
              image_url={volunteer.image_url}
              quote={volunteer.quote}
            />
          })
        }
      </Container>
    </Section>
  );
}
