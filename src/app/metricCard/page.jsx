'use client';

import React from 'react';
import MetricCard from '@/components/MetricCard/MetricCard';





const MetricPage = () => {
  const metrics = [
    {
      label: 'Total Booking',
      value: '1,200',
      percentageChange: '+2%',
      isPositiveChange: true,
    },
    {
      label: 'Total Service',
      value: '$14,795',
      percentageChange: '+2%',
      isPositiveChange: true,
    },
    {
      label: 'Order Cancel',
      value: '2,845',
      percentageChange: '-14%',
      isPositiveChange: false,
    },
    {
      label: 'Total Earnings',
      value: '$14,795',
      percentageChange: '+2%',
      isPositiveChange: true,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>
    </div>
  );
};

export default MetricPage;