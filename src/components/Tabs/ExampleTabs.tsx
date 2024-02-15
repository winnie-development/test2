import React from 'react';
import ReusableTabs from '.';

const tabs = [
  {
    label: 'Tab 1',
    children: (
      <div>
        <h2>Tab 1 Content</h2>
        <p>This is the content for Tab 1.</p>
      </div>
    ),
  },
  {
    label: 'Tab 2',
    children: (
      <div>
        <h2>Tab 2 Content</h2>
        <p>This is the content for Tab 2.</p>
      </div>
    ),
  },
  {
    label: 'Tab 3',
    children: (
      <div>
        <h2>Tab 3 Content</h2>
        <p>This is the content for Tab 3.</p>
      </div>
    ),
  },
];

const ExampleTabs = () => {
  return (
    <div>
      <h1>Example Tabs Component</h1>
      <ReusableTabs tabs={tabs} />
    </div>
  );
};

export default ExampleTabs;
