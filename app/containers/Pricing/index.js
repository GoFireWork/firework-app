import React from 'react';
import { withRouter } from 'react-router-dom';
import { Flex } from 'rebass';
import { CallToAction, PricingTier, Heading } from 'react-landing-page';
import './index.css';

const Pricing = withRouter(({ history }) => (
  <div className="wrapper">
    <Heading className="heading" textAlign="center" align-content="center">
      Our Plans
    </Heading>

    <Flex justifyContent="space-around" padding="7% 5%">
      <PricingTier
        bg="#fff"
        width={1 / 5}
        className="price-tier"
        tierName="Basic"
        price="Free"
        billingType="forever"
        sellingPoints={[
          '🔥 < 1000 page views / day',
          '🔥 Title Optimization',
          '🔥 Description Optimization',
        ]}
      >
        <CallToAction
          bg="black"
          width={1}
          className="subscribe-button"
          mt="auto"
          onClick={() => {
            history.push({
              pathname: '/subscribe',
              state: { detail: 'free' },
            });
          }}
        >
          Subscribe
        </CallToAction>
      </PricingTier>

      <PricingTier
        bg="#fff"
        width={1 / 5}
        className="price-tier"
        tierName="Basic"
        price="$9"
        billingType="Monthly"
        sellingPoints={[
          '🔥 > 1000 page views / day',
          '🔥 Title Optimization',
          '🔥 Description Optimization',
        ]}
      >
        <CallToAction
          bg="black"
          width={1}
          className="subscribe-button"
          mt="auto"
          onClick={() => {
            history.push({
              pathname: '/subscribe',
              state: { detail: 'basic' },
            });
          }}
        >
          Subscribe
        </CallToAction>
      </PricingTier>

      <PricingTier
        bg="#fff"
        width={1 / 5}
        className="price-tier"
        tierName="Pro"
        price="$19"
        billingType="Monthly"
        sellingPoints={[
          '🔥 > 5000 page views / day',
          '🔥 Title Optimization',
          '🔥 Description Optimization',
          '📑 Comprehensive docs',
          '😌 Future updates',
          '👩‍⚖️ Commercial license',
        ]}
      >
        <CallToAction
          bg="black"
          width={1}
          className="subscribe-button"
          onClick={() => {
            history.push({
              pathname: '/subscribe',
              state: { detail: 'pro' },
            });
          }}
        >
          Subscribe
        </CallToAction>
      </PricingTier>
    </Flex>
  </div>
));

export default Pricing;
