import Carousel, { ResponsiveType } from 'react-multi-carousel'

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
  /**
   * Corousel configurations.
   */
  const responsive: ResponsiveType = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
      partialVisibilityGutter: 40
    },
    desktop: {
      breakpoint: { max: 3000, min: 1300 },
      items: 2,
      partialVisibilityGutter: 200
    },
    smallDesktop: {
      breakpoint: { max: 1300, min: 1050 },
      items: 2,
      partialVisibilityGutter: 100
    },
    tablet: {
      breakpoint: { max: 1050, min: 950 },
      items: 2,
      partialVisibilityGutter: 20
    },
    smallTablet: {
      breakpoint: { max: 950, min: 720 },
      items: 1,
      partialVisibilityGutter: 200
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
      partialVisibilityGutter: 0
    }
  }

  return (
    <Section hasPaddingRight={false} sectionId="voluntarios" title="Experiência dos nossos voluntários" hasUnderline>
      <Container>
        <Carousel
          swipeable
          showDots
          infinite
          partialVisible
          responsive={responsive}
        >
          <VolunteerContainer
            key={"Pedro"}
            name={"Pedro 1"}
            image_url={"https://media-exp1.licdn.com/dms/image/C4D03AQGGw0UpAHrDvA/profile-displayphoto-shrink_200_200/0/1595105611809?e=1634774400&v=beta&t=tI2U-VCW4UWm_famO5okd3_6EInaSPCfvkX9xSxhzDY"}
            quote={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
          />
          <VolunteerContainer
            key={"Pedro"}
            name={"Pedro 2"}
            image_url={"https://media-exp1.licdn.com/dms/image/C4D03AQGGw0UpAHrDvA/profile-displayphoto-shrink_200_200/0/1595105611809?e=1634774400&v=beta&t=tI2U-VCW4UWm_famO5okd3_6EInaSPCfvkX9xSxhzDY"}
            quote={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
          />
          <VolunteerContainer
            key={"Pedro"}
            name={"Pedro 3"}
            image_url={"https://media-exp1.licdn.com/dms/image/C4D03AQGGw0UpAHrDvA/profile-displayphoto-shrink_200_200/0/1595105611809?e=1634774400&v=beta&t=tI2U-VCW4UWm_famO5okd3_6EInaSPCfvkX9xSxhzDY"}
            quote={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
          />
        </Carousel>
      </Container>
    </Section>
  );
}
