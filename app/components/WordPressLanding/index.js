import React from 'react';
import { Helmet } from 'react-helmet';

import { Box, Feature, Flex, Hero, Section } from 'react-landing-page';
import Mailchimp from 'react-mailchimp-form';

import { MailChimpForm, SubSubHeading } from './styles';
import H2 from '../H2';

const WordPressLanding = () => {
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
      <Hero bg="white" bgOpacity={0.5}>
        <Flex flexWrap="wrap" alignItems="center">
          <Box width={800} p={3}>
            <Section
              color="black"
              bg="white"
              heading="FireWork"
              subhead="Quickly solve WordPress issues"
            >
              <SubSubHeading>Get notified when we launch</SubSubHeading>
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
                  description="Simply type in what you need done to your site"
                >
                  Tell us your problem
                </Feature>
                <Feature icon="💰" description="Pay how much you want">
                  Specify how much to pay
                </Feature>
                <Feature icon="👌" description="We guarantee work">
                  Pay when satisfied
                </Feature>
              </Flex>
            </Section>
          </Box>
        </Flex>
      </Hero>
    </div>
  );
};
export default WordPressLanding;
