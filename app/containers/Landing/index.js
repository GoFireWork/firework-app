import React from 'react';
import { Hero, Section, Heading, Subhead } from 'react-landing-page';

import PageLoad from '../../images/page-load-time.png';
import PageSpeed from '../../images/pagespeed.png';
import SearchEngine from '../../images/search-rank.png';
import {
  TextTitle,
  BoxSection,
  Image,
  Container,
  Services,
  Wrapper,
} from './styled';

function Landing() {
  return (
    <Wrapper>
      <Hero color="white">
        <Heading fontSize={[5, 6, 7]}>FireWork</Heading>
        <Subhead color="#969b9f">Optimize Your Site</Subhead>
        <Section width={1}>
          <Container>
            <Services>
              <BoxSection>
                <Image>
                  <img src={PageSpeed} alt="Page speed" />
                </Image>
                <TextTitle> Improve Page Speed</TextTitle>
              </BoxSection>
              <BoxSection>
                <Image>
                  <img src={SearchEngine} alt="Search Engine" />
                </Image>
                <TextTitle>Improve Search Rank</TextTitle>
              </BoxSection>
              <BoxSection>
                <Image>
                  <img src={PageLoad} alt="Page Load" />
                </Image>
                <TextTitle>Reduce Page Load Time</TextTitle>
              </BoxSection>
            </Services>
          </Container>
        </Section>
      </Hero>
    </Wrapper>
  );
}

export default Landing;
