'use client';


import IndependentTab from '@/components/Tabs/IndependentTab';
import PlatinumTab from '@/components/Tabs/PlatinumTab';
import ProTab from '@/components/Tabs/ProTab';
import Tab from '@/components/Tabs/Tab';
import React from 'react';
 // Adjust the path

const SubscriptionPage: React.FC = () => {
  const tabs = [
    { label: 'Independent', content: <IndependentTab /> },
    { label: 'Pro', content: <ProTab /> },
    { label: 'Platinum', content: <PlatinumTab /> },
  ];

  return (
    <div className="max-w-6xl bg-[#F1F5F9] mx-auto p-6">
        <div className='flex justify-between'>
      {/* Page Header */}
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Your Subscription</h1>

      {/* Tab Component */}
      <Tab tabs={tabs} />
      </div>

      

      
    </div>
  );
};

export default SubscriptionPage;