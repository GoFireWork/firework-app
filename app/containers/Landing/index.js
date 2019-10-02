import React from 'react';
import { Flex, Link, Text, Box } from 'rebass';
import { Hero, Section, Heading, Subhead } from 'react-landing-page';
import icon from '../../images/icon-512x512.png';
import PageLoad from '../../images/page-load-time.png';
import PageSpeed from '../../images/pagespeed.png';
import SearchEngine from '../../images/search-rank.png';
import { TextTitle, BoxSection, Image, Container, Services } from './styled';
function Landing() {
  return (
    <>
      <Flex
        px={2}
        color="white"
        bg="#0e1730"
        height="80px"
        alignItems="center"
        sx={{
          display: 'flex',
          position: 'fixed',
          top: 0,
          width: '100%',
          overflow: 'hidden',
          zIndex: 999,
        }}
      >
        <Text p={2} fontWeight="bold" color="white">
          <img src={icon} alt="logo" height="20px" /> FireWork
        </Text>
        <Box mx="auto" />
        <Link variant="nav" href="/" color="white">
          Sign in /Join
        </Link>
      </Flex>
      <Hero color="white" bg="#013058" width="100%">
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
    </>
  );
}

export default Landing;
