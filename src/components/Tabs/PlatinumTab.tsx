import React from 'react';
import SubscriptionCard from './SubscriptionCard';
// import SubscriptionCard from './SubscriptionCard';

const PlatinumTab: React.FC = () => {
  return (
    <SubscriptionCard
      planName="Connex Subscription Platinum"
      description="The ultimate plan for large teams, with premium features to scale your operations."
      features={[
        'Includes everything in PRO plus',
        'Unlimited email & text massage marketing',
        'Branded web page',
        'In-store product sales and inventory',
       
      ]}
      price="$29.99/mo"
      discount="$29.99"
      total="$29.99/mo"
    />
  );
};

export default PlatinumTab;