import React, { useState } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

type TabProps = {
  label: string;
  children: React.ReactNode;
};

type TabsProps = {
  tabs: TabProps[];
};

const ReusableTabs = ({ tabs }: TabsProps) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (index: number) => {
    setSelectedTab(index);
  };

  return (
    <Tabs index={selectedTab} onChange={handleTabChange} isFitted>
      <TabList mb="1em">
        {tabs.map((tab, index) => (
          <Tab key={index}>{tab.label}</Tab>
        ))}
      </TabList>
      <TabPanels>
        {tabs.map((tab, index) => (
          <TabPanel key={index}>{tab.children}</TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

export default ReusableTabs;
