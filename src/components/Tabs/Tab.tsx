import React, { useState } from 'react';

// Define the props interface for the Tab component
interface TabProps {
  tabs: { label: string; content: React.ReactNode }[];
}

const Tab: React.FC<TabProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0); // Track the active tab index

  return (
    <div>
      {/* Tab Navigation */}
      <div className="flex gap-2 mb-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === index
                ? 'bg-[#FFA600] text-white'
                : 'bg-[#FFE3B0] text-gray-800 '
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div>{tabs[activeTab].content}</div>
    </div>
  );
};

export default Tab;