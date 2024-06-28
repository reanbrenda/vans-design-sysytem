import React, { useState } from 'react';
import Tabs from '../atoms/Tabs';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';

export default {
  title: 'Components/Tabs',
  component: Tabs,
};

const Template = (args) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <ThemeProvider theme={theme}>
      <Tabs {...args} activeTab={activeTab} onTabClick={handleTabClick} />
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  tabs: [
    { label: 'ACTIVE' },
    { label: 'INACTIVE' },
    { label: 'HOVER' },
    { label: 'DISABLED', disabled: true },
  ],
};
