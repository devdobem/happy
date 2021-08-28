// import { HeartFill } from 'styled-icons/bootstrap'

// import BasicMeta from "../components/meta/BasicMeta";
// import OpenGraphMeta from "../components/meta/OpenGraphMeta";
// import TwitterCardMeta from "../components/meta/TwitterCardMeta";

// import { Button } from '../components/Form/components/Button'
// import { Xpto as Icon } from '../components/Icon/components/Icon'
// import { RegularText } from '../components/Typography/components/RegularText'
// import { SectionTitle } from '../components/Typography/components/Title'
// import { Section } from '../components/Sections/components/Section'
import { Footer } from '../components/Footer/components/Footer'
import { Page } from '../components/Page/components/Page'
import { VolunteersExperience } from '../components/Sections/components/VolunteerExperience/components/VolunteersExperience';
import { OurPartners } from '../components/Sections/components/OurPartners'

import { Introduction } from '../components/Sections/components/Introduction'
import { OurHistory } from '../components/Sections/components/OurHistory'
import { OurTeam } from '../components/Sections/components/OurTeam'
import { OurProjects } from '../components/Sections/components/OurProjects'
import { WantToBeVolunteer } from '../components/Sections/components/WantToBeVolunteer'
import { Contact } from '../components/Sections/components/Contact'
import { Contribute } from '../components/Sections/components/Contribute'

export default function Index() {
  return (
    <Page>
      <Introduction />
      <OurHistory />
      <OurTeam />
      <OurProjects />
      <Contribute />
      <OurPartners />
      <VolunteersExperience />
      <WantToBeVolunteer />
      <Contact />
      <Footer />
    </Page>
  );
}
