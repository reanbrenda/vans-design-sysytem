import React, { useState } from 'react';
import Dropdown from '../atoms/Dropdown';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    label: { control: 'text' },
    options: { control: 'object' },
    onSelect: { action: 'selected' },
  },
};

const Template = (args) => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (option) => {
    setSelected(option);
  };

  return (
    <ThemeProvider theme={theme}>
      <Dropdown {...args} onSelect={handleSelect} />
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'Dropdown',
  options: [
    { label: 'Option 1' },
    { label: 'Option 2' },
    { label: 'Option 3' },
  ],
};
