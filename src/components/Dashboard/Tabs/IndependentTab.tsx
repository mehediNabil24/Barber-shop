import React from 'react';
import SubscriptionCard from './SubscriptionCard';
// import SubscriptionCard from './SubscriptionCard';

const IndependentTab: React.FC = () => {
  return (
    <SubscriptionCard
      planName="Connex Subscription Independent"
      description="Simplify the everyday, so you can dive into what you love — creating, connecting, and inspiring your community."
      features={[
        'Individual account',
        'Schedule & client management',
        'Text reminders Free',
        'Your own calendar',
      ]}
      price="$29.99/mo"
      discount="$29.99"
      total="$29.99/mo"
    />
  );
};

export default IndependentTab;