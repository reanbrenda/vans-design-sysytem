import React, { useState } from 'react';
import ProgressBar from '../atoms/ProgressBar';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';

export default {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  argTypes: {
    value: { control: 'number' },
  },
};

const Template = (args) => {
  const [value, setValue] = useState(args.value || 0);

  const handleChange = (e) => {
    setValue(Number(e.target.value));
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <ProgressBar {...args} value={value} />
        <input type="range" min="0" max="100" value={value} onChange={handleChange} />
      </div>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  value: 50,
};
