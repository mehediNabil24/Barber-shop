import React from 'react';
import SubscriptionCard from './SubscriptionCard';


const ProTab: React.FC = () => {
  return (
    <SubscriptionCard
      planName="Connex Subscription Pro"
      description="Unlock advanced features to grow your business and manage your team more efficiently."
      features={[
        'Unlimited accounts',
        'Shop management',
        'No-show protection',
        'Free text reminders',
        'Font desk kiosk',
        'Reporting dashboard',
        'Waitlist'
      ]}
      price="$29.99/mo"
      discount="$29.99"
      total="$29.99/mo"
    />
  );
};

export default ProTab;