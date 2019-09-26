import React from 'react';
import { Helmet } from 'react-helmet';

import {
  Box,
  Feature,
  Flex,
  Hero,
  CallToAction,
  Section,
} from 'react-landing-page';

import { MailChimpStyles } from '../MailChimpForm/styles';
import H2 from '../H2';
import { MailChimpForm } from '../MailChimpForm/index';

const WordPressLanding = () => {
  const isMainMailChimpGroup = false;
  return (
    <div>
      <Helmet>
        <title>FireWork</title>
        <meta name="description" content="FireWork" />
      </Helmet>
      <Hero bg="white" bgOpacity={0.5}>
        <Flex flexWrap="wrap" alignItems="center">
          <Box width={800} p={3}>
            <Section
              color="black"
              bg="white"
              heading="FireWork"
              subhead="Get work done instead of hiring developers"
            >
              <MailChimpStyles>
                <MailChimpForm isMainMailChimpGroup={isMainMailChimpGroup} />
              </MailChimpStyles>
              <H2 textalign="center">How does it work?</H2>
              <Flex flexWrap="wrap" justifyContent="center">
                <Feature
                  icon="🗒"
                  description="Connect your tasks with our API through Github or Jira"
                >
                  Connect your tasks
                </Feature>
                <Feature icon="💰" description="You pay how much you want">
                  Prepay for each task
                </Feature>
                <Feature
                  icon="👌"
                  description="Tests and review show when task is complete"
                >
                  Code is tested
                </Feature>
              </Flex>
              <Flex mt={3} flexWrap="wrap" justifyContent="center">
                <CallToAction
                  onClick={window.gtag_report_conversion}
                  href="/"
                  mt={3}
                >
                  Connect your tasks
                </CallToAction>
              </Flex>
            </Section>
          </Box>
        </Flex>
      </Hero>
    </div>
  );
};
export default WordPressLanding;
