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
import Mailchimp from 'react-mailchimp-form';

import { MailChimpForm } from './styles';
import H2 from '../H2';

const Landing = () => {
  const messages = {
    sending: 'Sending...',
    success: 'Thank you for subscribing!',
    error: 'An unexpected internal error has occurred.',
    empty: 'You must enter an e-mail.',
    duplicate: `You're already subscribed`,
    button: 'Subscribe',
  };
  return (
    <div>
      <Helmet>
        <title>FireWork</title>
        <meta name="description" content="FireWork" />
      </Helmet>
      <Hero
        bg="white"
        bgOpacity={0.5}
        backgroundImage="https://unsplash.com/photos/76uCfq8xPYU"
      >
        <Flex flexWrap="wrap" alignItems="center">
          <Box width={800} p={3}>
            <Section
              color="black"
              bg="white"
              heading="FireWork"
              subhead="Get work done instead of hiring developers"
            >
              <MailChimpForm>
                <Mailchimp
                  action="https://gmail.us20.list-manage.com/subscribe/post?u=080e7d76c1af33a59c13126db&amp;id=36a30fa311"
                  fields={[
                    {
                      name: 'EMAIL',
                      placeholder: 'email',
                      type: 'email',
                      required: true,
                    },
                  ]}
                  messages={messages}
                />
              </MailChimpForm>
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
export default Landing;
