import React from 'react';
import { Helmet } from 'react-helmet';

import { Provider, Heading, Subhead } from 'rebass';
import {
  Hero,
  CallToAction /* , ScrollDownIndicator */,
} from 'react-landing-page';
import Mailchimp from 'react-mailchimp-form';
import MailChimpForm from './MailChimpForm';

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
      <Provider>
        <Hero color="black" bg="white">
          <Heading>FireWork</Heading>
          <Subhead>Stop wasting time hiring developers</Subhead>
          <MailChimpForm>
            <Mailchimp
              action="https://gmail.us20.list-manage.com/subscribe/post?u=080e7d76c1af33a59c13126db&amp;id=36a30fa311"
              fields={[
                {
                  name: 'EMAIL',
                  placeholder: 'Your Email',
                  type: 'email',
                  required: true,
                },
              ]}
              messages={messages}
            />
          </MailChimpForm>
          <CallToAction onClick={window.gtag_report_conversion} href="/" mt={3}>
            Connect your issues
          </CallToAction>
          {/* <ScrollDownIndicator /> */}
        </Hero>
      </Provider>
    </div>
  );
};
export default Landing;
