import React from 'react';
import { withRouter } from 'react-router-dom';
import { Flex } from 'rebass';
import { CallToAction, Heading, PricingTier } from 'react-landing-page';
import { PricingWrapper } from './styles';
import './styles.css';

const Pricing = withRouter(({ history }) => (
  <PricingWrapper>
    <Heading
      style={{ marginTop: '50px', marginBottom: '-70px' }}
      textAlign="center"
    >
      Pricing
    </Heading>

    <Flex justifyContent="space-around" padding="7% 5%">
      <PricingTier
        bg="lightgray"
        width={1 / 5}
        className="price-tier"
        tierName="Basic"
        price="Free"
        billingType="forever"
        sellingPoints={[
          '🔥 < 1000 daily page views',
          '🔥 Title Optimization',
          '🔥 Description Optimization',
        ]}
      >
        <CallToAction
          // bg="black"
          width={1}
          className="subscribe-button"
          mt="auto"
          onClick={() => {
            history.push({
              pathname: '/subscribe',
              state: { plan: 'free' },
            });
          }}
        >
          Subscribe
        </CallToAction>
      </PricingTier>

      <PricingTier
        bg="lightgray"
        width={1 / 5}
        className="price-tier"
        tierName="Basic"
        price="$9"
        billingType="Monthly"
        sellingPoints={[
          '🔥 > 1000 daily page views',
          '🔥 Title Optimization',
          '🔥 Description Optimization',
          '‍😌 Priority Support',
        ]}
      >
        <CallToAction
          width={1}
          className="subscribe-button"
          mt="auto"
          onClick={() => {
            history.push({
              pathname: '/subscribe',
              state: { plan: 'basic' },
            });
          }}
        >
          Subscribe
        </CallToAction>
      </PricingTier>

      <PricingTier
        bg="lightgray"
        width={1 / 5}
        className="price-tier"
        tierName="Pro"
        price="$19"
        billingType="Monthly"
        sellingPoints={[
          '🔥 > 1000 daily page views',
          '🔥 Title Optimization',
          '🔥 Description Optimization',
          '‍😌 Priority Support',
        ]}
      >
        <CallToAction
          // bg="black"
          width={1}
          className="subscribe-button"
          onClick={() => {
            history.push({
              pathname: '/subscribe',
              state: { plan: 'pro' },
            });
          }}
        >
          Subscribe
        </CallToAction>
      </PricingTier>
    </Flex>
  </PricingWrapper>
));

export default Pricing;
