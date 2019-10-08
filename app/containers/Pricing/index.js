import React from 'react';
import { Flex } from 'rebass';
import { CallToAction, PricingTier } from 'react-landing-page';

function Pricing() {
  return (
    <div>
      <Flex justifyContent="space-around">
        <PricingTier
          bg="silver"
          tierName="Basic"
          price="Free"
          billingType="forever"
          sellingPoints={[
            '🔥 < 1000 page views / day',
            '🔥 Title Optimization',
            '🔥 Description Optimization',
          ]}
        >
          <CallToAction bg="black" width={1} mt="auto">
            Subscribe
          </CallToAction>
        </PricingTier>

        <PricingTier
          bg="green"
          tierName="Basic"
          price="$9"
          billingType="forever"
          sellingPoints={[
            '🔥 > 1000 page views / day',
            '🔥 Title Optimization',
            '🔥 Description Optimization',
          ]}
        >
          <CallToAction bg="black" width={1} mt="auto">
            Subscribe
          </CallToAction>
        </PricingTier>

        <PricingTier
          bg="gold"
          tierName="Pro"
          price="$29"
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
          <CallToAction bg="black" width={1}>
            Subscribe
          </CallToAction>
        </PricingTier>
      </Flex>
    </div>
  );
}

export default Pricing;
