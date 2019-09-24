import React from 'react';
import { Helmet } from 'react-helmet';

import { Provider, Heading, Subhead } from 'rebass';
import { Hero, CallToAction, ScrollDownIndicator } from 'react-landing-page';
import Mailchimp from 'react-mailchimp-form';
import MailChimpForm from './MailChimpForm';

const Landing = () => {
  return (
    <div>
      <Helmet>
        <title>FireWork</title>
        <meta name="description" content="FireWork" />
      </Helmet>
      <Provider>
        <Hero
          color="black"
          bg="white"
          backgroundImage="https://source.unsplash.com/jxaj-UrzQbc/1600x900"
        >
          <Heading>FireWork</Heading>
          <Subhead>Stop wasting time hiring developers</Subhead>
          <MailChimpForm>
            <Mailchimp
              action="https://<YOUR-USER>.us16.list-manage.com/subscribe/post?u=XXXXXXXXXXXXX&amp;id=XXXXXX"
              fields={[
                {
                  name: 'EMAIL',
                  placeholder: 'Email',
                  type: 'email',
                  required: true,
                },
              ]}
              className="mailchimp-form"
            />
          </MailChimpForm>
          <CallToAction href="/getting-started" mt={3}>
            Connect your issues
          </CallToAction>
          <ScrollDownIndicator />
        </Hero>
      </Provider>
    </div>
  );
};
export default Landing;
