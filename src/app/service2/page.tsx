'use client';

import ServiceCard2 from '@/components/Service/ServiceCard2';
// import ServiceList from '@/components/ServiceDetails/ServiceList';
import { div } from 'framer-motion/client';
// import ServiceCard2 from '@/components/Service/ServiceCard2';

import React from 'react';


const ServicesPage = () => {
  const serviceCards = [
    {
      image: '/asset/service2-1.jpg',
      tag: "Hire Cut’s",
      title: "Hire Cut’s",
      participants: ['/asset/person-1.png', '/asset/person-2.png', '/asset/person-3.png'],
      extraCount: 9,
      dateRange: '5 - 10 July',
    },
    {
      image: '/asset/service2-2.jpg',
      tag: 'Massage',
      title: "Hire Cut’s",
      participants: ['/asset/person-1.png', '/asset/person-2.png', '/asset/person-3.png'],
      extraCount: 17,
      dateRange: '12 - 19 July',
      isHighlighted: true,
    },
    {
      image: '/asset/service2-3.jpg',
      tag: 'Nail Service',
      title: "Hire Cut’s",
      participants: ['/asset/person-1.png', '/asset/person-2.png', '/asset/person-3.png'],
      extraCount: 12,
      dateRange: '15 - 24 July',
    },
    {
      image: '/asset/3.jpg',
      tag: 'Nail Service',
      title: "Hire Cut’s",
      participants: ['/asset/person-1.png', '/asset/person-2.png', '/asset/person-3.png'],
      extraCount: 12,
      dateRange: '15 - 24 July',
    },
  ];

  return (
    <div>
    <div className="max-w-xl mx-auto p-6 space-y-4">
      {serviceCards?.map((card, index) => (
        <ServiceCard2 key={index} {...card} />
      ))}
    </div>
    
    </div>
    
  );
};

export default ServicesPage;
