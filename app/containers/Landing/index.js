import React from 'react';
import { Hero, Section, Heading, Subhead } from 'react-landing-page';

import { TextTitle, BoxSection, Container, Services } from './styled';

function Landing() {
  return (
    <div>
      <Hero color="white" bg="#013058" width="100%">
        <Heading fontSize={[5, 6, 7]}>FireWork</Heading>
        <Subhead color="#969b9f">Automated SEO</Subhead>
        <Section width={1}>
          <Container>
            <Services>
              <BoxSection>
                <TextTitle>
                  Ensure your site title and meta-description are set
                </TextTitle>
              </BoxSection>
              <BoxSection>
                <TextTitle>Improve your Site's Search Ranking</TextTitle>
              </BoxSection>
              <BoxSection>
                <TextTitle>
                  Improve your page loading time with server side loading
                </TextTitle>
              </BoxSection>
            </Services>
          </Container>
        </Section>
      </Hero>
    </div>
  );
}

export default Landing;
