'use client';

import React from 'react';
import ActivityCard from '@/components/Recent-Activity/Activity'; // Keep the import path as provided

// Define the activity data interface (matches ActivityCardProps)
interface Activity {
  type: 'profile' | 'booking' | 'payment' | 'cancellation';
  description: string;
  time: string;
}

const RecentActivity: React.FC = () => {
  const activities: Activity[] = [
    {
      type: 'profile',
      description: 'Alberto Cortez updated his profile and added a new payment method',
      time: '9:30 AM',
    },
    {
      type: 'booking',
      description: 'Camellia Swan booked The Venice Dreams package for June 25, 2024.',
      time: '10:00 AM',
    },
    {
      type: 'payment',
      description: "Payment was processed for Ludwig Contessa's Alpine Escape package.",
      time: '11:15 AM',
    },
    {
      type: 'cancellation',
      description: 'Armina Raul Meyes canceled her Caribbean Cruise package.',
      time: '12:45 PM',
    },
    {
      type: 'cancellation',
      description: 'Armina Raul Meyes canceled her Caribbean Cruise package.',
      time: '12:45 PM',
    },
  ];

  return (
    <div className="max-w-md mx-auto p-6">
      {/* Header */}
      <h2 className="text-lg font-semibold text-gray-800 mb-2">Recent Activity</h2>
      {/* Subheader */}
      <h3 className="text-sm font-medium text-gray-500 mb-4">Today</h3>
      {/* Activity Cards */}
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <ActivityCard key={index} {...activity} />
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;